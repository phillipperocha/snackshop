import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import ReviewPriceBox from '.'

describe('<ReviewPriceBox />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <ReviewPriceBox title="Total" price={49.89} />
    )

    expect(screen.getByTestId('reviewPriceBox')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
