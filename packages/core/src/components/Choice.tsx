import React from 'react';
import styled from 'styled-components';

import type {Error} from '../types';

import {InlineError} from './InlineError';
import {Label} from './Label';
import {Text} from './Text';
import {Flex} from './Box';

const StyledChoice = styled.div`
  &,
  & > *,
  & > *:hover,
  &:hover {
    cursor: pointer;
  }
`;

export interface ChoiceProps {
  /** A unique identifier for the choice */
  id: string;
  /**	Label for the choice */
  label: React.ReactNode;
  /** Whether the associated form control is disabled */
  disabled?: boolean;
  /** Display an error message */
  error?: Error | boolean;
  /** Visually hide the label */
  labelHidden?: boolean;
  /**  Content to display inside the choice */
  children?: React.ReactNode;
  /** Additional text to aide in use */
  helpText?: React.ReactNode;
  /** Callback when clicked */
  onClick?(): void;
  /** Callback when mouse over */
  onMouseOver?(): void;
  /** Callback when mouse out */
  onMouseOut?(): void;
  hovered?: boolean;
  selected?: boolean;
}

export function Choice({
  id,
  label,
  disabled,
  error,
  children,
  labelHidden,
  helpText,
  onClick,
  onMouseOut,
  onMouseOver,
  selected,
}: ChoiceProps) {
  const color = disabled || !selected ? 'black' : 'primary';
  const labelMarkup = (
    <Flex
      as="label"
      onClick={onClick}
      onKeyDown={onClick}
      onFocus={onMouseOver}
      onBlur={onMouseOut}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      alignItems="center"
    >
      {children}
      <Label as="span" pb="0" pl={2} hidden={labelHidden} color={color}>
        {label}
      </Label>
    </Flex>
  );

  const helpTextMarkup = helpText ? (
    <Text pt={3} small id={helpTextID(id)}>
      {helpText}
    </Text>
  ) : null;

  const errorMarkup = error && typeof error !== 'boolean' && (
    <InlineError fieldID={id}>{error}</InlineError>
  );

  const descriptionMarkup =
    helpTextMarkup || errorMarkup ? (
      <>
        {errorMarkup}
        {helpTextMarkup}
      </>
    ) : null;

  return descriptionMarkup ? (
    <>
      <StyledChoice>{labelMarkup}</StyledChoice>
      {descriptionMarkup}
    </>
  ) : (
    <StyledChoice>{labelMarkup}</StyledChoice>
  );
}

export function helpTextID(id: string) {
  return `${id}HelpText`;
}
