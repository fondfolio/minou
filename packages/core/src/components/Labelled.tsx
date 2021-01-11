import React from 'react';

import type {Action, Error} from '../types';

import {buttonFrom} from './Button';
import {Box, Flex} from './Box';
import {Label} from './Label';
import {Text} from './Text';
import {InlineError} from './InlineError';
import {Rule} from './Rule';
import {Markdown} from './Markdown';
import {IconType} from './Icon';

export interface LabelledProps {
  /** A unique identifier for the label */
  id: string;
  /** Text for the label */
  label?: string;
  /** Error to display beneath the label */
  error?: Error | boolean | string;
  /** An action */
  action?: Action;
  /** Content to display inside the connected */
  help?: {
    icon?: IconType;
    text?: string;
    hidden?: boolean;
    action?: LabelledProps['action'];
  };
  /** An action */
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
  children,
  labelHidden,
  center,
  horizontal,
  large,
  help,
  ...rest
}: LabelledProps) {
  const flexDirection = horizontal ? 'row' : 'column';
  const labelFlexDirection = center ? 'column' : 'row';
  const actionMarkup = action ? (
    <Box>{buttonFrom(action, {size: 'small'})}</Box>
  ) : null;

  const errorMarkup = error && typeof error !== 'boolean' && (
    <InlineError center={center} fieldID={id}>
      {error}
    </InlineError>
  );

  const labelTextMarkup = large ? (
    <Text as="label" fontFamily="serif" large pb={0} {...rest}>
      {label}
    </Text>
  ) : (
    <Label as="label" pb={0} {...rest} hidden={labelHidden}>
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
        <HelpText id={id} {...help} center={center} />
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

function HelpText({
  text,
  center,
  id,
  hidden,
  action,
  icon,
}: LabelledProps['help'] & {
  center: LabelledProps['center'];
  id: LabelledProps['id'];
}) {
  if (!text) {
    return null;
  }

  const textAlign = center ? 'center' : 'left';
  const toggleMarkup = action ? (
    <Rule mb={1} action={action} center={center} icon={icon} />
  ) : null;
  const textMarkup = hidden ? null : (
    <Text
      as="div"
      textAlign={textAlign}
      pt="1"
      pb={0}
      small
      id={helpTextID(id)}
    >
      <Markdown>{text}</Markdown>
    </Text>
  );

  return (
    <>
      {toggleMarkup}
      {textMarkup}
    </>
  );
}
