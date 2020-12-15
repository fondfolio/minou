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
  }
`;
