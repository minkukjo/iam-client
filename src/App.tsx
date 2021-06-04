import React from 'react'
import RootRouter from 'routers'
import { setAxiosDefaults } from 'api'
import { QueryClient, QueryClientProvider } from 'react-query'

function App() {
  setAxiosDefaults()

  return (
    <QueryClientProvider client={new QueryClient()}>
      <RootRouter></RootRouter>
    </QueryClientProvider>
  )
}

export default App
