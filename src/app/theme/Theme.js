import { createGlobalStyle } from 'styled-components'
import cssVar from './constants'
import theme from 'styled-theming'

// Theme Colors
const background = theme('mode', {
  'light': cssVar.colorNeutral10,
  'dark': cssVar.colorNeutral2,
})

const color = theme('mode', {
  'light': cssVar.colorNeutral2,
  'dark': cssVar.colorNeutral10,
})

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%; /* 1rem = 10px, 10px/16px (browser default) */
  }

  body {
    color: ${color};
    background: ${background};
    font-family: soleil, sans-serif;
    font-style: normal;
    font-weight: 300;
    height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: all 0.25s linear;
  }
`

export const lightTheme = {
  bodyBackgroundColor: cssVar.colorNeutral10,
  listBackgroundColor: cssVar.colorNeutral7,
  textColor: cssVar.colorNeutral2,
  textColor2: cssVar.colorNeutral4,
  headerBackgroundColor: cssVar.colorWhite,
}

export const darkTheme = {
  bodyBackgroundColor: cssVar.colorNeutral2,
  listBackgroundColor: cssVar.colorNeutral7,
  textColor: cssVar.colorNeutral10,
  textColor2: cssVar.colorNeutral9,
  headerBackgroundColor: cssVar.colorNeutral4,
}