import React from 'react';

import type {Action, Error} from '../../types';
import {buttonFrom} from '../Button';
import {Label} from '../Label';
import {InlineError} from '../InlineError';

import {StyledLabelled} from './styles';

export interface LabelledProps {
  /** A unique identifier for the label */
  id: string;
  /** Text for the label */
  label?: string;
  /** Error to display beneath the label */
  error?: Error | boolean;
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
    <div id={helpTextID(id)}>{helpText}</div>
  ) : null;

  const errorMarkup = error && typeof error !== 'boolean' && (
    <InlineError message={error} fieldID={id} />
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
    <StyledLabelled>
      {labelMarkup}
      {children}
      {errorMarkup}
      {helpTextMarkup}
    </StyledLabelled>
  );
}

export function errorID(id: string) {
  return `${id}Error`;
}

export function helpTextID(id: string) {
  return `${id}HelpText`;
}
