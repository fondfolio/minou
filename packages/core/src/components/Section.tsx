import React from 'react';

import {Flex, BoxProps} from './Box';

interface Props extends BoxProps {
  children: React.ReactNode;
}

export function Section(props: Props) {
  return (
    <Flex as="section" width="100%" maxWidth="1200px" m="auto" {...props} />
  );
}
