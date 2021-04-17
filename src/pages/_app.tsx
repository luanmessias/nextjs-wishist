import React from 'react'
import { AppProps } from 'next/app'
import GlobalStyle from '@globalStyles/global'
import Header from '@components/header'

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}

export default MyApp
