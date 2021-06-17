import { fetchPosts } from 'api/post'
import { Post } from 'interface/post'
import React from 'react'
import { QueryClient, useMutation, useQuery, useQueryClient } from 'react-query'
import { RouteComponentProps } from 'react-router'
import CommunityPageView from './community.view'

const CommunityPage: React.FC<RouteComponentProps> = ({ match, history, location }) => {
  return <CommunityPageView match={match} history={history} location={location} />
}

export default CommunityPage
