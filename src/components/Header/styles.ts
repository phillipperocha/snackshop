import styled, { css } from 'styled-components'

type WrapperProps = { hasBanner: boolean }
export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, hasBanner }) => css`
    padding-top: 0;
    background: ${theme.colors.primary};
    ${hasBanner && { paddingTop: '5px' }}
  `}
`

export const Banner = styled.div`
  ${({ theme }) => css`
    display: flex;
    background-image: url('/assets/img/bannerBackground.svg');
    background-size: cover;
    align-items: center;
    padding: 0 ${theme.spacings.xsmall};
    gap: ${theme.spacings.xxsmall};
    min-height: 10.6rem;

    span {
      font-size: ${theme.font.sizes.xlarge};
    }
  `}
`

export const BannerImage = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 11.4rem;
    justify-content: flex-end;
    margin-left: -${theme.spacings.xsmall};
  `}
`

export const HeaderText = styled.div`
  ${({ theme }) => css`
    display: flex;
    min-height: 6.3rem;
    padding: ${theme.spacings.xsmall};
    align-items: center;

    svg {
      cursor: pointer;
      margin-right: ${theme.spacings.xxsmall};
    }

    h3 {
      color: ${theme.colors.white};
      font-weight: bold;
      font-size: ${theme.font.sizes.large};
      display: inline;
    }
  `}
`
