import Button from 'components/Button'
import Checkbox from 'components/Checkbox'
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
      <S.ListItem>
        <Checkbox />
        <span>Coxinha</span>
      </S.ListItem>
      <S.ListItem>
        <Checkbox />
        <span>Pastel de carne</span>
      </S.ListItem>
      <S.ListItem>
        <Checkbox />
        <span>Pastel de queijo</span>
      </S.ListItem>
      <S.ListItem>
        <Checkbox />
        <span>Esfirra</span>
      </S.ListItem>
      <S.ListItem>
        <Checkbox />
        <span>Canudinho</span>
      </S.ListItem>
      <S.ListItem>
        <Checkbox />
        <span>Empada</span>
      </S.ListItem>
      <S.ListItem>
        <Checkbox />
        <span>Torta de Frango</span>
      </S.ListItem>
    </ItemList>

    <S.Footer>
      <Button>Carrinho</Button>
    </S.Footer>
  </S.Wrapper>
)

export default ItemShop
