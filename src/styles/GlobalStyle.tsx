import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-width: ${({ theme }) => theme.viewSize.width};
    height: ${({ theme }) => theme.viewSize.height};
    font-family: sans-serif;
  }
`
