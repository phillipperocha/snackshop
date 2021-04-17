import styled, { css } from 'styled-components'
import { ReturnArrowIconProps } from '.'

export const Wrapper = styled.div<ReturnArrowIconProps>`
  ${({ color, size }) => css`
    display: inline;

    svg {
      color: ${color};
      width: ${size};
    }
  `}
`
