import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import DetailLine from '.'

describe('<DetailLine />', () => {
  it('should render detail line', () => {
    const { container } = renderWithTheme(
      <DetailLine title="Desconto" price={55.9} />
    )

    expect(screen.getByTestId('detailLine')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
