import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
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
