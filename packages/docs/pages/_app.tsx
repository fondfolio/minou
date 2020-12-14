import {createGlobalStyle, ThemeProvider} from 'styled-components';
import theme from '@minou/theme';

const GlobalStyle = createGlobalStyle`
  *,  
  body {
    margin: 0;
    padding: 0;
  }
`;

export default function App({Component, pageProps}) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
