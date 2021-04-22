import { AppProps } from 'next/app'
import GlobalStyle from '~/styles/global'
import MainHeader from '~/components/MainHeader'
import { GetProductsProvider } from '~/contexts/GetProductsContext'
import WishListProvider from '~/contexts/WishListContext'
import NextNprogress from 'nextjs-progressbar'
import PageTitle from '~/components/PageTitle'
import { ToastContainer } from 'react-toastify'

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => {
  return (
    <WishListProvider>
      <NextNprogress height={8} color="#5a3182" />
      <GetProductsProvider>
        <MainHeader />
        <PageTitle />
        <Component {...pageProps}></Component>
      </GetProductsProvider>

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
    </WishListProvider>
  )
}

export default MyApp
