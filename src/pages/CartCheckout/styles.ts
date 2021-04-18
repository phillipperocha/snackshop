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
