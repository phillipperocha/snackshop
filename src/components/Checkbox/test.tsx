import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Checkbox from '.'

describe('<Checkbox />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Checkbox />)

    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).toHaveStyle({
      opacity: '0',
      cursor: 'pointer',
      height: '0',
      width: '0',
    })

    const fakeCheckBox = screen.getByTestId('fakeCheckbox')
    expect(fakeCheckBox).toBeInTheDocument()
  })
})
