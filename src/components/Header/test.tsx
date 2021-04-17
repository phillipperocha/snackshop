import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { MemoryRouter } from 'react-router'
import theme from 'styles/theme'

import Header from '.'

describe('<Header />', () => {
  it('should render the default header correctly', () => {
    const { container } = renderWithTheme(<Header>Carrinho</Header>)

    const heading = screen.getByRole('heading', { name: /carrinho/i })

    expect(heading).toBeInTheDocument()

    expect(heading).toHaveStyle({
      color: theme.colors.white,
      'font-weight': 'bold',
    })

    expect(heading.parentElement).toHaveStyle({
      'min-height': '6.3rem',
      display: 'flex',
    })

    expect(container.firstChild).toHaveStyle({
      background: theme.colors.primary,
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the header with banner', () => {
    const props = {
      children: 'Monte seu cento de salgado (1, 2 ou 4 opções)',
      bannerText: 'Promoção de coxinha',
      bannerImage: '/img/coxinha.png',
    }

    const { container } = renderWithTheme(<Header {...props} />)

    const heading = screen.getByRole('heading', { name: props.children })

    expect(heading).toBeInTheDocument()

    expect(heading).toHaveStyle({
      color: theme.colors.white,
      'font-weight': 'bold',
    })

    const bannerText = screen.getByText(props.bannerText)

    expect(bannerText).toBeInTheDocument()

    expect(bannerText.parentElement).toHaveStyle({
      display: 'flex',
      'background-image': 'url(/img/bannerBackground.svg)',
      'background-size': 'cover',
      'min-height': '10.6rem',
    })

    expect(
      screen.getByRole('img', { name: /imagem de coxinhas/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toHaveStyle({
      background: theme.colors.primary,
      'padding-top': '5px',
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render header with icon', () => {
    renderWithTheme(
      <MemoryRouter initialEntries={['/']}>
        <Header returnHref="/">Carrinho</Header>
      </MemoryRouter>
    )

    const icon = screen.getByLabelText(/return arrow icon/i)

    expect(icon).toBeInTheDocument()

    expect(icon).toHaveStyle({
      color: theme.colors.white,
    })

    expect(screen.getByRole('link').getAttribute('href')).toBe('/')
  })
})
