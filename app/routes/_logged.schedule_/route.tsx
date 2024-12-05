import { Typography, Calendar, Select, Modal, TimePicker, message } from 'antd'
import { useState } from 'react'
import type { PostData, PlatformPost, SocialAccount } from '@prisma/client'
const { Title, Text } = Typography
type ScheduledPost = PostData & {
  platformPosts: (PlatformPost & {
    socialAccount: SocialAccount | null
  })[]
}
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function PostSchedulePage() {
  const { user } = useUserContext()
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs())
  const [editingPost, setEditingPost] = useState<ScheduledPost | null>(null)
  const [isModalVisible, setIsModalVisible] = useState(false)

  const { data: posts, refetch } = Api.postData.findMany.useQuery({
    where: { userId: user?.id },
    include: {
      platformPosts: {
        include: {
          socialAccount: true,
        },
      },
    },
  })

  const { mutateAsync: updatePost } = Api.postData.update.useMutation()

  const handleDateSelect = (date: Dayjs) => {
    setSelectedDate(date)
  }

  const handleDragStart = (e: React.DragEvent, post: ScheduledPost) => {
    e.dataTransfer.setData('postId', post.id)
  }

  const handleDrop = async (e: React.DragEvent, date: string) => {
    e.preventDefault()
    const postId = e.dataTransfer.getData('postId')
    try {
      await updatePost({
        where: { id: postId },
        data: { scheduledDate: date },
      })
      message.success('Post rescheduled successfully')
      refetch()
    } catch (error) {
      message.error('Failed to reschedule post')
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const dateCellRender = (date: Dayjs) => {
    const dateStr = date.format('YYYY-MM-DD')
    const dayPosts = posts?.filter(post =>
      post.scheduledDate?.startsWith(dateStr),
    )

    return (
      <div
        onDragOver={handleDragOver}
        onDrop={e => handleDrop(e, dateStr)}
        style={{ minHeight: '80px' }}
      >
        {dayPosts?.map(post => (
          <div
            key={post.id}
            draggable
            onDragStart={e => handleDragStart(e, post)}
            onClick={() => {
              setEditingPost(post)
              setIsModalVisible(true)
            }}
            style={{
              margin: '2px',
              padding: '4px',
              backgroundColor: '#f0f2f5',
              borderRadius: '4px',
              cursor: 'move',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              {post.platformPosts?.map(platformPost => (
                <i
                  key={platformPost.id}
                  className={`lab ${
                    platformPost.socialAccount?.platformName === 'instagram'
                      ? 'la-instagram'
                      : platformPost.socialAccount?.platformName === 'facebook'
                      ? 'la-facebook'
                      : 'la-twitter'
                  }`}
                />
              ))}
              <Text ellipsis style={{ maxWidth: '150px' }}>
                {post.caption}
              </Text>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
        <Title level={2}>
          <i className="las la-calendar" style={{ marginRight: '8px' }} />
          Post Schedule
        </Title>
        <Text type="secondary">
          Manage and schedule your social media posts across different platforms
        </Text>

        <div style={{ marginTop: '24px' }}>
          <Calendar
            onSelect={handleDateSelect}
            dateCellRender={dateCellRender}
          />
        </div>

        <Modal
          title="Edit Post Schedule"
          open={isModalVisible}
          onOk={async () => {
            if (editingPost) {
              try {
                await updatePost({
                  where: { id: editingPost.id },
                  data: { scheduledDate: selectedDate.format('YYYY-MM-DD') },
                })
                message.success('Post updated successfully')
                setIsModalVisible(false)
                refetch()
              } catch (error) {
                message.error('Failed to update post')
              }
            }
          }}
          onCancel={() => setIsModalVisible(false)}
        >
          {editingPost && (
            <div>
              <Text>Caption: {editingPost.caption}</Text>
              <div style={{ marginTop: '16px' }}>
                <Text>Platforms: </Text>
                {editingPost.platformPosts?.map(platformPost => (
                  <Text key={platformPost.id}>
                    {platformPost.socialAccount?.platformName}{' '}
                  </Text>
                ))}
              </div>
              <div style={{ marginTop: '16px' }}>
                <Text>Select Date and Time:</Text>
                <TimePicker
                  style={{ marginLeft: '8px' }}
                  defaultValue={dayjs(editingPost.scheduledDate)}
                  onChange={time => {
                    if (time) {
                      setSelectedDate(time)
                    }
                  }}
                />
              </div>
            </div>
          )}
        </Modal>
      </div>
    </PageLayout>
  )
}
