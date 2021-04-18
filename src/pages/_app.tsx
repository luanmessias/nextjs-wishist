import React from 'react'
import { AppProps } from 'next/app'
import GlobalStyle from '~/styles/global'
import Header from '~/components/header'
import { GetProductsProvider } from '~/contexts/GetProducts'
import NextNprogress from 'nextjs-progressbar'

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => {
  return (
    <GetProductsProvider>
      <NextNprogress height={8} color="#5a3182" />
      <Header />
      <Component {...pageProps} />
      <GlobalStyle />
    </GetProductsProvider>
  )
}

export default MyApp
