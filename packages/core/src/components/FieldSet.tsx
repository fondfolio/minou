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
  title?: string;
  sticky?: React.ReactNode;
}

export function FieldSet({children, sticky, action, title}: Props) {
  const actionMarkup = action ? <Box>{buttonFrom(action)}</Box> : null;
  const titleMarkup = title ? <Title>{title}</Title> : null;
  const pb = action ? 5 : 4;
  const stickyMarkup = sticky ? (
    <Flex
      width="100%"
      left={['0', null, null, '100%']}
      position={['relative', null, null, 'absolute']}
      p={[0, null, null, 4]}
    >
      {sticky}
    </Flex>
  ) : null;

  return (
    <Flex pb={pb} flexDirection="column" flex="0 0" position="relative">
      {titleMarkup}
      {children}
      {actionMarkup}
      {stickyMarkup}
    </Flex>
  );
}
