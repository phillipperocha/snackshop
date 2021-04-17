import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import theme from 'styles/theme'

import ItemList from '.'

describe('<ItemList />', () => {
  it('should render the item list', () => {
    renderWithTheme(
      <ItemList>
        <li>Coxinha</li>
        <li>Pastel de carne</li>
        <li>Pastel de queijo</li>
        <li>Pastel de esfirra</li>
      </ItemList>
    )

    const list = screen.getByRole('list')

    expect(list).toBeInTheDocument()

    expect(list).toHaveStyle({
      'list-style-type': 'none',
    })

    expect(list.firstChild).toHaveStyle({
      border: `solid 0.5px ${theme.colors.lightGray}`,
      'border-top': 'none',
      width: '100%',
    })
  })
})
