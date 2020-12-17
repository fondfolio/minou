import React from 'react';
import {theme} from '@minou/theme';
import {ThemeProvider} from 'styled-components';

import {Meta} from './Meta';
import {GlobalStyle} from './GlobalStyle';

interface Props {
  /** App component */
  children?: React.ReactNode;
}

export function Provider({children}: Props) {
  return (
    <>
      <GlobalStyle />
      <Meta />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
}
