import React from 'react';
import Router from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress';

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export function GlobalLoader() {
  return (
    <Head>
      <link rel="stylesheet" type="text/css" href="/minou/nprogress.css" />
    </Head>
  );
}
