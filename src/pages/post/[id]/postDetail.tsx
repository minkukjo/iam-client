import { Modal } from 'antd'
import { deletePost, fetchPost } from 'api/post'
import React from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { useHistory, useParams } from 'react-router'
import PostDetailPageView from './postDetail.view'

function PostDetailPage() {
  const history = useHistory()
  const queryClient = useQueryClient()
  const params: { id: string } = useParams()
  const { status, data: post, error, isFetching } = useQuery(['post', params.id], fetchPost)
  const mutation = useMutation(deletePost)

  const onSubmit = (data: any) => {
    console.log(data)
    mutation.mutate({ queryKey: ['post', data.id] })

    Modal.info({
      title: '게시글 삭제가 완료되었습니다.',
      content: (
        <div>
          <p>확인 버튼을 누르면 게시판 목록으로 돌아갑니다.</p>
        </div>
      ),
      onOk: () => {
        history.push(`/${data.type}?page=0`)
      }
    })
  }

  return post ? <PostDetailPageView onSubmit={onSubmit} post={post} /> : <div> Loading... </div>
}

export default PostDetailPage
