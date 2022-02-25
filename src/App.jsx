import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/globalStyle'
import { theme } from './styles/theme'
import TripleSection from './pages/TripleSection'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <TripleSection />
    </ThemeProvider>
  )
}

export default App
