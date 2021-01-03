/* eslint-disable @shopify/jsx-no-complex-expressions */
import React from 'react';
import {useUniqueId, reset} from '@minou/utilities';
import styled from 'styled-components';

import type {Error} from '../types';

import {Checkbox} from './Checkbox';
import {RadioButton} from './RadioButton';
import {Label} from './Label';
import {InlineError, errorTextID} from './InlineError';
import {IconType} from './Icon';
import {Flex, BoxProps} from './Box';

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
  icon?: IconType;
}

export interface ChoiceListProps {
  /** Label for list of choices */
  title: React.ReactNode;
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
}

export function ChoiceList({
  title,
  titleHidden,
  allowMultiple,
  choices,
  selected,
  onChange = noop,
  error,
  disabled = false,
  name: nameProp,
}: ChoiceListProps) {
  const ControlComponent = allowMultiple ? Checkbox : RadioButton;

  const name = useUniqueId('ChoiceList', nameProp || '') || '';
  const finalName = allowMultiple ? `${name}[]` : name;

  const titleMarkup = title ? (
    <Label hidden={titleHidden}>{title}</Label>
  ) : null;

  const choicesMarkup = choices.map((choice) => {
    const {
      value,
      label,
      helpText,
      disabled: choiceDisabled,
      describedByError,
      icon,
    } = choice;

    function handleChange(checked: boolean) {
      console.log(checked);
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
          ariaDescribedBy={
            error && describedByError ? errorTextID(finalName || '') : undefined
          }
        />
        {children}
      </Flex>
    );
  });

  const errorMarkup = error && <InlineError>{error}</InlineError>;

  return (
    <Flex flexDirection="column">
      {titleMarkup}
      <List alignItems="center">{choicesMarkup}</List>
      {errorMarkup}
    </Flex>
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
