import { fetchPost } from 'api/post'
import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router'
import PostDetailPageView from './postDetail.view'

function PostDetailPage() {
  const params: { id: string } = useParams()
  const { status, data: post, error, isFetching } = useQuery(['post', params.id], fetchPost)
  console.log('여기')
  console.log(post)
  console.log('여기')

  return post ? <PostDetailPageView post={post} /> : <div> Loading... </div>
}

export default PostDetailPage
