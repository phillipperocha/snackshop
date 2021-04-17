import * as S from './styles'
import { Link } from 'react-router-dom'

import { ReturnArrowIcon } from 'components/Icons'
import theme from 'styles/theme'

export type HeaderProps = {
  returnHref?: string
  children: React.ReactNode
  bannerText?: React.ReactNode
  bannerImage?: string
}

const Header = ({
  children,
  returnHref,
  bannerText,
  bannerImage,
}: HeaderProps) => (
  <S.Wrapper hasBanner={!!bannerText}>
    {bannerText && (
      <S.Banner>
        {bannerImage && (
          <S.BannerImage>
            <img src={bannerImage} alt="Imagem de coxinhas" />
          </S.BannerImage>
        )}
        <span>{bannerText}</span>
      </S.Banner>
    )}
    <S.HeaderText>
      {!!returnHref && (
        <Link to={returnHref}>
          <ReturnArrowIcon color={theme.colors.white} size="20px" />
        </Link>
      )}
      <h3>{children}</h3>
    </S.HeaderText>
  </S.Wrapper>
)

export default Header
