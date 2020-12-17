import React, {createElement, useState, useEffect, useRef} from 'react';
import {useUniqueId} from '@minou/utilities';

import {Key} from '../types';

import {Input, Type} from './Input';
import {Labelled, LabelledProps, helpTextID} from './Labelled';

type Alignment = 'left' | 'center' | 'right';

interface NonMutuallyExclusiveProps {
  /** Text to display before value */
  prefix?: React.ReactNode;
  /** Text to display after value */
  suffix?: React.ReactNode;
  /** Hint text to display */
  placeholder?: string;
  /** Initial value for the input */
  value?: string;
  /** Additional hint text to display */
  helpText?: React.ReactNode;
  /** Label for the input */
  label?: string;
  /** Adds an action to the label */
  labelAction?: LabelledProps['action'];
  /** Visually hide the label */
  labelHidden?: boolean;
  /** Disable the input */
  disabled?: boolean;
  /** Show a clear text button in the input */
  clearButton?: boolean;
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
  /** An element connected to the right of the input */
  connectedRight?: React.ReactNode;
  /** An element connected to the left of the input */
  connectedLeft?: React.ReactNode;
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
  /** Indicates whether or not the character count should be displayed */
  showCharacterCount?: boolean;
  /** Determines the alignment of the text in the input */
  align?: Alignment;
  /** Determines the size of the text in the input */
  textSize?: 'small' | 'large';
  /** Callback when clear button is clicked */
  onClearButtonClick?(id: string): void;
  /** Callback when value is changed */
  onChange?(value: string, id: string): void;
  /** Callback when input is focused */
  onFocus?(): void;
  /** Callback when focus is removed */
  onBlur?(): void;
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
  helpText,
  label,
  labelAction,
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
}: TextFieldProps) {
  const [focus, setFocus] = useState(Boolean(focused));

  const id = useUniqueId('TextField', idProp);

  const inputRef = useRef<HTMLElement>(null);
  const prefixRef = useRef<HTMLDivElement>(null);
  const suffixRef = useRef<HTMLDivElement>(null);

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
  if (helpText) {
    describedBy.push(helpTextID(id || ''));
  }

  const input = createElement(multiline ? Input : Input, {
    name,
    id: id || '',
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
    focus,
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
      error={Boolean(error)}
      action={labelAction}
      labelHidden={labelHidden}
      helpText={helpText}
    >
      <div
        onKeyPress={handleKeyPress}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onClick={handleClick}
      >
        {input}
      </div>
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

  function containsAffix(target: HTMLElement | EventTarget) {
    return (
      target instanceof HTMLElement &&
      ((prefixRef.current && prefixRef.current.contains(target)) ||
        (suffixRef.current && suffixRef.current.contains(target)))
    );
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (onChange) {
      onChange(event.currentTarget.value, id || '');
    }
  }

  function handleFocus({target}: React.FocusEvent) {
    if (containsAffix(target)) {
      return;
    }
    setFocus(true);
  }

  function handleBlur() {
    setFocus(false);
  }

  function handleClick({target}: React.MouseEvent) {
    if (containsAffix(target)) {
      return;
    }

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
