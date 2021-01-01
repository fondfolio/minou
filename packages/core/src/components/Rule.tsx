import React from 'react';
import styled from 'styled-components';

import {Action} from '../types';

import {Icon, IconType} from './Icon';
import {Text} from './Text';
import {Flex, BoxProps} from './Box';
import {buttonFrom} from './Button';

interface Props extends BoxProps {
  icon?: IconType;
  text?: React.ReactNode;
  action?: Action;
  center?: boolean;
}

const StyledRule = styled(Flex)<Props>`
  width: 100%;
  align-items: center;

  &:before,
  &:after {
    flex-grow: 1;
    content: '';
    height: 1px;
    width: auto;
    background-color: currentColor;
    opacity: 0.1;
  }

  &:before {
    flex-grow: ${({center}) => (center ? '1' : 0)};
  }
`;

export function Rule(props: Props) {
  const {text, icon, action, center, ...rest} = props;

  const actionProps = action ? {as: 'button', onClick: action.onClick} : {};
  const actionMarkup = action
    ? buttonFrom(action, {
        size: 'small',
        as: 'span',
        onClick: undefined,
        unstyled: true,
      })
    : null;
  const iconMarkup = icon ? <Icon mx={1} icon={icon} color="primary" /> : null;
  let textMarkup = text ? text : null;

  if (typeof text === 'string') {
    textMarkup = (
      <Text small italic pb={0}>
        {text}
      </Text>
    );
  }

  const children =
    textMarkup || iconMarkup || actionMarkup ? (
      <>
        {iconMarkup}
        {textMarkup}
        {actionMarkup}{' '}
      </>
    ) : null;

  return (
    <StyledRule {...actionProps} center={center} {...rest}>
      {children}
    </StyledRule>
  );
}
