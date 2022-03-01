import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    viewSize: {
      width: string
      height: string
    }

    fontSize: {
      large: string
      medium: string
      small: string
    }

    colors: {
      black: string
      darkGray: string
      lightGray: string
    }
  }
}
