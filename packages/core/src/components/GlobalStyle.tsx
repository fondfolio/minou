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
`;
