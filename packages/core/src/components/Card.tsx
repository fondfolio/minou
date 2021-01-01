import React from 'react';
import styled from 'styled-components';

import type {ComplexAction} from '../types';

import {buttonsFrom} from './Button';
import {Box, Flex, BoxProps} from './Box';
import {Label} from './Label';
import {Section} from './Section';
import {Icon, IconType} from './Icon';

interface Props extends BoxProps {
  active?: boolean;
  title?: string;
  icon?: IconType;
  children: React.ReactNode;
  action?: ComplexAction;
}

const StyledCard = styled(Box)<Props>`
  position: relative;
  margin-top: -1px;
  margin-left: -1px;
  width: 100%;
  z-index: ${({theme}) => theme.zIndices.card};

  &:after,
  &:before {
    box-shadow: 0px 0px 1px currentColor inset;
  }

  &:after,
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    transform: translate3d(0, 0, 0);
    transition: ${({theme}) => theme.transitions.all};
    transform: translate3d(0, 0, 0);
    background: white;
    border-radius: ${({theme}) => theme.radii.card};
  }

  &:after {
    background: white;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  ${({active}) =>
    active &&
    `
    &:before {
      transform: translate3d(0.5em, 0.5em, 0);
    }
  `}
`;

export function Card({children, title, icon, action, ...props}: Props) {
  const actionMarkup = action ? <Box pt={3}>{buttonsFrom(action)}</Box> : null;

  if (icon) {
    return (
      <StyledCard p={4} bg="white" borderRadius={2} {...props}>
        <Section>
          <Icon icon={icon} />
          <Label pl={1} pb={2}>
            {title}
          </Label>
        </Section>
        {children}
        {actionMarkup}
      </StyledCard>
    );
  }

  return (
    <StyledCard p={4} bg="white" borderRadius="card" {...props}>
      <Label pb={2}>{title}</Label>
      {children}
      {actionMarkup}
    </StyledCard>
  );
}

export function Cards(props: {children: React.ReactNode}) {
  return <Flex width={[1]} pb={4} {...props} />;
}
