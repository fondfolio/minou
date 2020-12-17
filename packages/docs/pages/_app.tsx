import {ThemeProvider} from 'styled-components';
import {GlobalStyle} from 'minou';

export default function App({Component, pageProps}) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={{}}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
