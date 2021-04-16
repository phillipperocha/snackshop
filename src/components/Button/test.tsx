import { render, screen } from '@testing-library/react'

import Button from '.'

describe('<Button />', () => {
  it('should render the button', () => {
    render(<Button />)

    expect(screen.getByRole('button', { name: /snack shop/i }))
  })
})
