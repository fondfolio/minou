import React from 'react';

import type {Error} from '../../types';

import {StyledInlineError} from './styles';

export interface InlineErrorProps {
  /** Content briefly explaining how to resolve the invalid form field input. */
  message: Error;
  /** Unique identifier of the invalid form field that the message describes */
  fieldID: string;
}

export function InlineError({message, fieldID}: InlineErrorProps) {
  if (!message) {
    return null;
  }

  return (
    <StyledInlineError id={errorTextID(fieldID)}>{message}</StyledInlineError>
  );
}

export function errorTextID(id: string) {
  return `${id}Error`;
}
