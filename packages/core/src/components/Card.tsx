import React from 'react';
import styled from 'styled-components';

import type {ComplexAction} from '../types';

import {buttonsFrom} from './Button';
import {Box, Flex, BoxProps} from './Box';
import {Subtitle} from './Subtitle';

interface Props extends BoxProps {
  active?: boolean;
  title?: string;
  children: React.ReactNode;
  action?: ComplexAction;
}

const StyledCard = styled(Box)<Props>`
  position: relative;
  margin-top: -1px;
  margin-left: -1px;
  width: 100%;

  &,
  &:after {
    box-shadow: 0px 0px 1px currentColor inset;
  }

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: -1;
    transform: translate3d(0, 0, 0);
    transition: ${({theme}) => theme.transitions.all};
    transform: translate3d(0.5em, 0.5em, 0);
    background: white;
  }

  &:hover:after,
  &:focus:after {
    transform: translate3d(0.5em, 0.5em, 0);

    > * {
      position: relative;
      z-index: 1;
    }
  }

  ${({active}) =>
    active &&
    `
    &:after {
      transform: translate3d(0.5em, 0.5em, 0);
    }
    > * {
      position: relative;
      z-index: 1;
    }`}
`;

export function Card({children, title, action, ...props}: Props) {
  const actionMarkup = action ? <Box pt={3}>{buttonsFrom(action)}</Box> : null;

  return (
    <StyledCard p={4} bg="white" {...props}>
      <Subtitle pb={2}>{title}</Subtitle>
      {children}
      {actionMarkup}
    </StyledCard>
  );
}

export function Cards(props: {children: React.ReactNode}) {
  return <Flex width={[1]} pb={4} {...props} />;
}
