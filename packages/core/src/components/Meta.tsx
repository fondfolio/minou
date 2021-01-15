import React from 'react';
import Head from 'next/head';

const fonts = `
@font-face {
  font-family: 'Franca';
  src: url('/fonts/Franca-Book.otf');
  src: url('/fonts/Franca-Book.woff2') format('woff2'),
    url('/fonts/Franca-Book.woff') format('woff');
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}

@font-face {
  font-family: 'Franca';
  src: url('/fonts/Franca-SemiBold.otf');
  src: url('/fonts/Franca-SemiBold.woff2') format('woff2'),
    url('/fonts/Franca-SemiBold.woff') format('woff');
  font-style: bold;
  font-weight: 500;
  font-display: swap;
}

@font-face {
  font-family: 'Fragen';
  src: url('/fonts/Fragen Regular.eot');
  src: url('/fonts/Fragen Regular.eot?#iefix') format('embedded-opentype'),
    url('/fonts/Fragen Regular.woff2') format('woff2'),
    url('/fonts/Fragen Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Fragen';
  src: url('/fonts/Fragen Regular Italic.eot');
  src: url('/fonts/Fragen Regular Italic.eot?#iefix')
      format('embedded-opentype'),
    url('/fonts/Fragen Regular Italic.woff2') format('woff2'),
    url('/fonts/Fragen Regular Italic.woff') format('woff');
  font-weight: 400;
  font-style: italic;
  font-display: swap;
}
`;

export function Meta() {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,minimal-ui"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="shortcut icon" href="/favicon.ico" />

      <style type="text/css">{fonts}</style>
    </Head>
  );
}
