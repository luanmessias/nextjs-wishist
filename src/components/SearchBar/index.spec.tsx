import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { GetProductsContext } from '~/contexts/GetProducts'
import { productsList } from '~/mocks/productsList'
import SearchInput from '.'

const renderComponent = () => {
  render(
    <GetProductsContext.Provider value={{ productsList }}>
      <SearchInput />
    </GetProductsContext.Provider>
  )
}

describe('SearchBar tests', () => {
  test('should render the search input', () => {
    renderComponent()
    const inputNode = screen.getByPlaceholderText('Busca')
    expect(inputNode).toBeInTheDocument()
  })

  test('should show search result', () => {
    renderComponent()

    const inputNode = screen.getByPlaceholderText('Busca')
    fireEvent.change(inputNode, { target: { value: 'camisa' } })
    expect(inputNode).toBeInTheDocument()
  })
})
