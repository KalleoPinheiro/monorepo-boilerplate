import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import React from 'react'
import Main from '.'

describe('Main', () => {
  it('should render successfully', () => {
    render(<Main />)
    expect(screen.getByRole('heading', { name: /Teste/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Teste/i })).toMatchSnapshot()
  })
})
