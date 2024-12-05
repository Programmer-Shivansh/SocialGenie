import { Typography, Card, Row, Col, Statistic, Button, List } from 'antd'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function HomePage() {
  const navigate = useNavigate()
  const { user } = useUserContext()

  // Fetch recent posts
  const { data: recentPosts } = Api.postData.findMany.useQuery({
    where: { userId: user?.id },
    orderBy: { createdAt: 'desc' },
    take: 5,
    include: { platformPosts: true },
  })

  // Fetch scheduled posts
  const { data: scheduledPosts } = Api.postData.findMany.useQuery({
    where: {
      userId: user?.id,
      status: 'SCHEDULED',
    },
    orderBy: { scheduledDate: 'asc' },
    take: 5,
  })

  // Calculate engagement metrics
  const totalEngagement =
    recentPosts?.reduce((sum, post) => {
      return (
        sum +
        (post.platformPosts?.reduce(
          (pSum, pp) => pSum + pp.engagementCount,
          0,
        ) || 0)
      )
    }, 0) || 0

  const totalPosts = recentPosts?.length || 0

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
        <Title level={2}>
          <i className="las la-tachometer-alt" style={{ marginRight: 8 }}></i>
          Dashboard
        </Title>
        <Text type="secondary">
          Welcome back! Here's an overview of your content performance.
        </Text>

        {/* Quick Actions */}
        <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
          <Col xs={24} sm={8}>
            <Button
              type="primary"
              block
              icon={<i className="las la-plus"></i>}
              onClick={() => navigate('/create')}
            >
              Create New Post
            </Button>
          </Col>
          <Col xs={24} sm={8}>
            <Button
              block
              icon={<i className="las la-calendar"></i>}
              onClick={() => navigate('/schedule')}
            >
              Schedule Posts
            </Button>
          </Col>
          <Col xs={24} sm={8}>
            <Button
              block
              icon={<i className="las la-cog"></i>}
              onClick={() => navigate('/settings')}
            >
              Manage Settings
            </Button>
          </Col>
        </Row>

        {/* Analytics Overview */}
        <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
          <Col xs={24} sm={8}>
            <Card>
              <Statistic
                title="Total Posts"
                value={totalPosts}
                prefix={<i className="las la-file-alt"></i>}
              />
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card>
              <Statistic
                title="Total Engagement"
                value={totalEngagement}
                prefix={<i className="las la-heart"></i>}
              />
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card>
              <Statistic
                title="Avg. Engagement per Post"
                value={totalPosts ? totalEngagement / totalPosts : 0}
                precision={2}
                prefix={<i className="las la-chart-line"></i>}
              />
            </Card>
          </Col>
        </Row>

        {/* Recent and Scheduled Posts */}
        <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
          <Col xs={24} md={12}>
            <Card
              title={
                <>
                  <i className="las la-clock"></i> Recent Posts
                </>
              }
            >
              <List
                dataSource={recentPosts}
                renderItem={post => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={
                        post.imageUrl && (
                          <img
                            src={post.imageUrl}
                            alt=""
                            style={{
                              width: 40,
                              height: 40,
                              objectFit: 'cover',
                            }}
                          />
                        )
                      }
                      title={post.caption}
                      description={dayjs(post.createdAt).format('MMM D, YYYY')}
                    />
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card
              title={
                <>
                  <i className="las la-calendar-check"></i> Scheduled Posts
                </>
              }
            >
              <List
                dataSource={scheduledPosts}
                renderItem={post => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={
                        post.imageUrl && (
                          <img
                            src={post.imageUrl}
                            alt=""
                            style={{
                              width: 40,
                              height: 40,
                              objectFit: 'cover',
                            }}
                          />
                        )
                      }
                      title={post.caption}
                      description={
                        post.scheduledDate &&
                        dayjs(post.scheduledDate).format('MMM D, YYYY')
                      }
                    />
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>
      </div>
    </PageLayout>
  )
}
