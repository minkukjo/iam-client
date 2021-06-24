import { Layout, Menu } from 'antd'
import React, { useEffect, useState } from 'react'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  CommentOutlined,
  ReadOutlined,
  BulbOutlined
} from '@ant-design/icons'
import 'antd/dist/antd.css'
import './main.css'
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom'
import CommunityPage from '../community/community'
import CommunityDetailPage from '../community/[id]/communityDetail'
import StudyPage from 'pages/study/sutdy'
import QnaPage from 'pages/qna/qna'
import WritingPage from 'pages/write/wrtie'
import { useRecoilState } from 'recoil'
import { menuItemState } from 'state/state'
const { Header, Sider, Content } = Layout

function MainRouterPage() {
  const [toggle, setToggle] = useState(false)
  const [menuItem, setMenuItem] = useRecoilState(menuItemState)

  const onClick = (item: any) => {
    setMenuItem(item.key)
  }

  return (
    <BrowserRouter>
      <Switch>
        <>
          <Layout>
            <Sider trigger={null} collapsible collapsed={toggle}>
              <div className="logo" />
              <Menu
                theme="dark"
                mode="inline"
                onClick={onClick}
                selectedKeys={[menuItem]}
                defaultSelectedKeys={['community']}
              >
                <Menu.Item key="community" icon={<CommentOutlined />}>
                  <Link to="/community"></Link>
                  커뮤니티
                </Menu.Item>
                <Menu.Item key="study" icon={<ReadOutlined />}>
                  <Link to="/study"></Link>
                  스터디 모집
                </Menu.Item>
                <Menu.Item key="qna" icon={<BulbOutlined />}>
                  <Link to="/qna">Q & A</Link>
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
                {/* <Redirect path="/" to="/community" /> */}
                <Route path="/community" component={CommunityPage} />
                <Route path="/c/post/:id" component={CommunityDetailPage} />
                <Route path="/study" component={StudyPage} />
                <Route path="/qna" component={QnaPage} />
                <Route path="/write" component={WritingPage} />
              </Content>
            </Layout>
          </Layout>
        </>
      </Switch>
    </BrowserRouter>
  )
}

export default MainRouterPage
