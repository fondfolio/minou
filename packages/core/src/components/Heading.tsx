import React from 'react';

import {Text, TextProps} from './Text';

export interface HeadingProps extends TextProps {}

export function Heading(props: HeadingProps) {
  return <Text pb={1} {...props} fontSize={6} fontWeight={500} />;
}
