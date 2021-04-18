import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`

export const ListItem = styled.li`
  ${({ theme }) => css`
    display: flex;

    align-items: center;

    label {
      display: flex;
      gap: 15px;
      color: ${theme.colors.darkGray};
    }
  `}
`

export const Footer = styled.footer`
  ${({ theme }) => css`
    width: 100%;
    padding: 22px 23px;
    padding-top: ${theme.spacings.medium};
  `}
`
