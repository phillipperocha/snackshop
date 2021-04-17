import theme from 'styles/theme'
import * as S from './styles'

export type ReturnArrowIconProps = {
  color?: string
  size?: string
}

const ReturnArrowIcon = ({
  color = theme.colors.white,
  size = theme.font.sizes.xlarge,
}: ReturnArrowIconProps) => (
  <S.Wrapper color={color} size={size}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="17.58"
      viewBox="0 0 20 17.58"
      aria-label="Return Arrow Icon"
    >
      <defs></defs>
      <g transform="translate(0 -0.325)">
        <g transform="translate(0 0.325)">
          <path
            fill={color}
            d="M0,9.115,8.79.325l2.2,2.2L5.861,7.649H20v3.108H6.037l4.95,4.95-2.2,2.2Z"
            transform="translate(0 -0.325)"
          />
        </g>
      </g>
    </svg>
  </S.Wrapper>
)

export default ReturnArrowIcon
