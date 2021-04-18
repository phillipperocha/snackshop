import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Routes from './router'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

import { CartProvider } from 'contexts/cart'
import { useEffect, useState } from 'react'

const App = () => {
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const loader = document.querySelector('.loader-container')
    if (loader) {
      loader.remove()
      setLoading(false)
    }
  }, [])

  if (isLoading) {
    return null
  }

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CartProvider>
          <Routes />
        </CartProvider>
        <GlobalStyles />
      </ThemeProvider>
    </Router>
  )
}

export default App
