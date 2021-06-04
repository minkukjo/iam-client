import { fetchPosts } from 'api/post'
import React from 'react'
import { useQuery } from 'react-query'
import PostPageView from './post.view'

function PostPage() {
  const { status, data: posts, error, isFetching } = useQuery('posts', fetchPosts)

  return <PostPageView posts={posts}/>
}

export default PostPage
