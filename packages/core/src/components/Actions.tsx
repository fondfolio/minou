import React from 'react';

import type {ComplexAction, DisableableAction, LoadableAction} from '../types';

import {Flex, Box} from './Box';
import {ButtonGroup} from './ButtonGroup';
import {buttonsFrom} from './Button';

export interface ActionsProps {
  /** The primary action for the page */
  primaryAction?: DisableableAction & LoadableAction;
  /** The secondary actions for the page */
  secondaryActions?: ComplexAction[];
  /** Notes to display with the actons */
  note?: string | React.ReactNode;
}

export function Actions({primaryAction, note, secondaryActions}: ActionsProps) {
  const primaryActionMarkup = primaryAction
    ? buttonsFrom(primaryAction, {variant: 'primary', type: 'submit'})
    : null;
  const secondaryActionsMarkup = secondaryActions ? (
    <ButtonGroup>{buttonsFrom(secondaryActions)}</ButtonGroup>
  ) : null;
  const noteMarkup = note ? (
    <Box pr={[0, 3]} pb={[3, 0]}>
      {note}
    </Box>
  ) : null;

  const justifyContent = secondaryActions || note ? 'space-between' : 'center';
  const alignItems = note ? 'flex-start' : 'center';

  return (
    <Flex
      justifyContent={justifyContent}
      alignItems={alignItems}
      flexWrap={['wrap', 'nowrap']}
    >
      {noteMarkup}
      {secondaryActionsMarkup}
      {primaryActionMarkup}
    </Flex>
  );
}
