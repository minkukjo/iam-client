import { Modal } from 'antd'
import { writePost } from 'api/post'
import { PostParams } from 'interface/post'
import { useMutation, useQueryClient } from 'react-query'
import { RouteComponentProps } from 'react-router'
import { useRecoilState } from 'recoil'
import { menuItemState } from 'state/state'
import WritingPageView from './wrtie.view'

const WritingPage: React.FC<RouteComponentProps> = ({ match, history, location }) => {
  const queryClient = useQueryClient()
  const [menuItem, setMenuItem] = useRecoilState(menuItemState)
  const mutation = useMutation(writePost, {
    onSuccess: () => queryClient.invalidateQueries('post')
  })

  const onSubmit = (data: any) => {
    console.log(data)
    const params: PostParams = {
      title: data.title,
      content: data.content,
      type: data.category
    }
    mutation.mutate({ queryKey: ['post', params] })

    Modal.info({
      title: '게시글 작성이 완료되었습니다.',
      content: (
        <div>
          <p>확인 버튼을 누르면 게시판 목록으로 돌아갑니다.</p>
        </div>
      ),
      onOk: () => {
        setMenuItem(data.category)
        history.push(`/${data.category}`)
      }
    })
  }

  return <WritingPageView onSubmit={onSubmit} />
}

export default WritingPage
