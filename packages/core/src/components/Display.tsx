import React from 'react';

import {Text, TextProps} from './Text';

interface Props extends TextProps {
  /** The content to display inside the button */
  children: React.ReactNode;
}

export function Display(props: Props) {
  return (
    <Text
      lineHeight="heading"
      fontFamily="serif"
      fontSize={[3, 4]}
      {...props}
    />
  );
}
