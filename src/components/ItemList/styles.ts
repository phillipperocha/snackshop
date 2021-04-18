import styled, { css } from 'styled-components'

export const Wrapper = styled.ul`
  ${({ theme }) => css`
    list-style-type: none;

    li {
      display: flex;
      padding: ${theme.spacings.xsmall};
      border: solid 0.5px ${theme.colors.lightGray};
      border-top: none;
      width: 100%;
      height: 8rem;
      align-items: center;
    }
  `}
`
