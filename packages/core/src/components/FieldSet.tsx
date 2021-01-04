import React from 'react';
import styled from 'styled-components';

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
}

const StyledFieldSet = styled(Flex)<Props>``;

export function FieldSet({children, action, title}: Props) {
  const actionMarkup = action ? <Box>{buttonFrom(action)}</Box> : null;
  const titleMarkup = title ? <Title>{title}</Title> : null;
  const pb = action ? 5 : 4;

  return (
    <StyledFieldSet pb={pb} flexDirection="column" flex="0 0">
      {titleMarkup}
      {children}
      {actionMarkup}
    </StyledFieldSet>
  );
}
