import { createGlobalStyle } from 'styled-components'

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
    color: ${({ theme }) => theme.colorNeutral1};
    background: ${({ theme }) => theme.colorNeutral10};
    font-family: soleil, sans-serif;
    font-style: normal;
    font-weight: 300;
    height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export const theme = {
	/* Primary App colors */
	colorPrimary1: 'hsl(205, 100%, 21%)',
	colorPrimary2: 'hsl(205, 87%, 29%)',
	colorPrimary3: 'hsl(205, 82%, 33%)',
	colorPrimary4: 'hsl(205, 76%, 39%)',
	colorPrimary5: 'hsl(205, 67%, 45%)',
	colorPrimary6: 'hsl(205, 65%, 55%)',
	colorPrimary7: 'hsl(205, 75%, 65%)',
	colorPrimary8: 'hsl(205, 84%, 74%)',
	colorPrimary9: 'hsl(205, 97%, 85%)',
	colorPrimary10: 'hsl(205, 79%, 96%)',

	/* Neutral Colors */
	colorNeutral1: 'hsl(209, 61%, 16%)',
	colorNeutral2: 'hsl(211, 39%, 23%)',
	colorNeutral3: 'hsl(209, 34%, 30%)',
	colorNeutral4: 'hsl(209, 28%, 39%)',
	colorNeutral5: 'hsl(210, 22%, 49%)',
	colorNeutral6: 'hsl(209, 23%, 60%)',
	colorNeutral7: 'hsl(211, 27%, 70%)',
	colorNeutral8: 'hsl(210, 31%, 80%)',
	colorNeutral9: 'hsl(212, 33%, 89%)',
	colorNeutral10: 'hsl(210, 36%, 96%)',

	/* Accent Colors (Destructive, Warning, and Positive) */
	colorRed1: 'hsl(360, 92%, 20%)',
	colorRed2: 'hsl(360, 85%, 25%)',
	colorRed3: 'hsl(360, 79%, 32%)',
	colorRed4: 'hsl(360, 72%, 38%)',
	colorRed5: 'hsl(360, 67%, 44%)',
	colorRed6: 'hsl(360, 64%, 55%)',
	colorRed7: 'hsl(360, 71%, 66%)',
	colorRed8: 'hsl(360, 77%, 78%)',
	colorRed9: 'hsl(360, 82%, 89%)',
	colorRed10: 'hsl(360, 100%, 97%)',

	colorYellow1: 'hsl(15, 86%, 30%)',
	colorYellow2: 'hsl(22, 82%, 39%)',
	colorYellow3: 'hsl(29, 80%, 44%)',
	colorYellow4: 'hsl(36, 77%, 49%)',
	colorYellow5: 'hsl(42, 87%, 55%)',
	colorYellow6: 'hsl(44, 92%, 63%)',
	colorYellow7: 'hsl(48, 94%, 68%)',
	colorYellow8: 'hsl(48, 95%, 76%)',
	colorYellow9: 'hsl(48, 100%, 88%)',
	colorYellow10: 'hsl(49, 100%, 96%)',

	colorGreen1: 'hsl(184, 91%, 17%)',
	colorGreen2: 'hsl(185, 84%, 25%)',
	colorGreen3: 'hsl(185, 81%, 29%)',
	colorGreen4: 'hsl(184, 77%, 34%)',
	colorGreen5: 'hsl(185, 62%, 45%)',
	colorGreen6: 'hsl(185, 57%, 50%)',
	colorGreen7: 'hsl(184, 65%, 59%)',
	colorGreen8: 'hsl(184, 80%, 74%)',
	colorGreen9: 'hsl(185, 94%, 87%)',
	colorGreen10: 'hsl(186, 100%, 94%)',

	colorWhite: '#fff',
	colorBlack: '#000',

	bRadiusSm: '3px',
}

export const lightTheme = {
	bodyBackgroundColor: theme.colorNeutral10,
	textColor: theme.colorNeutral1,
	headerBackgroundColor: theme.colorWhite,
}

export const darkTheme = {
	body: '#363537',
	text: '#FAFAFA',
	headerBackgroundColor: '#999',
}