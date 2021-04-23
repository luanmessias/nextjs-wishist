import React from 'react'
import { render, screen } from '@testing-library/react'
import { GetProductsContext } from '~/contexts/GetProductsContext'
import { WishListProvider } from '~/contexts/WishListContext'
import { productsList } from '~/mocks/productsList'
import MainHeader from '~/components/MainHeader'

const renderComponent = () => {
  render(
    <WishListProvider>
      <GetProductsContext.Provider value={{ productsList }}>
        <MainHeader />
      </GetProductsContext.Provider>
    </WishListProvider>
  )
}

describe('Header tests', () => {
  test('should render the project logo', () => {
    renderComponent()
    const logo = screen.getByTestId('logo')
    expect(logo).toBeInTheDocument()
  })

  test('should render the location information', () => {
    renderComponent()
    const location = screen.getByText('Cidade:')
    expect(location).toBeInTheDocument()
  })

  test('should render the customer service link', () => {
    renderComponent()
    const customerServiceLink = screen.getByText('Central de atendimento')
    expect(customerServiceLink).toBeInTheDocument()
  })

  test('should render the wishist link', () => {
    renderComponent()
    const wishlistLink = screen.getByText('Lista de desejos')
    expect(wishlistLink).toBeInTheDocument()
  })
})
