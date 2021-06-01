import BoardPage from 'pages/board/board'
import HomePage from 'pages/home/home'
import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

const RootRouter: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage}>
        {/* <Redirect to="/projects" /> */}
      </Route>
      <Route path="/board" component={BoardPage} />
    </Switch>
  </BrowserRouter>
)

export default RootRouter
