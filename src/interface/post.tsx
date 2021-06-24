export interface Post {
  id: number
  writer?: any
  comments?: any[]
  title: string
  content: string
  type: string
  views: number
  likes: number
  createdAt: string
  updatedAt?: string
}

export interface PostParams {
  title: string
  content: string
  type: string
}

export interface PagePost {
  content: Post[]
  totalPages: number
  totalElements: number
  first: boolean
  last: boolean
  size: number
}
