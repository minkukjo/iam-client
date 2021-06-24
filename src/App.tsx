import React from 'react'
import { setAxiosDefaults } from 'api'
import { QueryClient, QueryClientProvider } from 'react-query'
import MainPage from 'pages/main/main'
import { RecoilRoot } from 'recoil'

function App() {
  setAxiosDefaults()

  return (
    <RecoilRoot>
      <QueryClientProvider client={new QueryClient()}>
        <MainPage></MainPage>
      </QueryClientProvider>
    </RecoilRoot>
  )
}

export default App
