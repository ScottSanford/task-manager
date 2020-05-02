import { createGlobalStyle } from 'styled-components'
import cssVar from './constants'

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
    color: ${cssVar.colorNeutral1};
    background: ${cssVar.colorNeutral10};
    font-family: soleil, sans-serif;
    font-style: normal;
    font-weight: 300;
    height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export const lightTheme = {
	bodyBackgroundColor: cssVar.colorNeutral10,
	textColor: cssVar.colorNeutral1,
	headerBackgroundColor: cssVar.colorWhite,
}

export const darkTheme = {
	body: '#363537',
	text: '#FAFAFA',
	headerBackgroundColor: '#999',
}