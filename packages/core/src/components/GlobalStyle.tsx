import {createGlobalStyle} from 'styled-components';
import {theme} from '@minou/theme';
import {reset} from '@minou/utilities';

const props = {
  background: '#FFF',
  color: '#EAEAEA',
  size: '2px',
  space: '24px',
};

export const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    ${reset}
    color: ${theme.colors.black};
  }

  html,
  body {
    width: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${theme.fonts.body};
    font-weight: ${theme.fontWeights.body};
  }

 body {
  min-height: 100vh;
	background:
		linear-gradient(90deg, ${props.background} (${props.space} - ${props.size}), transparent 1%) center,
		linear-gradient(${props.background} (${props.space} - ${props.size}), transparent 1%) center,
		${props.color};
  background-size: ${props.space} ${props.space};
    
    background: linear-gradient(90deg, ${props.background} 22px, transparent 1%) center, linear-gradient(${props.background} 22px, transparent 1%) center, ${props.color};
    background-size: ${props.space} ${props.space};

  }

  html {
    background: ${theme.colors.primary};
  }

  @font-face {
    font-family: "Franca";
    src: url("/fonts/Franca-Book.otf");
    src: url('/fonts/Franca-Book.woff2') format('woff2'), /* Super Modern Browsers */
    url('/fonts/Franca-Book.woff') format('woff'); /* Pretty Modern Browsers */
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  
  @font-face {
    font-family: "Franca";
    src: url("/fonts/Franca-SemiBold.otf");
    url('/fonts/Franca-SemiBold.woff2') format('woff2'), /* Super Modern Browsers */
    url('/fonts/Franca-SemiBold.woff') format('woff'); /* Pretty Modern Browsers */
    font-style: bold;
    font-weight: 500;
    font-display: swap;
  }
  
  @font-face {
    font-family: Fragen;
    src:	url('/fonts/Fragen Regular.eot'); /* IE9 Compat Modes */
    src:	url('/fonts/Fragen Regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/fonts/Fragen Regular.woff2') format('woff2'), /* Super Modern Browsers */
        url('/fonts/Fragen Regular.woff') format('woff'); /* Pretty Modern Browsers */
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  
  /* Fragen Regular Italic */
  @font-face {
    font-family: Fragen;
    src:	url('/fonts/Fragen Regular Italic.eot'); /* IE9 Compat Modes */
    src:	url('/fonts/Fragen Regular Italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/fonts/Fragen Regular Italic.woff2') format('woff2'), /* Super Modern Browsers */
        url('/fonts/Fragen Regular Italic.woff') format('woff'); /* Pretty Modern Browsers */
    font-weight: 400;
    font-style: italic;
    font-display: swap;
  }
  
  
`;
