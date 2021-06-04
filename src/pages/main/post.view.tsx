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
import { Content } from 'antd/lib/layout/layout'
import React, { useState } from 'react'

interface Props {
  posts: any
}

const listData: any[] = []
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
  })
}

const IconText = ({ icon, text }: { icon: any; text: any }) => (
  <Space>
    <Icon component={icon}></Icon>
    {text}
  </Space>
)

const PostPageView = ({ posts }: Props) => {
  console.dir(listData)
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button type="primary" icon={<EditOutlined />}>
          글쓰기
        </Button>
      </div>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page)
          },
          pageSize: 10
        }}
        dataSource={listData}
        footer={
          <div>
            <b>Harry Corporation </b>
          </div>
        }
        renderItem={(item: any) => (
          <List.Item
            key={item.title}
            actions={[
              <IconText icon={EyeOutlined} text="156" key="list-vertical-star-o" />,
              <IconText icon={LikeOutlined} text="32" key="list-vertical-like-o" />,
              <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
              <IconText icon={CalendarOutlined} text="2021-06-05 15:32" key="list-vertical-date" />
            ]}
            extra={
              <img width={180} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />
            }
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            />
            {item.content}
          </List.Item>
        )}
      />
    </div>
  )
}

export default PostPageView
