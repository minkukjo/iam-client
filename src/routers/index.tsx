import MainPage from 'pages/main/main'
import HomePage from 'pages/home/home'
import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

const RootRouter: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage}>
        {/* <Redirect to="/projects" /> */}
      </Route>
      <Route path="/main" component={MainPage} />
    </Switch>
  </BrowserRouter>
)

export default RootRouter
