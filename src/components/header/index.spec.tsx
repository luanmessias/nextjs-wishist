import React from 'react'
import { render, screen } from '@testing-library/react'
import { GetProductsContext } from '~/contexts/GetProducts'
import { productsList } from '~/mocks/productsList'
import Header from '.'

const renderComponent = () => {
  render(
    <GetProductsContext.Provider value={{ productsList }}>
      <Header />
    </GetProductsContext.Provider>
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
