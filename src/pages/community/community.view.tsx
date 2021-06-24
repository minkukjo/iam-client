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
import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { Link, RouteComponentProps } from 'react-router-dom'

export const IconText = ({ icon, text }: { icon: any; text: any }) => (
  <Space>
    <Icon component={icon}></Icon>
    {text}
  </Space>
)

const CommunityPageView: React.FC<RouteComponentProps> = ({ history }) => {
  const [page, setPage] = useState(0)
  const { status, data: posts, error, isFetching } = useQuery(['posts', { page }], fetchPosts)

  const onClick = () => {
    history.push('/write')
  }

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
          onChange: (page) => {
            setPage(page - 1)
          },
          current: page + 1,
          pageSize: posts?.size,
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
