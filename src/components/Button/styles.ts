import styled, { css } from 'styled-components'

export const Wrapper = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.xlarge};
    font-weight: 800;
    color: ${theme.colors.white};
    cursor: pointer;
    border: none;
    border-radius: ${theme.border.radius};
    text-decoration: none;
    align-items: center;
    justify-content: center;
    height: 61px;
    width: 100%;
    text-transform: uppercase;
    padding: 8px;
  `}
`