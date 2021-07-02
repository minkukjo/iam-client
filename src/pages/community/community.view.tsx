import Icon, {
  CalendarOutlined,
  EditOutlined,
  EyeOutlined,
  FormOutlined,
  LikeOutlined,
  MessageOutlined,
  SearchOutlined,
  StarOutlined
} from '@ant-design/icons'
import { Avatar, Button, List, Space } from 'antd'
import { fetchPosts } from 'api/post'
import { PagePost, Post } from 'interface/post'
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { Link, RouteComponentProps } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { pageState } from 'state/state'

export const IconText = ({ icon, text }: { icon: any; text: any }) => (
  <Space>
    <Icon component={icon}></Icon>
    {text}
  </Space>
)

const CommunityPageView: React.FC<RouteComponentProps> = ({ history, location }) => {
  const pageId: number = Number(location.search.split('=')[1])
  const [page, setPage] = useRecoilState(pageState)
  const [size, setSize] = useState(20)
  const { status, data: posts, error, isFetching } = useQuery(['posts', { page, size }], fetchPosts)

  const onClick = () => {
    history.push('/write')
  }

  useEffect(() => {
    setPage(pageId === undefined ? 0 : pageId)
  })

  return posts ? (
    <div>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button type="primary" icon={<EditOutlined />} onClick={onClick}>
          글쓰기
        </Button>
      </div>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page, pageSize) => {
            window.scrollTo(0, 0)
            setSize(pageSize === undefined ? 0 : pageSize)
            setPage(page - 1)
            history.push(`/community?page=${page - 1}`)
          },
          current: page + 1,
          pageSize: size,
          total: posts?.totalElements
        }}
        dataSource={posts?.content}
        footer={
          <div>
            <b>Harry Corporation </b>
          </div>
        }
        renderItem={(item: Post) => (
          <List.Item
            key={item.id}
            actions={[
              <IconText icon={EyeOutlined} text={item.views} key="list-vertical-star-o" />,
              <IconText icon={LikeOutlined} text={item.likes} key="list-vertical-like-o" />,
              <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
              <IconText icon={CalendarOutlined} text={item.createdAt} key="list-vertical-date" />
            ]}
            extra={
              <img width={180} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />
            }
          >
            <List.Item.Meta
              // avatar={<Avatar src={item.id} />}
              title={<Link to={`c/post/${item.id}`}>{item.title}</Link>}
              description={item.content}
            />
            {item.content}
          </List.Item>
        )}
      />
    </div>
  ) : (
    <div> loading... </div>
  )
}

export default CommunityPageView
