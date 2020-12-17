import {Provider as MinouProvider} from 'minou';

export default function App({Component, pageProps}) {
  return (
    <MinouProvider>
      <Component {...pageProps} />
    </MinouProvider>
  );
}
