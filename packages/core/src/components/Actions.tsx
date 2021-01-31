import React from 'react';

import type {
  Error,
  ComplexAction,
  DisableableAction,
  LoadableAction,
} from '../types';

import {Flex, Box} from './Box';
import {ButtonGroup} from './ButtonGroup';
import {buttonsFrom} from './Button';
import {BannerGroup} from './Banner';

export interface ActionsProps {
  /** The primary action for the page */
  primaryAction?: DisableableAction & LoadableAction;
  /** The secondary actions for the page */
  secondaryActions?: ComplexAction[];
  /** Notes to display with the actons */
  note?: string | React.ReactNode;
  errors?: Error[];
  center?: boolean;
}

export function Actions({
  primaryAction,
  note,
  errors,
  secondaryActions,
  center,
}: ActionsProps) {
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
  const direction = center ? 'column' : 'row';

  return (
    <>
      <Flex
        mb={3}
        justifyContent={justifyContent}
        alignItems="center"
        flexWrap={['wrap', 'nowrap']}
        flexDirection={direction}
      >
        {noteMarkup}
        {secondaryActionsMarkup}
        {primaryActionMarkup}
      </Flex>
      <BannerGroup errors={errors} error />
    </>
  );
}
