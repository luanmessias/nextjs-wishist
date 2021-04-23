import React from 'react'
import { render, screen } from '@testing-library/react'
import { GetProductsContext } from '~/contexts/GetProductsContext'
import { WishListProvider } from '~/contexts/WishListContext'
import { productsList } from '~/mocks/productsList'
import Index from '~/pages/index'

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
        <Index />
      </GetProductsContext.Provider>
    </WishListProvider>
  )
}

describe('Home page tests', () => {
  test('should render the page', () => {
    renderComponent()
    const component = screen.getByTestId('HomePage')
    expect(component).toBeInTheDocument()
  })

  test('should render products', () => {
    renderComponent()
    const component = screen.getAllByTestId('ProductCard')
    const ProductCardSize = component.length
    expect(ProductCardSize).toBeGreaterThan(0)
  })
})
