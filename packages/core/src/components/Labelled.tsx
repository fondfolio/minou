import React from 'react';
import {useToggle} from '@shopify/react-hooks';

import type {Action, Error} from '../types';

import {buttonFrom} from './Button';
import {Box, Flex} from './Box';
import {Label} from './Label';
import {Text} from './Text';
import {InlineError} from './InlineError';
import {Rule} from './Rule';

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
    text?: string;
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
    <InlineError fieldID={id}>{error}</InlineError>
  );

  const labelTextMarkup = large ? (
    <Text fontFamily="serif" large pb={0} {...rest}>
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
  action,
}: {
  text?: React.ReactNode;
  center?: boolean;
  id: string;
  action?: LabelledProps['action'];
}) {
  const {value: helpTextVisible, toggle: toggleHelpTextVisible} = useToggle(
    false,
  );
  const textAlign = center ? 'center' : 'left';

  const onClick = action
    ? () => {
        toggleHelpTextVisible();
        if (action.onClick) {
          action.onClick();
        }
      }
    : undefined;

  if (!text) {
    return null;
  }

  const toggleMarkup = action ? (
    <Rule mb={1} action={{...action, onClick}} center={center} />
  ) : null;
  const textMarkup = helpTextVisible ? (
    <Text textAlign={textAlign} pb="2" small id={helpTextID(id)}>
      {text}
    </Text>
  ) : null;

  return (
    <>
      {toggleMarkup}
      {textMarkup}
    </>
  );
}
