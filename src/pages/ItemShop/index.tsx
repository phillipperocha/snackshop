import { ChangeEvent, useContext, useMemo } from 'react'
import { Link } from 'react-router-dom'
import * as S from './styles'

import Button from 'components/Button'
import Checkbox from 'components/Checkbox'
import Header from 'components/Header'
import ItemList from 'components/ItemList'

import { CartContext } from 'hooks/cart'

const ItemShop = () => {
  const { addItem, removeItem, cartItems, shopList } = useContext(CartContext)

  const { disableButton, disableCheckbox } = useMemo(() => {
    const validAmount = [1, 2, 4]
    return {
      disableButton: !validAmount.includes(cartItems.length),
      disableCheckbox: cartItems.length === 4,
    }
  }, [cartItems])

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target?.checked) {
      addItem({ name: e.target.value })
    } else {
      removeItem({ name: e.target.value })
    }
  }

  return (
    <S.Wrapper>
      <Header
        bannerImage="/img/coxinha.png"
        bannerText={
          <>
            ESCOLHEU <strong>COXINHA</strong> GANHOU DESCONTO DE{' '}
            <strong>10%</strong> NO SEU CENTO DE SALGADOS
          </>
        }
      >
        Monte seu cento de salgado (1, 2 ou 4 opções)
      </Header>

      <ItemList>
        {shopList.map(({ name }) => (
          <S.ListItem key={name}>
            <label>
              <Checkbox
                disabled={
                  disableCheckbox &&
                  !cartItems.some((item) => item.name === name)
                }
                value={name}
                onChange={(e) => handleCheckboxChange(e)}
                checked={cartItems.some((item) => item.name === name)}
              />
              {name}
            </label>
          </S.ListItem>
        ))}
      </ItemList>

      <S.Footer>
        <Link to="/checkout">
          <Button disabled={disableButton}>Carrinho</Button>
        </Link>
      </S.Footer>
    </S.Wrapper>
  )
}

export default ItemShop
