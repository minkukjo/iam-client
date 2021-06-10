export interface Post {
  id: number
  writer?: any
  comments?: any[]
  title: string
  content: string
  views: number
  likes: number
  createdAt: string
  updatedAt?: string
}
