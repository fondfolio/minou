import {Provider as MinouProvider} from 'minou';

import {Interface} from '../components';

export default function App({Component, pageProps, components}) {
  return (
    <MinouProvider domain="">
      <Interface>
        <Component {...pageProps} />
      </Interface>
    </MinouProvider>
  );
}
