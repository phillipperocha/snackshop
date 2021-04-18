import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
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
