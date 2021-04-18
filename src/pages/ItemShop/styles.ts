import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
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

export const Footer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 22px 23px;
`
