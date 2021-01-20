import React from 'react';

import type {ComplexAction} from '../types';

import {Title} from './Title';
import {Flex, Box, BoxProps} from './Box';
import {buttonFrom} from './Button';

interface Props extends BoxProps {
  /** The fields of the fieldset*/
  children: React.ReactNode;
  /** The fields of the fieldset*/
  action?: ComplexAction;
  /** The title of the inline field set*/
  title?: string;
}

export function InlineFieldSet({action, children, title}: Props) {
  const actionMarkup = action ? <Flex ml={3}>{buttonFrom(action)}</Flex> : null;
  const titleMarkup = title ? <Title>{title}</Title> : null;

  return (
    <>
      {titleMarkup}
      <Flex position="relative" width="100%" alignItems="stretch">
        <Box flex={1}>{children}</Box>
        {actionMarkup}
      </Flex>
    </>
  );
}
