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
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const [posts, setPosts] = useState<PostsResponse>()
  useEffect(() => {
    async function getPosts() {
      const posts = await axios.get<PostsResponse>('/post')
      setPosts(posts.data)
    }
    getPosts()
  }, [])

  const handleChange = (data: any) => {
    const target = data.target
    const value = target.value
    const id = target.id
    if (id === 'title') {
      console.log(value)
      setTitle(value)
    } else if (id === 'content') {
      console.log(value)
      setContent(value)
    }
  }

  const handleClick = async () => {
    await axios.post<PostsResponse>('/post', { title: title, content: content })
  }

  return (
    <div>
      <div>
        <form>
          <div>
            <label>제목:</label>
            <input type="text" id="title" value={title} onChange={handleChange} />
          </div>
          <div>
            <label>내용:</label>
            <input type="text" id="content" value={content} onChange={handleChange} />
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
