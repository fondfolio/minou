import React from 'react';

import {Text, TextProps} from './Text';

interface Props extends TextProps {
  /** The content to display inside the button */
  children: React.ReactNode;
}

export function Title(props: Props) {
  return (
    <Text
      fontFamily="serif"
      textAlign="left"
      pb={3}
      fontSize={[2, 3]}
      {...props}
    />
  );
}
