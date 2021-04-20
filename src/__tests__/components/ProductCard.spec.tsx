import React from 'react'
import { render, screen } from '@testing-library/react'
import { GetProductsContext } from '~/contexts/GetProductsContext'
import { productsList } from '~/mocks/productsList'
import ProductCard from '~/components/ProductCard'

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: ''
    }
  }
}))

const renderComponent = () => {
  render(
    <GetProductsContext.Provider value={{ productsList }}>
      <ProductCard key={1} sku={8552515751438644} />
    </GetProductsContext.Provider>
  )
}

describe('Header tests', () => {
  test('should render the project logo', () => {
    renderComponent()
    const component = screen.getByTestId('ProductCard')
    expect(component).toBeInTheDocument()
  })

  test('should render the product name', () => {
    renderComponent()
    const component = screen.getByText('mocked product name')
    expect(component).toBeInTheDocument()
  })

  test('should render the product description', () => {
    renderComponent()
    const component = screen.getByText('mocked product description')
    expect(component).toBeInTheDocument()
  })
})
