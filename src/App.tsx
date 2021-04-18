import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Routes from './router'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

import { CartProvider } from 'contexts/cart'

const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <CartProvider>
        <Routes />
      </CartProvider>
      <GlobalStyles />
    </ThemeProvider>
  </Router>
)

export default App
