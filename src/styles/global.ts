import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: local('Roboto Regular'),
        url('/fonts/roboto-v27-latin-regular.woff2') format('woff2'),
        url('/fonts/roboto-v27-latin-regular.woff') format('woff');
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    src: local('Roboto Bold'),
        url('/fonts/roboto-v27-latin-700.woff2') format('woff2'),
        url('/fonts/roboto-v27-latin-700.woff') format('woff');
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    src: local('Roboto Black'),
        url('/fonts/roboto-v27-latin-900.woff2') format('woff2'),
        url('/fonts/roboto-v27-latin-900.woff') format('woff');
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    src: local(''),
        url('/fonts/open-sans-v18-latin-regular.woff2') format('woff2'),
        url('/fonts/open-sans-v18-latin-regular.woff') format('woff');
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    src: local(''),
        url('/fonts/open-sans-v18-latin-700.woff2') format('woff2'),
        url('/fonts/open-sans-v18-latin-700.woff') format('woff');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      overflow-x: hidden;
      line-height: 1.3;
    }
  `}

`

export default GlobalStyles
