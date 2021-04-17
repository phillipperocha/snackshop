import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    .container {
      display: block;
      position: relative;
      padding-left: 35px;
      margin-bottom: 12px;
      cursor: pointer;
      font-size: 22px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    .container input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      height: 21px;
      width: 21px;
      border: 1px solid ${theme.colors.darkGray};
      border-radius: 3px;
      padding: 3px;
    }

    .checkmark:after {
      content: '';
      position: absolute;
      display: none;
    }

    .container input:checked ~ .checkmark:after {
      display: block;
      border: 6.5px solid ${theme.colors.primary};
      background-color: ${theme.colors.primary};
      border-radius: 3px;
    }
  `}
`