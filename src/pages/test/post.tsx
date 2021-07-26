interface Props {
  id: number
  title: string
  content: string
}

const Post = ({ id, title, content }: Props) => {
  return (
    <tr>
      <th scope="row">{id}</th>
      <td style={{ border: '1px solid' }}>제목 : {title}</td>
      <td style={{ border: '1px solid' }}>내용 : {content}</td>
    </tr>
  )
}

export default Post
