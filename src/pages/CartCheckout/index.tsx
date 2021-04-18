import * as S from './styles'

import Header from 'components/Header'
import ItemList from 'components/ItemList'

import { CartContext } from 'hooks/cart'
import { useContext } from 'react'

const CartCheckout = () => {
  const {
    cartItems,
    amountEachItem,
    discount,
    pricePerHundred,
    finalPrice,
  } = useContext(CartContext)

  return (
    <S.Wrapper>
      <Header returnHref="/">Carrinho</Header>

      <S.ListTitle>Resumo do Cento de Salgado</S.ListTitle>
      <ItemList>
        {cartItems.map(({ name }) => (
          <S.ListItem key={name}>
            <span className="product">{name}</span>
            <span className="quantity">{amountEachItem}und</span>
          </S.ListItem>
        ))}
      </ItemList>

      <S.Footer>
        {!!discount && (
          <S.DiscountBox>
            <S.DetailLine>
              Subtotal
              <span>
                R$
                {pricePerHundred.toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
            </S.DetailLine>
            <S.DetailLine>
              Desconto
              <span>
                R$
                {discount.toLocaleString('pt-BR', {
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
            {finalPrice.toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>
        </S.ReviewPriceBox>
      </S.Footer>
    </S.Wrapper>
  )
}

export default CartCheckout
