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
  /** Center layout */
  center?: boolean;
  /** Side-by-side layout */
  horizontal?: boolean;
  /** Large layout */
  large?: boolean;
}

export function Labelled({
  id,
  label,
  error,
  action,
  helpText,
  children,
  labelHidden,
  center,
  horizontal,
  large,
  ...rest
}: LabelledProps) {
  const flexDirection = horizontal ? 'row' : 'column';
  const labelFlexDirection = center ? 'column' : 'row';
  const textAlign = center ? 'center' : 'left';
  const actionMarkup = action ? (
    <Box>{buttonFrom(action, {size: 'small'})}</Box>
  ) : null;

  const helpTextProps = large ? {} : {small: true};
  const helpTextMarkup = helpText ? (
    <Text {...helpTextProps} textAlign={textAlign} pb="2" id={helpTextID(id)}>
      {helpText}
    </Text>
  ) : null;

  const errorMarkup = error && typeof error !== 'boolean' && (
    <InlineError fieldID={id}>{error}</InlineError>
  );

  const labelTextMarkup = large ? (
    <Text italic large pb={0} {...rest}>
      {label}
    </Text>
  ) : (
    <Label pb={0} {...rest} hidden={false}>
      {label}
    </Label>
  );

  const labelMarkup = label ? (
    <Flex
      width="100%"
      alignItems="center"
      flexDirection={labelFlexDirection}
      justifyContent="space-between"
      pb={1}
    >
      {labelTextMarkup}
      {actionMarkup}
    </Flex>
  ) : null;

  const horizonalProps = horizontal
    ? {justifyContent: 'space-between', alignItems: 'center'}
    : {};

  return (
    <Flex pb={4} flexDirection={flexDirection} {...horizonalProps}>
      <Box pb={1}>
        {labelMarkup}
        {helpTextMarkup}
      </Box>
      {children}
      {errorMarkup}
    </Flex>
  );
}

export function errorID(id: string) {
  return `${id}Error`;
}

export function helpTextID(id: string) {
  return `${id}HelpText`;
}
