import * as S from './styles'

export type ItemListProps = {
  children: React.ReactNode
}

const ItemList = ({ children }: ItemListProps) => (
  <S.Wrapper>{children}</S.Wrapper>
)

export default ItemList
