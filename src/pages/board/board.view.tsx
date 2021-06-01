import { Layout, Menu } from 'antd'
import React, { useState } from 'react'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined
} from '@ant-design/icons'
import 'antd/dist/antd.css'
import './board.css'

const { Header, Sider, Content } = Layout

interface Props {}

function BoardPageView() {
  const [toggle, setToggle] = useState(false)

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={toggle}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(toggle ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setToggle(!toggle)
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  )
}

export default BoardPageView