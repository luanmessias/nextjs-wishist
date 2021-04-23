import React from 'react'
import { render, screen } from '@testing-library/react'
import NotFound from '~/components/NotFound'

const renderComponent = () => {
  render(<NotFound msg="Test message" />)
}

describe('NotFound card tests', () => {
  test('should render the component', () => {
    renderComponent()
    const component = screen.getByTestId('NotFound')
    expect(component).toBeInTheDocument()
  })

  test('should render a SVG icon', () => {
    renderComponent()
    const component = screen.getByTestId('BlockSVG')
    expect(component).toBeInTheDocument()
  })

  test('should render the giver message', () => {
    renderComponent()
    const component = screen.getByText('Test message')
    expect(component).toBeInTheDocument()
  })

  test('should render a return button', () => {
    renderComponent()
    const component = screen.getByText('Test message')
    expect(component).toBeInTheDocument()
  })

  test('should navigate to home page when link is clicked', () => {
    renderComponent()
    const button = screen.getByText('VOLTAR PARA PÁGINA PRINCIPAL')
    expect(button).toHaveAttribute('href')
  })
})
