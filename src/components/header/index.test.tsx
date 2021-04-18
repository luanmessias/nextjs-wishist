import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from '.'

describe('Counter Component', () => {
  test('deve iniciar o titulo com o valor 0', () => {
    render(<Header />)

    const counterTitle = screen.getByTestId('logo')

    expect(counterTitle).toBeInTheDocument()
  })
})
