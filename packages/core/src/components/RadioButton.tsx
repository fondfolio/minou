/* eslint-disable jsx-a11y/control-has-associated-label */
import React, {useRef, useState} from 'react';
import {useUniqueId, useToggle} from '@minou/utilities';

import {Choice, helpTextID} from './Choice';
import {Icon, IconType} from './Icon';
import {Image} from './Image';
import {Box} from './Box';

export interface RadioButtonProps {
  /** Indicates the ID of the element that describes the the radio button*/
  ariaDescribedBy?: string;
  /** Label for the radio button */
  label: React.ReactNode;
  /** Visually hide the label */
  labelHidden?: boolean;
  /** Radio button is selected */
  checked?: boolean;
  /** Additional text to aid in use */
  helpText?: React.ReactNode;
  /** Disable input */
  disabled?: boolean;
  /** ID for form input */
  id?: string;
  /** Name for form input */
  name?: string;
  /** Value for form input */
  value?: string;
  /** Callback when the radio button is toggled */
  onChange?(newValue: boolean, id: string): void;
  /** Callback when radio button is focussed */
  onFocus?(): void;
  /** Callback when focus is removed */
  onBlur?(): void;
  icon?: IconType;
  image?: string;
  bordered?: boolean;
}

export function RadioButton({
  ariaDescribedBy: ariaDescribedByProp,
  label,
  labelHidden,
  helpText,
  checked,
  disabled,
  onChange,
  onFocus,
  onBlur,
  id: idProp,
  name: nameProp,
  value,
  icon,
  image,
  bordered,
}: RadioButtonProps) {
  const id = useUniqueId('RadioButton', idProp);
  const name = nameProp || id;
  const inputNode = useRef<HTMLInputElement>(null);
  const [keyFocused, setKeyFocused] = useState(false);

  const {
    value: mouseOver,
    setTrue: handleMouseOver,
    setFalse: handleMouseOut,
  } = useToggle(false);

  const handleKeyUp = () => {
    if (!keyFocused) {
      setKeyFocused(true);
    }
  };

  const handleBlur = () => {
    if (onBlur) {
      onBlur();
    }
    setKeyFocused(false);
  };

  function handleChange({currentTarget}: React.ChangeEvent<HTMLInputElement>) {
    if (onChange) {
      onChange(currentTarget.checked, id || '');
    }
  }

  const describedBy: string[] = [];
  if (helpText) {
    describedBy.push(helpTextID(id || ''));
  }
  if (ariaDescribedByProp) {
    describedBy.push(ariaDescribedByProp);
  }
  const ariaDescribedBy = describedBy.length
    ? describedBy.join(' ')
    : undefined;
  const color = checked ? 'primary' : undefined;
  const borderColor = checked ? 'primary' : 'greyLight';
  const borderProps = bordered
    ? {
        borderRadius: 2,
        border: '1px solid',
      }
    : {};
  const marginBottom = bordered ? 3 : 0;
  const iconMarkup = icon ? (
    <Box
      {...borderProps}
      p={3}
      mb={marginBottom}
      borderColor={borderColor}
      color={color}
    >
      <Icon icon={icon} color={color} />
    </Box>
  ) : null;
  const imageMarkup = image ? (
    <Image
      circle
      alt={`Preview of ${label}`}
      width="40px"
      height="40px"
      src={image}
    />
  ) : null;

  return (
    <Choice
      label={label}
      labelHidden={labelHidden}
      disabled={disabled}
      id={id || ''}
      helpText={helpText}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      selected={checked || mouseOver}
    >
      <input
        id={id || ''}
        name={name || ''}
        value={value}
        type="radio"
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        onFocus={onFocus}
        onKeyUp={handleKeyUp}
        onBlur={handleBlur}
        aria-describedby={ariaDescribedBy}
        ref={inputNode}
      />
      {iconMarkup}
      {imageMarkup}
    </Choice>
  );
}
