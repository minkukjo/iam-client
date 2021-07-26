import { Layout, Menu } from 'antd'
import React, { useEffect, useState } from 'react'
import { MenuUnfoldOutlined, MenuFoldOutlined, CommentOutlined, ReadOutlined, BulbOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'
import './main.css'
import { BrowserRouter, Link, Route, Switch, useLocation } from 'react-router-dom'
import PostPage from '../post/post'
import PostDetailPage from '../post/[id]/postDetail'
import WritingPage from 'pages/write/wrtie'
import { useRecoilState } from 'recoil'
import { menuItemState, pageState } from 'state/state'
import ScrollToTop from 'components/scroll'
import Test from 'pages/test/test'
const { Header, Sider, Content } = Layout

function MainRouterPage() {
  const href = window.location.href.split('/')
  const [toggle, setToggle] = useState(false)
  const [menuItem, setMenuItem] = useRecoilState(menuItemState)
  const [page, setPage] = useRecoilState(pageState)

  const onClick = (item: any) => {
    setMenuItem(item.key)
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <>
          <Layout>
            <Sider trigger={null} collapsible collapsed={toggle}>
              <div className="logo" />
              <Menu
                theme="dark"
                mode="inline"
                onClick={onClick}
                selectedKeys={[href[3].split('?')[0]]}
                defaultSelectedKeys={[href[3].split('?')[0]]}
              >
                <Menu.Item key="community" icon={<CommentOutlined />}>
                  <Link to="/community?page=0"></Link>
                  커뮤니티
                </Menu.Item>
                <Menu.Item key="study" icon={<ReadOutlined />}>
                  <Link to="/study?page=0"></Link>
                  스터디 모집
                </Menu.Item>
                <Menu.Item key="qna" icon={<BulbOutlined />}>
                  <Link to="/qna?page=0">Q & A</Link>
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
                  minHeight: '90vh'
                }}
              >
                {/* <Redirect path="/" to={`/community?page=${page}`} /> */}
                <Route path="/community" component={PostPage} />
                <Route path="/c/post/:id" component={PostDetailPage} />
                <Route path="/study" component={PostPage} />
                <Route path="/qna" component={PostPage} />
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
