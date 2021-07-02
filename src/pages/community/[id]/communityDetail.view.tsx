import { CalendarOutlined, DownloadOutlined, EyeOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons'
import { Button, Divider, Row, Space } from 'antd'
import { Post } from 'interface/post'
import React from 'react'
import { IconText } from '../community.view'

interface Props {
  post: Post
}

const CommunityDetailPageView = ({ post }: Props) => {
  return (
    <div>
      <Row justify="start" align="top" style={{ marginBottom: 10 }}>
        <Button type="primary" icon={<DownloadOutlined />} style={{ marginRight: 10 }}></Button>
        <Button type="primary" icon={<DownloadOutlined />} style={{ marginRight: 10 }}>
          수정
        </Button>
        <Button type="primary" icon={<DownloadOutlined />}>
          글 삭제
        </Button>
      </Row>
      <Row justify="start" align="top">
        <h2 style={{ fontSize: '24px', lineHeight: '32px', fontWeight: 'bold' }}>{post.title}</h2>
      </Row>
      <Row justify="start" align="top">
        <h3>개발자 H군</h3>
      </Row>
      <Space style={{ opacity: '0.6', marginTop: 10 }}>
        <IconText icon={EyeOutlined} text={post.views === undefined ? 0 : post.views} key="list-vertical-star-o" />
        <IconText icon={LikeOutlined} text={post.likes === undefined ? 0 : post.likes} key="list-vertical-like-o" />
        <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />
        <IconText
          icon={CalendarOutlined}
          text={post.createdAt === undefined ? '알 수 없음' : post.createdAt}
          key="list-vertical-date"
        />
      </Space>
      <Divider plain></Divider>
      <Space>{post.content}</Space>
    </div>
  )
}

export default CommunityDetailPageView
