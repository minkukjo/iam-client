import axios from 'axios'
import { PagePost } from 'interface/post'
import { QueryFunctionContext } from 'react-query'

export const fetchPosts = async ({ queryKey }: QueryFunctionContext) => {
  const [_key, params] = queryKey
  const { data } = await axios.get<PagePost>('/post', { params })
  return data
}

export const fetchPost = async ({ queryKey }: QueryFunctionContext) => {
  const [_key, id] = queryKey
  const { data } = await axios.get<any>(`/post/${id}`)
  return data
}

export const writePost = async ({ queryKey }: QueryFunctionContext) => {
  const [_key, params] = queryKey
  const { data } = await axios.post<any>(`/post`, params)
  return data
}

export const updatePost = async ({ queryKey }: QueryFunctionContext) => {
  const [_key, params, id] = queryKey
  const { data } = await axios.patch<any>(`/post/${id}`, params)
  return data
}

export const deletePost = async ({ queryKey }: QueryFunctionContext) => {
  const [_key, id] = queryKey
  const { data } = await axios.delete<any>(`/post/${id}`)
  return data
}
