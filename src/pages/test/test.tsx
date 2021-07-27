import axios from 'axios'
import { useEffect, useState } from 'react'
import { getPreEmitDiagnostics } from 'typescript'
import Post from './post'

interface PostsResponse {
  code: number
  message: string
  contents: PostResponse[]
}

interface PostResponse {
  id: number
  title: string
  content: string
}

interface PostRequest {
  title: string
  content: string
}

const Test = () => {
  // title, content 상태 2개를 관리하는 것에서 하나의 상태를 관리하게 수정
  const [request, setRequest] = useState<PostRequest>({ title: '', content: '' })
  const [posts, setPosts] = useState<PostsResponse>()

  useEffect(() => {
    async function getPosts() {
      const posts = await axios.get<PostsResponse>('/post')
      setPosts(posts.data)
    }
    getPosts()
  }, [])

  const handleChange = (data: any) => {
    const { id, value } = data.target
    // Object ...을 사용하여 효율적으로 deep copy하고, 새로운 값 할당까지 가능
    setRequest({
      ...request,
      [id]: value
    })
  }

  const handleClick = async () => {
    await axios.post<PostsResponse>('/post', request)
  }

  return (
    <div>
      <div>
        <form>
          <div>
            <label>제목:</label>
            <input type="text" id="title" value={request.title} onChange={handleChange} />
          </div>
          <div>
            <label>내용:</label>
            <input type="text" id="content" value={request.content} onChange={handleChange} />
          </div>
          <div>
            <button onClick={handleClick}>게시글 작성</button>
          </div>
        </form>
      </div>
      <div style={{ border: '1px solid', margin: '10px' }}>
        <table className="type01">
          <tbody>
            {posts ? (
              posts.contents.map((value, index) => {
                return <Post key={index} id={value.id} title={value.title} content={value.content}></Post>
              })
            ) : (
              <></>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Test
