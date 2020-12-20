import React from 'react';
import styled from 'styled-components';

import type {Action} from '../types';

import {Title} from './Title';
import {Flex, Box, BoxProps} from './Box';
import {buttonFrom} from './Button';

interface Props extends BoxProps {
  /** The fields of the fieldset*/
  children: React.ReactNode;
  /** The fields of the fieldset*/
  action?: Action;
  title?: string;
}

const StyledFieldSet = styled(Flex)<Props>``;

export function FieldSet({children, action, title}: Props) {
  const actionMarkup = action ? (
    <Box>{buttonFrom(action, {type: 'button'})}</Box>
  ) : null;
  const titleMarkup = title ? (
    <Box pb={3}>
      <Title>{title}</Title>
    </Box>
  ) : null;

  return (
    <StyledFieldSet pb={4} flexDirection="column" width={[1, 3 / 4, 1 / 2]}>
      {titleMarkup}
      {children}
      {actionMarkup}
    </StyledFieldSet>
  );
}
