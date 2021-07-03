import {
  ArrowLeftOutlined,
  CalendarOutlined,
  DeleteOutlined,
  DownloadOutlined,
  EditOutlined,
  EyeOutlined,
  LikeOutlined,
  MessageOutlined
} from '@ant-design/icons'
import { Button, Divider, Modal, Row, Space } from 'antd'
import { Post } from 'interface/post'
import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { IconText } from '../post.view'

interface Props {
  onSubmit: (data: any) => void
  post: Post
}

const PostDetailPageView = ({ onSubmit, post }: Props) => {
  const history = useHistory()
  const [isModalVisible, setIsModalVisible] = useState(false)

  const onClickBack = () => {
    history.goBack()
  }

  const onClickEdit = () => {
    history.push({
      pathname: '/write',
      state: post
    })
  }

  const onClickDelte = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    onSubmit(post)
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const categoryToKorean = (type: string) => {
    console.log(type)
    switch (type) {
      case 'community': {
        return '커뮤니티'
      }
      case 'study': {
        return '스터디'
      }
      case 'qna': {
        return 'Q & A'
      }
    }
  }

  return (
    <div>
      <Row justify="start" align="top" style={{ marginBottom: 10 }}>
        <Button type="primary" icon={<ArrowLeftOutlined />} style={{ marginRight: 10 }} onClick={onClickBack}></Button>
        <Button type="primary" icon={<EditOutlined />} style={{ marginRight: 10 }} onClick={onClickEdit}>
          글 수정
        </Button>
        <Button type="primary" icon={<DeleteOutlined />} onClick={onClickDelte}>
          글 삭제
        </Button>
        <Modal title="글 삭제" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <p>게시글을 삭제하시겠습니까?</p>
        </Modal>
      </Row>
      <Row justify="start" align="top">
        <h3>{categoryToKorean(post.type)}</h3>
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

export default PostDetailPageView
