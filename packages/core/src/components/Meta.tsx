import React from 'react';
import Head from 'next/head';

export function Meta() {
  return (
    <Head>
      <link
        rel="preload"
        href="/fonts/Franca-Book.otf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/Franca-SemiBold.otf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/Fragen Regular.otf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/Fragen Regular Italic.otf"
        as="font"
        crossOrigin=""
      />
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,minimal-ui"
      />
      <link rel="manifest" href="site.webmanifest" />
      <link rel="shortcut icon" href="favicon.ico" />
    </Head>
  );
}
