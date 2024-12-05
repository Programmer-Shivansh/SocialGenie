import {
  Button,
  Card,
  Input,
  Select,
  Space,
  Typography,
  Row,
  Col,
  message,
} from 'antd'
import { useState } from 'react'
const { Title, Text, Paragraph } = Typography
const { TextArea } = Input
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function ContentCreationPage() {
  const { user } = useUserContext()
  const [imageUrl, setImageUrl] = useState('')
  const [caption, setCaption] = useState('')
  const [imagePrompt, setImagePrompt] = useState('')
  const [isGeneratingImage, setIsGeneratingImage] = useState(false)
  const [isGeneratingCaption, setIsGeneratingCaption] = useState(false)
  const [selectedPlatform, setSelectedPlatform] = useState('instagram')

  const { mutateAsync: generateImage } = Api.ai.generateImage.useMutation()
  const { mutateAsync: generateText } = Api.ai.generateText.useMutation()
  const { mutateAsync: createPost } = Api.postData.create.useMutation()
  const { mutateAsync: upload } = useUploadPublic()

  const handleImageGeneration = async () => {
    try {
      setIsGeneratingImage(true)
      const response = await generateImage({ prompt: imagePrompt })
      setImageUrl(response.url)
    } catch (error) {
      message.error('Failed to generate image')
    } finally {
      setIsGeneratingImage(false)
    }
  }

  const handleCaptionGeneration = async () => {
    try {
      setIsGeneratingCaption(true)
      const response = await generateText({
        prompt: `Generate a creative social media caption for ${selectedPlatform} about: ${imagePrompt}`,
      })
      setCaption(response.answer)
    } catch (error) {
      message.error('Failed to generate caption')
    } finally {
      setIsGeneratingCaption(false)
    }
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      try {
        const response = await upload({ file: e.target.files[0] })
        setImageUrl(response.url)
      } catch (error) {
        message.error('Failed to upload image')
      }
    }
  }

  const saveDraft = async () => {
    try {
      await createPost({
        data: {
          caption,
          imageUrl,
          status: 'DRAFT',
          aiGenerated: true,
          userId: user?.id,
        },
      })
      message.success('Draft saved successfully')
    } catch (error) {
      message.error('Failed to save draft')
    }
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
        <Title level={2}>
          <i className="las la-magic" /> Content Creation Studio
        </Title>
        <Text>Create engaging social media content with AI assistance</Text>

        <Row gutter={[24, 24]} style={{ marginTop: '24px' }}>
          <Col xs={24} lg={12}>
            <Card
              title={
                <>
                  <i className="las la-image" /> Visual Content
                </>
              }
            >
              <Space direction="vertical" style={{ width: '100%' }}>
                <Input.TextArea
                  placeholder="Describe the image you want to generate..."
                  value={imagePrompt}
                  onChange={e => setImagePrompt(e.target.value)}
                  rows={4}
                />
                <Space>
                  <Button
                    type="primary"
                    onClick={handleImageGeneration}
                    loading={isGeneratingImage}
                    icon={<i className="las la-robot" />}
                  >
                    Generate with AI
                  </Button>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    style={{ display: 'none' }}
                    id="imageUpload"
                  />
                  <Button
                    onClick={() =>
                      document.getElementById('imageUpload')?.click()
                    }
                    icon={<i className="las la-upload" />}
                  >
                    Upload Image
                  </Button>
                </Space>
                {imageUrl && (
                  <img
                    src={imageUrl}
                    alt="Generated content"
                    style={{ width: '100%', borderRadius: '8px' }}
                  />
                )}
              </Space>
            </Card>
          </Col>

          <Col xs={24} lg={12}>
            <Card
              title={
                <>
                  <i className="las la-pen" /> Caption & Preview
                </>
              }
            >
              <Space direction="vertical" style={{ width: '100%' }}>
                <Select
                  style={{ width: '100%' }}
                  value={selectedPlatform}
                  onChange={setSelectedPlatform}
                  options={[
                    { label: 'Instagram', value: 'instagram' },
                    { label: 'Twitter', value: 'twitter' },
                    { label: 'Facebook', value: 'facebook' },
                  ]}
                />
                <TextArea
                  placeholder="Write your caption..."
                  value={caption}
                  onChange={e => setCaption(e.target.value)}
                  rows={6}
                />
                <Button
                  onClick={handleCaptionGeneration}
                  loading={isGeneratingCaption}
                  icon={<i className="las la-magic" />}
                >
                  Generate Caption with AI
                </Button>
                <Card title="Preview">
                  <div
                    style={{
                      background: '#f5f5f5',
                      padding: '16px',
                      borderRadius: '8px',
                    }}
                  >
                    {imageUrl && (
                      <img
                        src={imageUrl}
                        alt="Preview"
                        style={{
                          width: '100%',
                          borderRadius: '8px',
                          marginBottom: '16px',
                        }}
                      />
                    )}
                    <Paragraph>{caption}</Paragraph>
                  </div>
                </Card>
                <Button
                  type="primary"
                  block
                  onClick={saveDraft}
                  icon={<i className="las la-save" />}
                >
                  Save as Draft
                </Button>
              </Space>
            </Card>
          </Col>
        </Row>
      </div>
    </PageLayout>
  )
}
