import React from 'react'
import { AppProps } from 'next/app'
import GlobalStyle from '~/styles/global'
import Header from '~/components/header'
import { GetProductsProvider } from '~/contexts/GetProducts'

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => {
  return (
    <GetProductsProvider>
      <Header />
      <Component {...pageProps} />
      <GlobalStyle />
    </GetProductsProvider>
  )
}

export default MyApp
