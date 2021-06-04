import { Layout, Menu } from 'antd'
import React, { useState } from 'react'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  TableOutlined
} from '@ant-design/icons'
import 'antd/dist/antd.css'
import './main.css'
import PostPage from './post'

const { Header, Sider, Content } = Layout

interface Props {}

function MainPageView() {
  const [toggle, setToggle] = useState(false)
  const [menuItemKey, setMenuItemKey] = useState('1')

  const onClick = (item: any) => {
    setMenuItemKey(item.key)
  }

  const renderMenuItem = () => {
    if (menuItemKey === '1') {
      return <PostPage></PostPage>
    } else {
      return <div>{menuItemKey}</div>
    }
  }

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={toggle}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" onClick={onClick} defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<TableOutlined />}>
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
            minHeight: '100vh'
          }}
        >
          {renderMenuItem()}
        </Content>
      </Layout>
    </Layout>
  )
}

export default MainPageView
