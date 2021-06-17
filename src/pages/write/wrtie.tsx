import { useParams } from 'react-router'
import WritingPageView from './wrtie.view'

function WritingPage() {
  const params: { category: string } = useParams()
  console.dir(params)
  return <WritingPageView />
}

export default WritingPage
