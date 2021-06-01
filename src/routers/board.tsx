import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import { createRouter, IRoute } from 'utils/routerCreator'

import BoardPage from 'pages/board/board'

const routes: IRoute[] = [
  { path: '/', component: BoardPage }
  //   { path: '/:id', component: BoardDetailPage }
]

const BoardRouter: React.FC<RouteComponentProps> = ({ match }) => createRouter(match.url, routes)

export default withRouter(BoardRouter)
