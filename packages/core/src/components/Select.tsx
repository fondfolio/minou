import React from 'react';
import {useUniqueId} from '@minou/utilities';
import styled from 'styled-components';

import type {Error} from '../types';

import {Labelled, LabelledProps, helpTextID} from './Labelled';
import {Label} from './Label';
import {Italic} from './Italic';
import {Box, Flex} from './Box';

interface StrictOption {
  /** Machine value of the option; this is the value passed to `onChange` */
  value: string;
  /** Human-readable text for the option */
  label: string;
  /** Option will be visible, but not selectable */
  disabled?: boolean;
  /** Element to display to the left of the option label. Does not show in the dropdown. */
  prefix?: React.ReactNode;
}

interface HideableStrictOption extends StrictOption {
  hidden?: boolean;
}

interface StrictGroup {
  /** Title for the group */
  title: string;
  /** List of options */
  options: StrictOption[];
}

export type SelectOption = string | StrictOption;

export interface SelectGroup {
  title: string;
  options: SelectOption[];
}

export interface SelectProps {
  /** List of options or option groups to choose from */
  options?: (SelectOption | SelectGroup)[];
  /** Label for the select */
  label: string;
  /** Adds an action to the label */
  labelAction?: LabelledProps['action'];
  /** Visually hide the label */
  labelHidden?: boolean;
  /** Show the label to the left of the value, inside the control */
  labelInline?: boolean;
  /** Disable input */
  disabled?: boolean;
  /** Additional text to aide in use */
  helpText?: React.ReactNode;
  /** Example text to display as placeholder */
  placeholder?: string;
  /** ID for form input */
  id?: string;
  /** Name for form input */
  name?: string;
  /** Value for form input */
  value?: string;
  /** Display an error state */
  error?: Error | boolean;
  /** Callback when selection is changed */
  onChange?(selected: string, id: string): void;
  /** Callback when select is focussed */
  onFocus?(): void;
  /** Callback when focus is removed */
  onBlur?(): void;
}

const PLACEHOLDER_VALUE = '';

export function Select({
  options: optionsProp,
  label,
  labelAction,
  labelHidden: labelHiddenProp,
  labelInline,
  disabled,
  helpText,
  placeholder,
  id: idProp,
  name,
  value = PLACEHOLDER_VALUE,
  error,
  onChange,
  onFocus,
  onBlur,
}: SelectProps) {
  const id = useUniqueId('Select', idProp);
  const labelHidden = labelInline ? true : labelHiddenProp;

  const handleChange = onChange
    ? (event: React.ChangeEvent<HTMLSelectElement>) =>
        onChange(event.currentTarget.value, id || '')
    : undefined;

  const describedBy: string[] = [];
  if (helpText) {
    describedBy.push(helpTextID(id || ''));
  }
  if (error) {
    describedBy.push(`${id}Error`);
  }

  const options = optionsProp || [];
  let normalizedOptions = options.map(normalizeOption);

  if (placeholder) {
    normalizedOptions = [
      {
        label: placeholder,
        value: PLACEHOLDER_VALUE,
        disabled: true,
      },
      ...normalizedOptions,
    ];
  }

  const inlineLabelMarkup = labelInline && <span>{label}</span>;

  const selectedOption = getSelectedOption(normalizedOptions, value);

  const prefixMarkup = selectedOption.prefix && (
    <div>{selectedOption.prefix}</div>
  );

  const contentMarkup = (
    <Label aria-hidden aria-disabled={disabled}>
      <Flex alignItems="baseline">
        <Italic>{inlineLabelMarkup}</Italic>
        {prefixMarkup}
        <Box pl="1">{selectedOption.label}</Box>
      </Flex>
    </Label>
  );

  const optionsMarkup = normalizedOptions.map(renderOption);

  return (
    <Labelled
      id={id || ''}
      label={label}
      error={error}
      action={labelAction}
      labelHidden={labelHidden}
    >
      <StyledSelect>
        <StyledSelectInput
          id={id || ''}
          name={name}
          value={value}
          disabled={disabled}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={handleChange}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy.join(' ')}
        >
          {optionsMarkup}
        </StyledSelectInput>
        {contentMarkup}
      </StyledSelect>
    </Labelled>
  );
}

function isString(option: SelectOption | SelectGroup): option is string {
  return typeof option === 'string';
}

function isGroup(option: SelectOption | SelectGroup): option is SelectGroup {
  return typeof option === 'object' && 'options' in option;
}

function normalizeStringOption(option: string): StrictOption {
  return {
    label: option,
    value: option,
  };
}

/**
 * Converts a string option (and each string option in a Group) into
 * an Option object.
 */
function normalizeOption(
  option: SelectOption | SelectGroup,
): HideableStrictOption | StrictGroup {
  if (isString(option)) {
    return normalizeStringOption(option);
  } else if (isGroup(option)) {
    const {title, options} = option;
    return {
      title,
      options: options.map((option) => {
        return isString(option) ? normalizeStringOption(option) : option;
      }),
    };
  }

  return option;
}

/**
 * Gets the text to display in the UI, for the currently selected option
 */
function getSelectedOption(
  options: (HideableStrictOption | StrictGroup)[],
  value: string,
): HideableStrictOption {
  const flatOptions = flattenOptions(options);
  let selectedOption = flatOptions.find((option) => value === option.value);

  if (selectedOption === undefined) {
    // Get the first visible option (not the hidden placeholder)
    selectedOption = flatOptions.find((option) => !option.hidden);
  }

  return selectedOption || {value: '', label: ''};
}

/**
 * Ungroups an options array
 */
function flattenOptions(
  options: (HideableStrictOption | StrictGroup)[],
): HideableStrictOption[] {
  let flatOptions: HideableStrictOption[] = [];

  options.forEach((optionOrGroup) => {
    if (isGroup(optionOrGroup)) {
      flatOptions = flatOptions.concat(optionOrGroup.options);
    } else {
      flatOptions.push(optionOrGroup);
    }
  });

  return flatOptions;
}

function renderSingleOption(option: HideableStrictOption): React.ReactNode {
  const {value, label, prefix: _prefix, ...rest} = option;
  return (
    <option key={value} value={value} {...rest}>
      {label}
    </option>
  );
}

function renderOption(
  optionOrGroup: HideableStrictOption | StrictGroup,
): React.ReactNode {
  if (isGroup(optionOrGroup)) {
    const {title, options} = optionOrGroup;
    return (
      <optgroup label={title} key={title}>
        {options.map(renderSingleOption)}
      </optgroup>
    );
  }

  return renderSingleOption(optionOrGroup);
}

const StyledSelectInput = styled.select`
  position: absolute;
  text-rendering: auto;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  opacity: 0.001;
  appearance: none;
`;

const StyledSelect = styled.div`
  position: relative;
  cursor: pointer;
  select::-ms-expand {
    display: none;
  }
`;
