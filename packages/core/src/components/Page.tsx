import React from 'react';
import Head from 'next/head';

import {Flex, BoxProps} from './Box';

interface PageProps extends BoxProps {
  children: React.ReactNode;
  title?: string;
}

export function Page({children, title, ...props}: PageProps) {
  return (
    <Flex
      alignItems="center"
      flexDirection="column"
      width="100%"
      textAlign="center"
      flex={1}
      {...props}
    >
      <Head>
        <title>{title || 'Fondfolio'}</title>
      </Head>
      {children}
    </Flex>
  );
}
