import React from 'react';

import type {Action, Error} from '../types';

import {buttonFrom} from './Button';
import {Box, Flex} from './Box';
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
  const actionMarkup = action ? (
    <div>{buttonFrom(action, {size: 'small', type: 'button'})}</div>
  ) : null;

  const helpTextMarkup = helpText ? (
    <Text fontSize={2} color="grey" id={helpTextID(id)}>
      {helpText}
    </Text>
  ) : null;

  const errorMarkup = error && typeof error !== 'boolean' && (
    <InlineError fieldID={id}>{error}</InlineError>
  );

  const labelMarkup = label ? (
    <Flex alignItems="center" justifyContent="space-between">
      <Label id={id} {...rest} hidden={false}>
        {label}
      </Label>

      {actionMarkup}
    </Flex>
  ) : null;

  return (
    <>
      <Box pt={4} pb="3">
        {labelMarkup}
        {helpTextMarkup}
      </Box>
      {children}
      {errorMarkup}
    </>
  );
}

export function errorID(id: string) {
  return `${id}Error`;
}

export function helpTextID(id: string) {
  return `${id}HelpText`;
}
