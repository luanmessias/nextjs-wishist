import React from 'react'
import * as nextRouter from 'next/router'
import { render, screen } from '@testing-library/react'
import PageTitle from '~/components/PageTitle'

nextRouter.useRouter = jest.fn()
nextRouter.useRouter.mockImplementation(() => ({
  asPath: '/wishlist',
  basePath: '',
  pathname: '/wishlist',
  route: '/wishlist',
  events: {
    on: jest.fn((event, callback) => callback),
    off: jest.fn((event, callback) => callback)
  }
}))

const renderComponent = () => {
  render(<PageTitle />)
}

describe('NotFound card tests', () => {
  test('should render the component', () => {
    renderComponent()
    const component = screen.getByTestId('PageTitle')
    expect(component).toBeInTheDocument()
  })

  test('should render the wishlist route title', () => {
    renderComponent()
    const component = screen.getByText('Lista de desejos')
    expect(component).toBeInTheDocument()
  })
})
