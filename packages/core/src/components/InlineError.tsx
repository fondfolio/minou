import React from 'react';

import type {Error} from '../types';

import {Text, TextProps} from './Text';

export interface InlineErrorProps extends TextProps {
  /** Content briefly explaining how to resolve the invalid form field input. */
  children: Error;
  /** Unique identifier of the invalid form field that the message describes */
  fieldID?: string;
}

export function InlineError({children, fieldID, ...props}: InlineErrorProps) {
  if (!children) {
    return null;
  }

  return (
    <Text small color="error" id={errorTextID(fieldID || '')} {...props}>
      {children}
    </Text>
  );
}

export function errorTextID(id: string) {
  return `${id}Error`;
}
