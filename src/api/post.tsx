import axios from 'axios'
import { QueryFunctionContext } from 'react-query'

export const fetchPosts = async ({ queryKey }: QueryFunctionContext) => {
  const [_key, params] = queryKey
  const { data } = await axios.get<any>('/post', { params })
  return data
}
