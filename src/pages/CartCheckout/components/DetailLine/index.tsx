import * as S from './styles'

export type DetailLineProps = {
  title: string
  price: number
}

const DetailLine = ({ title, price }: DetailLineProps) => (
  <S.Wrapper data-testid="detailLine">
    {title}
    <span>
      R$
      {price.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}
    </span>
  </S.Wrapper>
)

export default DetailLine
