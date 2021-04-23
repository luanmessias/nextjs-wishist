import React from 'react'
import { render, screen } from '@testing-library/react'
import { GetProductsContext } from '~/contexts/GetProductsContext'
import { WihshListContext, WishListProvider } from '~/contexts/WishListContext'
import { productsList } from '~/mocks/productsList'
import { wishlist } from '~/mocks/wishList'
import Wishlist from '~/pages/wishlist'

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '/',
      query: '',
      asPath: '/'
    }
  }
}))

const renderComponent = () => {
  render(
    <WishListProvider>
      <GetProductsContext.Provider value={{ productsList }}>
        <Wishlist />
      </GetProductsContext.Provider>
    </WishListProvider>
  )
}

const renderComponentWithProducts = () => {
  render(
    <WihshListContext.Provider
      value={{
        wishlist,
        isInitialized: true,
        addProductToWishlist: null,
        removeProductFromWishlist: null
      }}
    >
      <GetProductsContext.Provider value={{ productsList }}>
        <Wishlist />
      </GetProductsContext.Provider>
    </WihshListContext.Provider>
  )
}

describe('WIshlist page tests', () => {
  test('should render the page', () => {
    renderComponent()
    const component = screen.getByTestId('WishlistPage')
    expect(component).toBeInTheDocument()
  })

  test('should render the page with products', () => {
    renderComponentWithProducts()
    const component = screen.getAllByTestId('ProductCard')
    const ProductCardSize = component.length
    expect(ProductCardSize).toBeGreaterThan(0)
  })

  test('should render the page without products', () => {
    renderComponent()
    const component = screen.getByTestId('NotFound')
    expect(component).toBeInTheDocument()
  })
})
