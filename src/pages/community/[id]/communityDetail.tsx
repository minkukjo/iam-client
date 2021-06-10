import { fetchPost } from 'api/post'
import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router'
import CommunityDetailPageView from './communityDetail.view'

function CommunityDetailPage() {
  const params: { id: string } = useParams()
  const { status, data: post, error, isFetching } = useQuery(['post', params.id], fetchPost)

  return post ? <CommunityDetailPageView post={post} /> : <div> Loading... </div>
}

export default CommunityDetailPage
