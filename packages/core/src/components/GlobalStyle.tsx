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

  
  
`;
