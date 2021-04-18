import { InputHTMLAttributes } from 'react'
import * as S from './styles'

export type CheckboxProps = InputHTMLAttributes<HTMLInputElement>

const Checkbox = ({ disabled, ...props }: CheckboxProps) => (
  <S.Wrapper isDisabled={disabled}>
    <label className="container">
      <input disabled={disabled} type="checkbox" {...props} />
      <span className="checkmark" data-testid="fakeCheckbox"></span>
    </label>
  </S.Wrapper>
)

export default Checkbox
