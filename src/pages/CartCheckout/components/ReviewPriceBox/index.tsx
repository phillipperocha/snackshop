import * as S from './styles'

export type ReviewPriceBoxProps = {
  title: string
  price: number
}

const ReviewPriceBox = ({ title, price }: ReviewPriceBoxProps) => (
  <S.Wrapper data-testid="reviewPriceBox">
    <p>{title}</p>
    <span>
      R$
      {price.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}
    </span>
  </S.Wrapper>
)

export default ReviewPriceBox
