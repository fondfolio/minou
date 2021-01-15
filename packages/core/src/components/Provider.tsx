import React from 'react';
import {theme} from '@minou/theme';
import {ThemeProvider} from 'styled-components';

import {Meta} from './Meta';
import {Seo} from './Seo';
import {GlobalStyle} from './GlobalStyle';

interface Props {
  /** Custom theme */
  theme?: any;
  /** App component */
  children?: React.ReactNode;
  /** Main domain of the app */
  domain: string;
}

export function Provider({children, domain, ...props}: Props) {
  return (
    <>
      <GlobalStyle />
      <Meta />
      <Seo openGraph={{url: domain}} />
      <ThemeProvider theme={{...theme, ...props.theme}}>
        {children}
      </ThemeProvider>
    </>
  );
}
