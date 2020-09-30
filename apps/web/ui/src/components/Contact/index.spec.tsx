import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import React from 'react'
import Contact from '.'

describe('Main', () => {
  it('should render successfully', () => {
    render(<Contact />)
    expect(
      screen.getByRole('heading', { name: /Contato/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Contato/i })).toMatchSnapshot()
  })
})
