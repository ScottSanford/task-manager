import { createGlobalStyle } from 'styled-components'
import cssVar from './constants'
import theme from 'styled-theming'

export const themeModes = {
  lightMode: 'light',
  darkMode: 'dark',
}

// Theme Colors
const background = theme('mode', {
  [themeModes.lightMode]: cssVar.colorNeutral10,
  [themeModes.darkMode]: cssVar.colorNeutral2,
})

const color = theme('mode', {
  [themeModes.lightMode]: cssVar.colorNeutral2,
  [themeModes.darkMode]: cssVar.colorNeutral10,
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
