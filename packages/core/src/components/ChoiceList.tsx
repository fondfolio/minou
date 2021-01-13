/* eslint-disable @shopify/jsx-no-complex-expressions */
import React from 'react';
import {useUniqueId, reset} from '@minou/utilities';
import styled from 'styled-components';

import type {Error} from '../types';

import {Checkbox} from './Checkbox';
import {RadioButton} from './RadioButton';
import {errorTextID} from './InlineError';
import {IconName} from './Icon';
import {Flex, BoxProps} from './Box';
import {Labelled, LabelledProps} from './Labelled';

interface Choice {
  /** Value of the choice */
  value: string;
  /** Label for the choice */
  label: React.ReactNode;
  /** Disable choice */
  disabled?: boolean;
  /** Additional text to aide in use */
  helpText?: React.ReactNode;
  /** Indicates that the choice is aria-describedBy the error message*/
  describedByError?: boolean;
  /**  Method to render children with a choice */
  renderChildren?(isSelected: boolean): React.ReactNode | false;
  icon?: IconName;
  image?: string;
}

export interface ChoiceListProps {
  /** Collection of choices */
  choices: Choice[];
  /** Collection of selected choices */
  selected: string[];
  /** Name for form input */
  name?: string;
  /** Allow merchants to select multiple options at once */
  allowMultiple?: boolean;
  /** Toggles display of the title */
  titleHidden?: boolean;
  /** Display an error message */
  error?: Error;
  /** Disable all choices **/
  disabled?: boolean;
  /** Callback when the selected choices change */
  onChange?(selected: string[], name: string): void;
  /** Label for the input */
  label?: string;
  /** Adds an action to the label */
  labelAction?: LabelledProps['action'];
  /** Adds an action to the help text */
  help?: LabelledProps['help'];
  /** Visually hide the label */
  labelHidden?: boolean;
  /** ID for the input */
  id?: string;
}

export function ChoiceList({
  allowMultiple,
  choices,
  selected,
  onChange = noop,
  error,
  disabled = false,
  name: nameProp,
  label,
  labelHidden,
  labelAction,
  id,
  help,
}: ChoiceListProps) {
  const ControlComponent = allowMultiple ? Checkbox : RadioButton;

  const name = useUniqueId('ChoiceList', nameProp || '') || '';
  const finalName = allowMultiple ? `${name}[]` : name;

  const choicesMarkup = choices.map((choice) => {
    const {
      value,
      label,
      helpText,
      disabled: choiceDisabled,
      describedByError,
      icon,
      image,
    } = choice;

    function handleChange(checked: boolean) {
      onChange(
        updateSelectedChoices(choice, checked, selected, allowMultiple),
        name || '',
      );
    }

    const isSelected = choiceIsSelected(choice, selected);
    const renderedChildren = choice.renderChildren
      ? choice.renderChildren(isSelected)
      : null;
    const children = renderedChildren ? renderedChildren : null;

    return (
      <Flex key={value} as="li" width={['100%', '50%', '33%']} pr={1} py={2}>
        <ControlComponent
          name={finalName}
          value={value}
          label={label}
          disabled={choiceDisabled || disabled}
          checked={choiceIsSelected(choice, selected)}
          helpText={helpText}
          onChange={handleChange}
          icon={icon}
          image={image}
          ariaDescribedBy={
            error && describedByError ? errorTextID(finalName || '') : undefined
          }
        />
        {children}
      </Flex>
    );
  });

  return (
    <Labelled
      label={label}
      id={id || ''}
      error={error}
      action={labelAction}
      labelHidden={labelHidden}
      help={help}
    >
      <List alignItems="center">{choicesMarkup}</List>
    </Labelled>
  );
}

function noop() {}

function choiceIsSelected({value}: Choice, selected: string[]) {
  return selected.includes(value);
}

function updateSelectedChoices(
  {value}: Choice,
  checked: boolean,
  selected: string[],
  allowMultiple = false,
) {
  if (checked) {
    return allowMultiple ? [...selected, value] : [value];
  }

  return selected.filter((selectedChoice) => selectedChoice !== value);
}

interface ListProps extends BoxProps {
  unstyled?: boolean;
  children?: React.ReactNode;
}

const StyledList = styled(Flex)`
  ${reset};
  &,
  li {
    list-style: none;
  }
`;

export function List({unstyled, ...props}: ListProps) {
  return <StyledList as="ul" flexWrap="wrap" {...props} />;
}
