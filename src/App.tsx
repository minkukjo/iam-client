import React from 'react'
import { setAxiosDefaults } from 'api'
import { QueryClient, QueryClientProvider } from 'react-query'
import MainPage from 'pages/main/main'

function App() {
  setAxiosDefaults()

  return (
    <QueryClientProvider client={new QueryClient()}>
      <MainPage></MainPage>
    </QueryClientProvider>
  )
}

export default App
