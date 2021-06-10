import CommunityDetailPage from 'pages/community/[id]/communityDetail'
import { RouteComponentProps, withRouter } from 'react-router'
import { createRouter, IRoute } from 'utils/routerCreator'

const routes: IRoute[] = [{ path: 'posts/:id', component: CommunityDetailPage }]

const PostsRouter: React.FC<RouteComponentProps> = ({ match }) => createRouter(match.url, routes)

export default withRouter(PostsRouter)
