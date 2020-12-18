import React from 'react';

import type {Action, Error} from '../types';

import {buttonFrom} from './Button';
import {Box} from './Box';
import {Label} from './Label';
import {Text} from './Text';
import {InlineError} from './InlineError';

export interface LabelledProps {
  /** A unique identifier for the label */
  id: string;
  /** Text for the label */
  label?: string;
  /** Error to display beneath the label */
  error?: Error | boolean | string;
  /** An action */
  action?: Action;
  /** Additional hint text to display */
  helpText?: React.ReactNode;
  /** Content to display inside the connected */
  children?: React.ReactNode;
  /** Visually hide the label */
  labelHidden?: boolean;
}

export function Labelled({
  id,
  label,
  error,
  action,
  helpText,
  children,
  labelHidden,
  ...rest
}: LabelledProps) {
  const actionMarkup = action ? <div>{buttonFrom(action)}</div> : null;

  const helpTextMarkup = helpText ? (
    <Text fontSize={2} pb={3} color="grey" id={helpTextID(id)}>
      {helpText}
    </Text>
  ) : null;

  const errorMarkup = error && typeof error !== 'boolean' && (
    <InlineError fieldID={id}>{error}</InlineError>
  );

  const labelMarkup = label ? (
    <>
      <Label id={id} {...rest} hidden={false}>
        {label}
      </Label>

      {actionMarkup}
    </>
  ) : null;

  return (
    <Box pb={4}>
      {labelMarkup}
      {helpTextMarkup}
      {children}
      {errorMarkup}
    </Box>
  );
}

export function errorID(id: string) {
  return `${id}Error`;
}

export function helpTextID(id: string) {
  return `${id}HelpText`;
}
