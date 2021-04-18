import * as S from './styles'

import Header from 'components/Header'
import ItemList from 'components/ItemList'

const cartItems = ['Coxinha', 'Pastel de carne', 'Pastel de queijo', 'Esfirra']
const hundredPrice = 49.9

const CartCheckout = () => (
  <S.Wrapper>
    <Header returnHref="/">Carrinho</Header>

    <S.ListTitle>Resumo do Cento de Salgado</S.ListTitle>
    <ItemList>
      {cartItems.map((item) => (
        <S.ListItem key={item}>
          <span className="product">{item}</span>
          <span className="quantity">{100 / cartItems.length}und</span>
        </S.ListItem>
      ))}
    </ItemList>

    <S.Footer>
      {cartItems.includes('Coxinha') && (
        <S.DiscountBox>
          <S.DetailLine>
            Subtotal
            <span>
              R$
              {hundredPrice.toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </S.DetailLine>
          <S.DetailLine>
            Desconto
            <span>
              R$
              {(hundredPrice * 0.1).toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </S.DetailLine>
        </S.DiscountBox>
      )}
      <S.ReviewPriceBox>
        <p>Total</p>
        <span>
          R$
          {(hundredPrice * 0.9).toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </span>
      </S.ReviewPriceBox>
    </S.Footer>
  </S.Wrapper>
)

export default CartCheckout
