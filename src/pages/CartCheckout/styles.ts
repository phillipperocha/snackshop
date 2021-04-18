import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`

export const ListTitle = styled.div`
  ${({ theme }) => css`
    display: flex;
    height: 8rem;
    border-bottom: 1px solid ${theme.colors.darkGray};
    padding: 13px 18px;
    align-items: flex-end;
  `}
`

export const ListItem = styled.li`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    .product {
      color: ${theme.colors.black};
    }

    .quantity {
      color: ${theme.colors.gray};
      font-size: ${theme.font.sizes.small};
    }
  `}
`

export const Footer = styled.footer`
  ${({ theme }) => css`
    width: 100%;
    font-family: 'Segoe UI', 'Open Sans';
    padding-top: ${theme.spacings.medium};
  `}
`

export const DiscountBox = styled.div`
  padding: 0 18px 0 21px;
`

export const DetailLine = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-style: ${theme.font.sizes.xlarge};
    color: ${theme.colors.darkGray};
    margin-top: 0.5rem;
    margin-bottom: 2.2rem;
  `}
`

export const ReviewPriceBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xlarge};
    font-weight: bold;
    height: 8.8rem;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px 20px 18px;

    span {
      margin-top 8px;
      font-size: ${theme.font.sizes.xxlarge};
    }

    p {
      margin-top: 8px;
    }
  `}
`
