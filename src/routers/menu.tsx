import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import { createRouter, IRoute } from 'utils/routerCreator'

import MainPage from 'pages/main/main'

const routes: IRoute[] = [
  { path: '/', component: MainPage }
  //   { path: '/:id', component: BoardDetailPage }
]

const BoardRouter: React.FC<RouteComponentProps> = ({ match }) => createRouter(match.url, routes)

export default withRouter(BoardRouter)
