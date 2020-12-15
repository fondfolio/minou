import {ThemeProvider} from 'styled-components';
import {theme, GlobalStyle} from 'minou';

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
