import React, {createElement, useState, useEffect, useRef} from 'react';
import {useUniqueId} from '@minou/utilities';

import {Key, Error} from '../types';

import {Input, Type, TextArea} from './Input';
import {Box} from './Box';
import {Labelled, LabelledProps, helpTextID} from './Labelled';

type Alignment = 'left' | 'center' | 'right';

interface NonMutuallyExclusiveProps {
  /** Hint text to display */
  placeholder?: string;
  /** Initial value for the input */
  value?: string;
  /** Label for the input */
  label?: string;
  /** Adds an action to the label */
  labelAction?: LabelledProps['action'];
  /** Adds an action to the help text */
  help?: LabelledProps['help'];
  /** Visually hide the label */
  labelHidden?: boolean;
  /** Disable the input */
  disabled?: boolean;
  /** Disable editing of the input */
  readOnly?: boolean;
  /** Automatically focus the input */
  autoFocus?: boolean;
  /** Force the focus state on the input */
  focused?: boolean;
  /** Allow for multiple lines of input */
  multiline?: boolean | number;
  /** Error to display beneath the label */
  error?: Error | boolean | string;
  /** Determine type of input */
  type?: Type;
  /** Name of the input */
  name?: string;
  /** ID for the input */
  id?: string;
  /** Defines a specific role attribute for the input */
  role?: string;
  /** Limit increment value for numeric and date-time inputs */
  step?: number;
  /** Enable automatic completion by the browser */
  autoComplete?: boolean | string;
  /** Mimics the behavior of the native HTML attribute, limiting the maximum value */
  max?: number | string;
  /** Maximum character length for an input */
  maxLength?: number;
  /** Mimics the behavior of the native HTML attribute, limiting the minimum value */
  min?: number | string;
  /** Minimum character length for an input */
  minLength?: number;
  /** A regular expression to check the value against */
  pattern?: string;
  /** Indicate whether value should have spelling checked */
  spellCheck?: boolean;
  /** Indicates the id of a component owned by the input */
  ariaOwns?: string;
  /** Indicates the id of a component controlled by the input */
  ariaControls?: string;
  /** Indicates the id of a related component’s visually focused element to the input */
  ariaActiveDescendant?: string;
  /** Indicates what kind of user input completion suggestions are provided */
  ariaAutocomplete?: 'none' | 'inline' | 'list' | 'both' | undefined;
  /** Determines the alignment of the text in the input */
  align?: Alignment;
  /** Determines the size of the text in the input */
  textSize?: 'small' | 'large';
  /** Callback when value is changed */
  onChange?(value: string, id: string): void;
  /** Callback when input is focused */
  onFocus?(): void;
  /** Callback when focus is removed */
  onBlur?(): void;
  /** Side-by-side layout */
  horizontal?: boolean;
  /** Center layout */
  center?: boolean;
  /** Large label */
  large?: boolean;
}

export type TextFieldProps = NonMutuallyExclusiveProps &
  (
    | {readOnly: true}
    | {disabled: true}
    | {onChange?(value: string, id: string): void}
  );

export function TextField({
  placeholder,
  value,
  label,
  labelAction,
  help,
  labelHidden,
  disabled,
  readOnly,
  autoFocus,
  focused,
  multiline,
  error,
  type,
  name,
  id: idProp,
  role,
  step,
  autoComplete,
  max,
  maxLength,
  min,
  minLength,
  pattern,
  spellCheck,
  ariaOwns,
  ariaControls,
  ariaActiveDescendant,
  ariaAutocomplete,
  onChange,
  onFocus,
  onBlur,
  textSize,
  horizontal,
  center,
  large,
}: TextFieldProps) {
  const [focus, setFocus] = useState(Boolean(focused));
  const id = useUniqueId('TextField', idProp);
  const inputRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const input = inputRef.current;
    if (!input || focused === undefined) {
      return;
    }
    if (focused) {
      input.focus();
    } else {
      input.blur();
    }
  }, [focused]);

  const normalizedValue = typeof value === 'string' ? value : '';
  const inputType = type === 'currency' ? 'text' : type;

  const describedBy: string[] = [];
  if (error) {
    describedBy.push(`${id}Error`);
  }
  if (help) {
    describedBy.push(helpTextID(id || ''));
  }

  const input = createElement(multiline ? TextArea : Input, {
    name,
    id: id || idProp,
    disabled,
    readOnly,
    textSize,
    role,
    autoFocus,
    value: normalizedValue,
    placeholder,
    onFocus,
    onBlur,
    onKeyPress: handleKeyPress,
    autoComplete: normalizeAutoComplete(autoComplete),
    onChange: handleChange,
    min,
    max,
    step,
    minLength,
    maxLength,
    spellCheck,
    pattern,
    error: Boolean(error),
    focus,
    center,
    type: inputType,
    'aria-describedby': describedBy.length ? describedBy.join(' ') : undefined,
    'aria-labelledby': name,
    'aria-invalid': Boolean(error),
    'aria-owns': ariaOwns,
    'aria-activedescendant': ariaActiveDescendant,
    'aria-autocomplete': ariaAutocomplete,
    'aria-controls': ariaControls,
    'aria-multiline': normalizeAriaMultiline(multiline),
  });

  return (
    <Labelled
      label={label}
      id={id || ''}
      error={error}
      action={labelAction}
      labelHidden={labelHidden}
      help={help}
      horizontal={horizontal}
      center={center}
      large={large}
    >
      <Box
        onKeyPress={handleKeyPress}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onClick={handleClick}
      >
        {input}
      </Box>
    </Labelled>
  );

  function handleKeyPress(event: React.KeyboardEvent) {
    const {key, which} = event;
    const numbersSpec = /[\d.eE+-]$/;
    if (type !== 'number' || which === Key.Enter || numbersSpec.test(key)) {
      return;
    }
    event.preventDefault();
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (onChange) {
      onChange(event.currentTarget.value, id || '');
    }
  }

  function handleFocus() {
    setFocus(true);
  }

  function handleBlur() {
    setFocus(false);
  }

  function handleClick() {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }
}

function normalizeAutoComplete(autoComplete?: boolean | string) {
  if (autoComplete === true) {
    return 'on';
  } else if (autoComplete === false) {
    return 'off';
  } else {
    return autoComplete;
  }
}

function normalizeAriaMultiline(multiline?: boolean | number) {
  switch (typeof multiline) {
    case 'undefined':
      return false;
    case 'boolean':
      return multiline;
    case 'number':
      return Boolean(multiline > 0);
  }
}
