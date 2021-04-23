import React from 'react'
import { render, screen } from '@testing-library/react'
import LoadingSpinner from '~/components/LoadingSpinner'

const renderComponent = () => {
  render(<LoadingSpinner />)
}

describe('NotFound card tests', () => {
  test('should render the component', () => {
    renderComponent()
    const component = screen.getByTestId('LoadingSpinner')
    expect(component).toBeInTheDocument()
  })
})
