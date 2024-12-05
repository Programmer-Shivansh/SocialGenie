import {
  Typography,
  Input,
  Select,
  Card,
  Button,
  Space,
  Row,
  Col,
  Popconfirm,
  message,
} from 'antd'
import { useState } from 'react'
const { Title, Text } = Typography
const { Search } = Input
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function ContentLibraryPage() {
  const { user } = useUserContext()
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<string | null>(null)

  const { data: posts, refetch } = Api.postData.findMany.useQuery({
    where: {
      userId: user?.id,
      caption: { contains: searchTerm, mode: 'insensitive' },
      ...(statusFilter ? { status: statusFilter } : {}),
    },
    include: {
      platformPosts: true,
    },
    orderBy: { createdAt: 'desc' },
  })

  const { mutateAsync: deletePost } = Api.postData.delete.useMutation()
  const { mutateAsync: duplicatePost } = Api.postData.create.useMutation()

  const handleDelete = async (postId: string) => {
    try {
      await deletePost({ where: { id: postId } })
      message.success('Post deleted successfully')
      refetch()
    } catch (error) {
      message.error('Failed to delete post')
    }
  }

  const handleDuplicate = async (post: any) => {
    try {
      const { id, createdAt, updatedAt, ...postData } = post
      await duplicatePost({
        data: {
          ...postData,
          status: 'DRAFT',
          originalPostId: id,
        },
      })
      message.success('Post duplicated successfully')
      refetch()
    } catch (error) {
      message.error('Failed to duplicate post')
    }
  }

  const handleEdit = (postId: string) => {
    navigate(`/create?postId=${postId}`)
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '20px' }}>
        <Title level={2}>
          <i className="las la-book-open" style={{ marginRight: 8 }}></i>
          Content Library
        </Title>
        <Text type="secondary">
          Manage all your content in one place. Filter, search, and organize
          your posts efficiently.
        </Text>

        <Space
          direction="vertical"
          size="large"
          style={{ width: '100%', marginTop: 24 }}
        >
          <Row gutter={16}>
            <Col xs={24} sm={16}>
              <Search
                placeholder="Search posts by caption..."
                allowClear
                onChange={e => setSearchTerm(e.target.value)}
                style={{ width: '100%' }}
              />
            </Col>
            <Col xs={24} sm={8}>
              <Select
                style={{ width: '100%' }}
                placeholder="Filter by status"
                allowClear
                onChange={setStatusFilter}
                options={[
                  { value: 'PUBLISHED', label: 'Published' },
                  { value: 'DRAFT', label: 'Draft' },
                  { value: 'SCHEDULED', label: 'Scheduled' },
                ]}
              />
            </Col>
          </Row>

          <Row gutter={[16, 16]}>
            {posts?.map(post => (
              <Col xs={24} sm={12} lg={8} key={post.id}>
                <Card
                  cover={
                    post.imageUrl && (
                      <img
                        alt="Post preview"
                        src={post.imageUrl}
                        style={{ height: 200, objectFit: 'cover' }}
                      />
                    )
                  }
                  actions={[
                    <Button
                      key="edit"
                      type="text"
                      onClick={() => handleEdit(post.id)}
                      icon={<i className="las la-edit"></i>}
                    >
                      Edit
                    </Button>,
                    <Button
                      key="duplicate"
                      type="text"
                      onClick={() => handleDuplicate(post)}
                      icon={<i className="las la-copy"></i>}
                    >
                      Duplicate
                    </Button>,
                    <Popconfirm
                      key="delete"
                      title="Are you sure you want to delete this post?"
                      onConfirm={() => handleDelete(post.id)}
                      okText="Yes"
                      cancelText="No"
                    >
                      <Button
                        type="text"
                        danger
                        icon={<i className="las la-trash-alt"></i>}
                      >
                        Delete
                      </Button>
                    </Popconfirm>,
                  ]}
                >
                  <Card.Meta
                    title={
                      post.caption?.length
                        ? post.caption?.length > 50
                          ? `${post.caption?.substring(0, 50)}...`
                          : post.caption
                        : 'No caption'
                    }
                    description={
                      <Space direction="vertical">
                        <Text type="secondary">
                          Created: {dayjs(post.createdAt).format('MMM D, YYYY')}
                        </Text>
                        <Text>
                          Status:{' '}
                          <Text
                            strong
                            type={
                              post.status === 'PUBLISHED'
                                ? 'success'
                                : 'warning'
                            }
                          >
                            {post.status}
                          </Text>
                        </Text>
                        <Text>
                          Platform Posts: {post.platformPosts?.length ?? '0'}
                        </Text>
                      </Space>
                    }
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </Space>
      </div>
    </PageLayout>
  )
}
