import { InputHTMLAttributes } from 'react'
import * as S from './styles'

export type CheckboxProps = InputHTMLAttributes<HTMLInputElement>

const Checkbox = (props: CheckboxProps) => (
  <S.Wrapper>
    <label className="container">
      <input type="checkbox" {...props} />
      <span className="checkmark" data-testid="fakeCheckbox"></span>
    </label>
  </S.Wrapper>
)

export default Checkbox
