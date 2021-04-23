import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { GetProductsContext } from '~/contexts/GetProductsContext'
import SearchBar from '~/components/SearchBar'
import { productsList } from '~/mocks/productsList'

const renderComponent = () => {
  render(
    <GetProductsContext.Provider value={{ productsList }}>
      <SearchBar />
    </GetProductsContext.Provider>
  )
}

describe('SearchBar card tests', () => {
  test('should render the component', () => {
    renderComponent()
    const component = screen.getByTestId('SearchBar')
    expect(component).toBeInTheDocument()
  })

  test('should render the search input', () => {
    renderComponent()
    const component = screen.getByPlaceholderText('Busca')
    expect(component).toBeInTheDocument()
  })

  test('should render search result', () => {
    renderComponent()
    const searchInput = screen.getByPlaceholderText('Busca')
    fireEvent.change(searchInput, { target: { value: 'product' } })
    const searchResult = screen.getAllByText('mocked product name')
    const searchResultSize = searchResult.length
    expect(searchResultSize).toBeGreaterThan(0)
  })
})
