import { AppProps } from 'next/app'
import GlobalStyle from '~/styles/global'
import Header from '~/components/header'
import { GetProductsProvider } from '~/contexts/GetProductsContext'
import WishListProvider from '~/contexts/WishListContext'
import NextNprogress from 'nextjs-progressbar'
import BreadCrumbs from '~/components/Breadcrumbs'

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => {
  return (
    <WishListProvider>
      <GetProductsProvider>
        <NextNprogress height={8} color="#5a3182" />
        <Header />
        <BreadCrumbs />
        <Component {...pageProps}></Component>
        <GlobalStyle />
      </GetProductsProvider>
    </WishListProvider>
  )
}

export default MyApp
