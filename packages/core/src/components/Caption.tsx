import React from 'react';

import {Text, TextProps} from './Text';

export interface CaptionProps extends TextProps {}

export function Caption(props: CaptionProps) {
  return <Text p={0} fontSize={1} {...props} />;
}
