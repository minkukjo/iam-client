import { fetchPosts } from 'api/post'
import { Post } from 'interface/post'
import React from 'react'
import { QueryClient, useMutation, useQuery, useQueryClient } from 'react-query'
import { RouteComponentProps } from 'react-router'
import PostPageView from './post.view'

const PostPage = () => {
  return <PostPageView />
}

export default PostPage
