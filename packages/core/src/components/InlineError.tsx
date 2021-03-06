import React from 'react';

import type {Error} from '../types';

import {Text, TextProps} from './Text';

export interface InlineErrorProps extends TextProps {
  /** Content briefly explaining how to resolve the invalid form field input. */
  children: Error;
  /** Unique identifier of the invalid form field that the message describes */
  fieldID?: string;
  center?: boolean;
}

export function InlineError({
  children,
  center,
  fieldID,
  ...props
}: InlineErrorProps) {
  if (!children) {
    return null;
  }

  const textAlign = center ? 'center' : 'left';

  return (
    <Text
      small
      color="error"
      textAlign={textAlign}
      id={errorTextID(fieldID || '')}
      pb={0}
      pt={2}
      {...props}
    >
      {children}
    </Text>
  );
}

export function errorTextID(id: string) {
  return `${id}Error`;
}
