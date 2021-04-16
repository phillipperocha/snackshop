import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

const Button = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <S.Wrapper {...props}>{children}</S.Wrapper>
)

export default Button
