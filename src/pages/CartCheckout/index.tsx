import * as S from './styles'

import Header from 'components/Header'
import ItemList from 'components/ItemList'

import { CartContext } from 'contexts/cart'
import { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'

const CartCheckout = () => {
  const {
    cartItems,
    amountEachItem,
    discount,
    pricePerHundred,
    finalPrice,
    loading: cartLoading,
  } = useContext(CartContext)

  const [loading, setLoading] = useState(true)
  const router = useHistory()

  useEffect(() => {
    if (!cartLoading) {
      if (![1, 2, 4].includes(cartItems.length)) {
        setLoading(true)
        router.push('/')
      } else {
        setLoading(false)
      }
    }
  }, [cartItems.length, router, cartLoading])

  return loading ? null : (
    <S.Wrapper>
      <div>
        <Header returnHref="/">Carrinho</Header>

        <main>
          <S.ListTitle>Resumo do Cento de Salgado</S.ListTitle>
          <ItemList>
            {cartItems.map(({ name }) => (
              <S.ListItem key={name}>
                <span className="product">{name}</span>
                <span className="quantity">{amountEachItem}und</span>
              </S.ListItem>
            ))}
          </ItemList>
        </main>
      </div>
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
