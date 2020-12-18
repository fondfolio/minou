import {createGlobalStyle} from 'styled-components';
import {theme} from '@minou/theme';
import {reset} from '@minou/utilities';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${theme.fonts.body};
    font-weight: ${theme.fontWeights.body};
  }
  *,
  *:before,
  *:after {
    ${reset}
    color: ${theme.colors.black};
  }

  @font-face {
    font-family: "Faktum";
    src: url("/fonts/FaktumTest-Regular.otf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: "Faktum";
    src: url("/fonts/FaktumTest-Medium.otf");
    font-style: medium;
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
