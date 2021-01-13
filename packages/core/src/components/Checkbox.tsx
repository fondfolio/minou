import React, {useState} from 'react';
// import {MinusMinor, TickSmallMinor} from '@shopify/polaris-icons';
import {useToggle, useUniqueId} from '@minou/utilities';

import {Error, Key} from '../types';

import {Choice, helpTextID} from './Choice';
import {errorTextID} from './InlineError';
import {Icon, IconName} from './Icon';

export interface CheckboxProps {
  /** Indicates the ID of the element that describes the checkbox*/
  ariaDescribedBy?: string;
  /** Label for the checkbox */
  label: React.ReactNode;
  /** Visually hide the label */
  labelHidden?: boolean;
  /** Checkbox is selected. */
  checked?: boolean;
  /** Additional text to aide in use */
  helpText?: React.ReactNode;
  /** Disable input */
  disabled?: boolean;
  /** ID for form input */
  id?: string;
  /** Name for form input */
  name?: string;
  /** Value for form input */
  value?: string;
  /** Display an error message */
  error?: Error | boolean;
  /** Callback when checkbox is toggled */
  onChange?(newChecked: boolean, id: string): void;
  /** Callback when checkbox is focussed */
  onFocus?(): void;
  /** Callback when focus is removed */
  onBlur?(): void;
  icon?: IconName;
  children?: React.ReactNode;
}

export function Checkbox({
  ariaDescribedBy: ariaDescribedByProp,
  label,
  labelHidden,
  checked = false,
  helpText,
  disabled,
  id: idProp,
  name,
  value,
  error,
  onChange,
  onFocus,
  onBlur,
  icon,
  children,
}: CheckboxProps) {
  const id = useUniqueId('Checkbox', idProp);
  const {
    value: mouseOver,
    setTrue: handleMouseOver,
    setFalse: handleMouseOut,
  } = useToggle(false);
  const [keyFocused, setKeyFocused] = useState(false);

  const handleBlur = () => {
    if (onBlur) {
      onBlur();
    }
    setKeyFocused(false);
  };

  const handleInput = () => {
    if (onChange) {
      onChange(!checked, id || '');
    }
  };

  const handleKeyUp = (event: React.KeyboardEvent) => {
    const {keyCode} = event;
    if (!keyFocused) {
      setKeyFocused(true);
    }
    if (keyCode === Key.Space) {
      handleInput();
    }
  };

  const describedBy: string[] = [];
  if (error && typeof error !== 'boolean') {
    describedBy.push(errorTextID(id || ''));
  }
  if (helpText) {
    describedBy.push(helpTextID(id || ''));
  }
  if (ariaDescribedByProp) {
    describedBy.push(ariaDescribedByProp);
  }
  const ariaDescribedBy = describedBy.length
    ? describedBy.join(' ')
    : undefined;

  const color = checked ? 'primary' : '';

  const iconMarkup = icon ? <Icon icon={icon} color={color} /> : null;

  return (
    /* eslint-disable jsx-a11y/control-has-associated-label */
    <Choice
      id={id || ''}
      label={label}
      labelHidden={labelHidden}
      helpText={helpText}
      error={error}
      disabled={disabled}
      hovered={mouseOver}
      onClick={handleInput}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      selected={checked}
    >
      <input
        onKeyUp={handleKeyUp}
        id={id || ''}
        name={name}
        value={value}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onFocus={onFocus}
        onBlur={handleBlur}
        onClick={stopPropagation}
        onChange={noop}
        aria-invalid={error != null}
        aria-describedby={ariaDescribedBy}
        aria-checked={checked}
      />
      {iconMarkup}
      {children}
    </Choice>
    /* eslint-enable jsx-a11y/control-has-associated-label */
  );
}

function noop() {}

function stopPropagation<E>(event: React.MouseEvent<E>) {
  event.stopPropagation();
}
