import React from 'react';

import type {ComplexAction, DisableableAction, LoadableAction} from '../types';

import {Flex} from './Box';
import {ButtonGroup} from './ButtonGroup';
import {buttonsFrom} from './Button';

export interface PageActionsProps {
  /** The primary action for the page */
  primaryAction?: DisableableAction & LoadableAction;
  /** The secondary actions for the page */
  secondaryActions?: ComplexAction[];
}

export function Actions({primaryAction, secondaryActions}: PageActionsProps) {
  const primaryActionMarkup = primaryAction
    ? buttonsFrom(primaryAction, {variant: 'primary'})
    : null;

  const secondaryActionsMarkup = secondaryActions ? (
    <ButtonGroup>{buttonsFrom(secondaryActions)}</ButtonGroup>
  ) : null;

  const justifyContent = secondaryActions ? 'space-between' : 'center';

  return (
    <Flex py={3} alignItems="center" justifyContent={justifyContent}>
      {secondaryActionsMarkup}
      {primaryActionMarkup}
    </Flex>
  );
}
