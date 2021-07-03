import { Modal } from 'antd'
import { updatePost, writePost } from 'api/post'
import { Post, PostParams } from 'interface/post'
import { useMutation, useQueryClient } from 'react-query'
import { useHistory, useLocation } from 'react-router'
import { useRecoilState } from 'recoil'
import { menuItemState } from 'state/state'
import WritingPageView from './wrtie.view'

const WritingPage = () => {
  const location = useLocation()
  const post = location.state as Post
  console.log(post)
  const history = useHistory()
  const queryClient = useQueryClient()
  const [menuItem, setMenuItem] = useRecoilState(menuItemState)
  const mutation = useMutation(post ? updatePost : writePost, {
    onSuccess: () => queryClient.invalidateQueries('post')
  })

  const onSubmit = (data: any) => {
    const params: PostParams = {
      title: data.title,
      content: data.content,
      type: data.category
    }
    mutation.mutate({ queryKey: ['post', params, post?.id] })

    Modal.info({
      title: post ? '게시글 수정이 완료되었습니다.' : '게시글 작성이 완료되었습니다.',
      content: (
        <div>
          <p>확인 버튼을 누르면 게시판 목록으로 돌아갑니다.</p>
        </div>
      ),
      onOk: () => {
        setMenuItem(data.category)
        history.push(`/${data.category}?page=0`)
      }
    })
  }

  return <WritingPageView onSubmit={onSubmit} />
}

export default WritingPage
