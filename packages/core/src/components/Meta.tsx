import React from 'react';
import Head from 'next/head';

export function Meta() {
  return (
    <Head>
      <link
        rel="preload"
        href="/fonts/FrancaTest-Book.otf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/FrancaTest-Medium.otf"
        as="font"
        crossOrigin=""
      />
    </Head>
  );
}
