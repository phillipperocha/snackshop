import styled, { css } from 'styled-components'

type WrapperProps = { hasIcon: boolean }

const wrapperModifiers = {
  withIcon: () => css`
    svg {
      width: 20px;

      & + span {
        margin-left: 10px;
      }
    }
  `,
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ hasIcon }) => css`
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
    height: 111px;
    align-items: center;
    font-size: 20px;
    justify-content: space-between;

    span {
      font-family: ${theme.font.family};
      text-align: left;
      margin-left: 10px;
      padding-right: 20px;
      min-width: 278px;
      width: 100%;
    }
  `}
`

export const BannerImage = styled.div`
  min-width: 100px;
  width: 168px;
  max-height: 106px;
  padding: 2px 0 2px 0;
  height: 100%;
  background-image: url('/img/coxinha.png');
  background-position: right;
  background-repeat: no-repeat;
`

export const HeaderText = styled.div`
  ${({ theme }) => css`
    display: flex;
    background: ${theme.colors.primary};
    font-size: 18px;
    font-weight: bold;
    color: ${theme.colors.white};
    height: 63px;
    align-items: center;
    justify-content: left;
    padding: ${theme.spacings.xsmall};
  `}
`
