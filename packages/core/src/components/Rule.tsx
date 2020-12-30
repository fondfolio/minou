import React from 'react';
import styled from 'styled-components';

import {Icon, IconType} from './Icon';
import {Text} from './Text';
import {Flex, BoxProps} from './Box';

interface Props extends BoxProps {
  icon?: IconType;
  text?: string;
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
`;

export function Rule(props: Props) {
  const {text, icon, ...rest} = props;

  if (icon) {
    return (
      <StyledRule {...rest}>
        <Icon mx={1} icon={icon} color="primary" />
      </StyledRule>
    );
  }

  if (text) {
    return (
      <StyledRule {...rest}>
        <Text small italic pb={0}>
          {text}
        </Text>
      </StyledRule>
    );
  }

  return <StyledRule {...rest} />;
}
