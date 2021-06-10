import { fetchPosts } from 'api/post'
import { Post } from 'interface/post'
import React from 'react'
import { QueryClient, useMutation, useQuery, useQueryClient } from 'react-query'
import CommunityPageView from './community.view'

function CommunityPage() {
  return <CommunityPageView />
}

export default CommunityPage
