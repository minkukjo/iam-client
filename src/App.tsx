import React from 'react'
import { setAxiosDefaults } from 'api'
import { QueryClient, QueryClientProvider } from 'react-query'
import MainPage from 'pages/main/main'
import { RecoilRoot } from 'recoil'
import Test from 'pages/test/test'

function App() {
  setAxiosDefaults()

  return (
    <RecoilRoot>
      <QueryClientProvider client={new QueryClient()}>
        <Test></Test>
        {/* <MainPage></MainPage> */}
      </QueryClientProvider>
    </RecoilRoot>
  )
}

export default App
