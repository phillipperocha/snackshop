import styled, { css } from 'styled-components'

type WrapperProps = { hasIcon: boolean }

const wrapperModifiers = {
  withIcon: () => css`
    svg {
      width: 2rem;

      & + span {
        margin-left: 1rem;
      }
    }
  `,
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ hasIcon }) => css`
    min-width: 418px;

    ${!!hasIcon && wrapperModifiers.withIcon()};
  `}
`

export const Banner = styled.div`
  ${({ theme }) => css`
    display: flex;
    background-image: url('/img/bannerBackground.svg');
    background-size: cover;
    width: 100%;
    border-top: 5px solid ${theme.colors.primary};
    height: 10.6rem;
    align-items: center;
    font-size: 20px;
  `}
`

export const HeaderText = styled.div`
  ${({ theme }) => css`
    display: flex;
    background: ${theme.colors.primary};
    font-size: 18px;
    font-weight: bold;
    color: ${theme.colors.white};
    height: 6.3rem;
    align-items: center;
    justify-content: left;
    padding: ${theme.spacings.xsmall};
  `}
`
