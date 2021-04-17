import Button from 'components/Button'
import Header from 'components/Header'
import ItemList from 'components/ItemList'
import * as S from './styles'

const ItemShop = () => (
  <S.Wrapper>
    <Header
      bannerImage="/img/coxinha.png"
      bannerText={
        <>
          ESCOLHEU <strong>COXINHA</strong> GANHOU DESCONTO DE{' '}
          <strong>10%</strong>NO SEU CENTO DE SALGADOS
        </>
      }
    >
      Monte seu cento de salgado (1, 2 ou 4 opções)
    </Header>

    <ItemList>
      <li>Coxinha</li>
      <li>Pastel de carne</li>
      <li>Pastel de queijo</li>
      <li>Pastel de esfirra</li>
    </ItemList>

    <S.Footer>
      <Button>Carrinho</Button>
    </S.Footer>
  </S.Wrapper>
)

export default ItemShop
