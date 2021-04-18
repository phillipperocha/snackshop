import { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'

import * as S from './styles'
import { CartContext } from 'contexts/cart'

import Header from 'components/Header'
import ItemList from 'components/ItemList'
import { DetailLine, ReviewPriceBox } from './components'

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
            <DetailLine title="Subtotal" price={pricePerHundred} />
            <DetailLine title="Desconto" price={discount} />
          </S.DiscountBox>
        )}
        <ReviewPriceBox title="Total" price={finalPrice} />
      </S.Footer>
    </S.Wrapper>
  )
}

export default CartCheckout
