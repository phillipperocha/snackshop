import { ThemeProvider } from 'styled-components'
import { MemoryRouter } from "react-router";
import GlobalStyles from '../src/styles/global'
import theme from '../src/styles/theme'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <MemoryRouter initialEntries={['/']}>
        <GlobalStyles/>
        <Story/>
      </MemoryRouter>
    </ThemeProvider>
  )
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
