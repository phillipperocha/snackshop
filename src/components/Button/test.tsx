import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import theme from 'styles/theme'

import Button from '.'

describe('<Button />', () => {
  it('should render the button', () => {
    const { container } = renderWithTheme(<Button>CARRINHO</Button>)

    expect(screen.getByRole('button', { name: /carrinho/i })).toHaveStyle({
      height: '61px',
      color: theme.colors.white,
      background: theme.colors.primary,
    })

    expect(container.firstChild).toMatchSnapshot()
  })
})
