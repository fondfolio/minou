import React from 'react';

import {Text, TextProps} from './Text';

export interface LabelProps extends TextProps {
  small?: boolean;
  /** Label content */
  children: React.ReactNode;
  /** Visually hide the label */
  hidden?: boolean;
  /** Size of the label */
}

export function Label(props: LabelProps) {
  return <Text fontWeight="bold" {...props} />;
}
