import React from 'react';

import type {
  Error,
  ComplexAction,
  DisableableAction,
  LoadableAction,
} from '../types';

import {Flex, Box} from './Box';
import {Text} from './Text';
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
  loading?: boolean;
}

export function Actions({
  primaryAction,
  note,
  errors,
  secondaryActions,
  center,
  loading,
}: ActionsProps) {
  const actionPadding = center ? 3 : 0;
  const primaryActionMarkup = primaryAction ? (
    <Box py={actionPadding} order={0}>
      {buttonsFrom(primaryAction, {
        variant: 'primary',
        type: 'submit',
        loading,
      })}
    </Box>
  ) : null;
  const secondaryActionsMarkup = secondaryActions ? (
    // eslint-disable-next-line @shopify/jsx-no-complex-expressions
    <Box order={center ? 1 : 0}>
      <ButtonGroup>
        {buttonsFrom(secondaryActions, {size: 'small'})}
      </ButtonGroup>
    </Box>
  ) : null;

  const justifyContent = center ? 'center' : 'space-between';
  const direction = center ? 'column' : 'row';

  return (
    <>
      <Flex
        my={3}
        justifyContent={justifyContent}
        alignItems="center"
        flexWrap={['wrap', 'nowrap']}
        flexDirection={direction}
      >
        {secondaryActionsMarkup}
        <Note note={note} center={center} />
        {primaryActionMarkup}
      </Flex>
      <BannerGroup errors={errors} error />
    </>
  );
}

function Note({
  note,
  center,
}: Pick<React.ComponentProps<typeof Actions>, 'note' | 'center'>) {
  if (!note) {
    return null;
  }

  const textAlign = center ? 'center' : 'left';
  const contentMarkup =
    typeof note === 'string' ? (
      <Text pb={0} small textAlign={textAlign}>
        {note}
      </Text>
    ) : (
      note
    );
  const paddingRight = center ? 0 : [0, 3];

  return (
    <Box pr={paddingRight} pb={[3, 0]}>
      {contentMarkup}
    </Box>
  );
}
