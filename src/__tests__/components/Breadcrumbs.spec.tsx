import React from 'react'
import * as nextRouter from 'next/router'
import { render, screen } from '@testing-library/react'
import Breadcrumbs from '~/components/Breadcrumbs'

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
  render(<Breadcrumbs />)
}

describe('NotFound card tests', () => {
  test('should render the component', () => {
    renderComponent()
    const component = screen.getByTestId('breadcrumbs')
    expect(component).toBeInTheDocument()
  })

  test('should render the home link', () => {
    renderComponent()
    const component = screen.getByText('Home')
    expect(component).toBeInTheDocument()
  })

  test('should render the wishlist link', () => {
    renderComponent()
    const component = screen.getByText('wishlist')
    expect(component).toBeInTheDocument()
  })
})
