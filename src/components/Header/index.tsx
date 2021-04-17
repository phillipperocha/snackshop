import * as S from './styles'

export type HeaderProps = {
  icon?: JSX.Element
  children: React.ReactNode
  withBanner?: boolean
  bannerText?: React.ReactNode
}

const Header = ({
  children,
  icon,
  withBanner = false,
  bannerText,
}: HeaderProps) => (
  <S.Wrapper hasIcon={!!icon}>
    {withBanner && bannerText && (
      <S.Banner>
        <S.BannerImage />
        <span>{bannerText}</span>
      </S.Banner>
    )}
    <S.HeaderText>
      <p>{children}</p>
    </S.HeaderText>
  </S.Wrapper>
)

export default Header
