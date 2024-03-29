import React from 'react';
import styled, {css} from 'styled-components';

import type {ComplexAction} from '../types';

import {Actions} from './Actions';
import {buttonsFrom} from './Button';
import {Box, Flex, BoxProps} from './Box';
import {Label} from './Label';
import {Icon, IconType} from './Icon';
import {Link} from './Link';
import {Rule} from './Rule';
import {Flag} from './Flag';

interface Props extends BoxProps {
  active?: boolean;
  title?: React.ReactNode;
  url?: string;
  icon?: IconType;
  children: React.ReactNode;
  action?: ComplexAction;
  footerText?: React.ReactNode;
  footerAction?: ComplexAction | ComplexAction[];
  flag?: React.ComponentProps<typeof Flag>;
  id?: string;
}

export const cardStyles = css<{active?: boolean}>`
  position: relative;
  margin-top: -1px;
  margin-left: -1px;
  width: 100%;
  z-index: ${({theme}) => theme.zIndices.card};
  display: block;

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

const StyledCard = styled(Box)<Props>`
  ${cardStyles}
`;

export function Card({
  children,
  title,
  url,
  icon,
  action,
  footerText,
  footerAction,
  flag,
  padding,
  id,
  ...props
}: Props) {
  const actionMarkup = action ? (
    <Box order={[0, 1]}>
      {buttonsFrom(action, {variant: 'secondary', size: 'small'})}
    </Box>
  ) : null;
  const iconMarkup = icon ? (
    <Box pr={2}>
      <Icon icon={icon} color="primary" />
    </Box>
  ) : null;

  const firstFooterActions =
    Array.isArray(footerAction) && footerAction.length > 1
      ? footerAction.shift()
      : undefined;

  const secondaryActions = firstFooterActions
    ? [firstFooterActions]
    : undefined;

  const primaryActions = assertArray(footerAction);

  const actionsMarkup =
    footerAction || footerText ? (
      <>
        <Rule />
        <Box
          alignItems="center"
          justifyContent="space-between"
          py={2}
          px={4}
          flexWrap="wrap"
        >
          <Actions
            note={footerText}
            secondaryActions={secondaryActions}
            primaryActions={primaryActions}
          />
        </Box>
      </>
    ) : null;

  const titleMarkup = (
    <Flex alignItems="center">
      {iconMarkup}
      <Label pb={0}>{title}</Label>
    </Flex>
  );

  const finalLinkedTitleMarkup =
    url && title ? (
      <Flex pb={2} alignItems="center" justifyContent="space-between">
        <Link unstyled bold url={url}>
          {titleMarkup}
        </Link>
        {actionMarkup}
      </Flex>
    ) : (
      <Flex pb={2} alignItems="center" justifyContent="space-between">
        {titleMarkup}
        {actionMarkup}
      </Flex>
    );

  const flagMarkup = <Flag parent="Card" {...flag} />;

  return (
    <>
      <StyledCard bg="white" borderRadius="card" id={id} {...props}>
        <Box p={padding || [3, 3, 4, 4]}>
          {finalLinkedTitleMarkup}
          {children}
        </Box>
        {actionsMarkup}
      </StyledCard>
      {flagMarkup}
    </>
  );
}

function assertArray<T>(value?: T | T[]): T[] | undefined {
  if (!value) {
    return;
  }

  if (Array.isArray(value)) {
    return value;
  }

  return [value];
}
