import {
  Typography,
  Card,
  Form,
  Input,
  Select,
  TimePicker,
  Button,
  Space,
  Divider,
  Row,
  Col,
  message,
} from 'antd'
import { useState } from 'react'
import type { Prisma } from '@prisma/client'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function SocialMediaSettingsPage() {
  const { user } = useUserContext()
  const [form] = Form.useForm()

  // Fetch social accounts
  const { data: socialAccounts, refetch: refetchSocialAccounts } =
    Api.socialAccount.findMany.useQuery({
      where: { userId: user?.id },
    })

  // Fetch content preferences
  const { data: contentPreferences } = Api.contentPreference.findMany.useQuery({
    where: { userId: user?.id },
  })

  // Mutations
  const createSocialAccount = Api.socialAccount.create.useMutation()
  const updateSocialAccount = Api.socialAccount.update.useMutation()
  const deleteSocialAccount = Api.socialAccount.delete.useMutation()
  const updateContentPreference = Api.contentPreference.update.useMutation()
  const createContentPreference = Api.contentPreference.create.useMutation()

  const handleSocialAccountSubmit = async (values: any) => {
    try {
      if (values.id) {
        await updateSocialAccount.mutateAsync({
          where: { id: values.id },
          data: {
            platformName: values.platformName,
            accessToken: values.accessToken,
            refreshToken: values.refreshToken,
            defaultPostingTime: values.defaultPostingTime,
            platformUsername: values.platformUsername,
          },
        })
      } else {
        await createSocialAccount.mutateAsync({
          data: {
            ...values,
            userId: user?.id,
          },
        })
      }
      message.success('Social account settings saved successfully')
      refetchSocialAccounts()
    } catch (error) {
      message.error('Failed to save social account settings')
    }
  }

  const handleContentPreferencesSubmit = async (values: any) => {
    try {
      if (contentPreferences && contentPreferences[0]) {
        await updateContentPreference.mutateAsync({
          where: { id: contentPreferences[0].id },
          data: values,
        })
      } else {
        await createContentPreference.mutateAsync({
          data: {
            ...values,
            userId: user?.id,
          },
        })
      }
      message.success('Content preferences saved successfully')
    } catch (error) {
      message.error('Failed to save content preferences')
    }
  }

  const handleDeleteAccount = async (id: string) => {
    try {
      await deleteSocialAccount.mutateAsync({ where: { id } })
      message.success('Social account deleted successfully')
      refetchSocialAccounts()
    } catch (error) {
      message.error('Failed to delete social account')
    }
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
        <Title level={2}>
          <i className="las la-cog" /> Social Media Settings
        </Title>
        <Text>
          Manage your social media accounts, posting preferences, and content
          generation settings.
        </Text>

        <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
          <Col xs={24} lg={12}>
            <Card
              title={
                <>
                  <i className="lab la-connectdevelop" /> Connected Accounts
                </>
              }
            >
              <Form
                form={form}
                onFinish={handleSocialAccountSubmit}
                layout="vertical"
              >
                <Form.Item
                  name="platformName"
                  label="Platform"
                  rules={[{ required: true }]}
                >
                  <Select>
                    <Select.Option value="instagram">Instagram</Select.Option>
                    <Select.Option value="facebook">Facebook</Select.Option>
                    <Select.Option value="twitter">Twitter</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  name="platformUsername"
                  label="Username"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="accessToken"
                  label="Access Token"
                  rules={[{ required: true }]}
                >
                  <Input.Password />
                </Form.Item>
                <Form.Item name="refreshToken" label="Refresh Token">
                  <Input.Password />
                </Form.Item>
                <Form.Item
                  name="defaultPostingTime"
                  label="Default Posting Time"
                >
                  <TimePicker format="HH:mm" />
                </Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  icon={<i className="las la-save" />}
                >
                  Save Account
                </Button>
              </Form>

              <Divider />

              <div>
                {socialAccounts?.map(account => (
                  <Card
                    key={account.id}
                    size="small"
                    style={{ marginBottom: 16 }}
                  >
                    <Space
                      align="center"
                      style={{ width: '100%', justifyContent: 'space-between' }}
                    >
                      <div>
                        <Text strong>{account.platformName}</Text>
                        <br />
                        <Text type="secondary">{account.platformUsername}</Text>
                      </div>
                      <Space>
                        <Button
                          size="small"
                          onClick={() => form.setFieldsValue(account)}
                          icon={<i className="las la-edit" />}
                        />
                        <Button
                          size="small"
                          danger
                          onClick={() => handleDeleteAccount(account.id)}
                          icon={<i className="las la-trash" />}
                        />
                      </Space>
                    </Space>
                  </Card>
                ))}
              </div>
            </Card>
          </Col>

          <Col xs={24} lg={12}>
            <Card
              title={
                <>
                  <i className="las la-sliders-h" /> Content Preferences
                </>
              }
            >
              <Form
                initialValues={contentPreferences?.[0]}
                onFinish={handleContentPreferencesSubmit}
                layout="vertical"
              >
                <Form.Item name="aiImageStyle" label="AI Image Style">
                  <Select>
                    <Select.Option value="realistic">Realistic</Select.Option>
                    <Select.Option value="cartoon">Cartoon</Select.Option>
                    <Select.Option value="artistic">Artistic</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item name="captionTone" label="Caption Tone">
                  <Select>
                    <Select.Option value="professional">
                      Professional
                    </Select.Option>
                    <Select.Option value="casual">Casual</Select.Option>
                    <Select.Option value="friendly">Friendly</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item name="hashtagCount" label="Hashtag Count">
                  <Select>
                    <Select.Option value={5}>5 Hashtags</Select.Option>
                    <Select.Option value={10}>10 Hashtags</Select.Option>
                    <Select.Option value={15}>15 Hashtags</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item name="language" label="Preferred Language">
                  <Select>
                    <Select.Option value="en">English</Select.Option>
                    <Select.Option value="es">Spanish</Select.Option>
                    <Select.Option value="fr">French</Select.Option>
                  </Select>
                </Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  icon={<i className="las la-save" />}
                >
                  Save Preferences
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    </PageLayout>
  )
}
