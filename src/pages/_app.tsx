import { AppProps } from 'next/app'
import GlobalStyle from '~/styles/global'
import Header from '~/components/header'
import { GetProductsProvider } from '~/contexts/GetProductsContext'
import WishListProvider from '~/contexts/WishListContext'
import NextNprogress from 'nextjs-progressbar'
import PageTtitle from '~/components/PageTitle'
import { ToastContainer } from 'react-toastify'

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => {
  return (
    <WishListProvider>
      <GetProductsProvider>
        <NextNprogress height={8} color="#5a3182" />
        <Header />
        <PageTtitle />

        <Component {...pageProps}></Component>
        <GlobalStyle />

        <ToastContainer
          position="bottom-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </GetProductsProvider>
    </WishListProvider>
  )
}

export default MyApp
