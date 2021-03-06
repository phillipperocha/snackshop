import styled, { css } from 'styled-components'

const wrapperModifiers = {
  disabled: () => css`
    cursor: not-allowed;
  `,
}

export const Wrapper = styled.button`
  ${({ theme, disabled }) => css`
    background: ${theme.colors.primary};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.weight.black};
    color: ${theme.colors.white};
    cursor: pointer;
    border: none;
    border-radius: ${theme.border.radius};
    text-decoration: none;
    align-items: center;
    justify-content: center;
    height: 6.1rem;
    width: 100%;
    text-transform: uppercase;
    padding: 0.8rem;

    ${disabled && wrapperModifiers.disabled()}
  `}
`
