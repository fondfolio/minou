import React from 'react';

import {Flex, BoxProps} from './Box';

interface Props extends BoxProps {
  children: React.ReactNode;
}

export function Container(props: Props) {
  return (
    <Flex
      width="100%"
      justifyContent="center"
      flexDirection="column"
      textAlign="center"
      p={[3, 4]}
      {...props}
    />
  );
}
