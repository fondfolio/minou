import React from 'react';
import styled from 'styled-components';

import {Flex, BoxProps} from './Box';
import {Logo} from './Logo';

interface Props extends BoxProps {
  left: React.ReactNode;
  right: React.ReactNode;
  position?: 'absolute' | 'fixed';
}

const StyledHeader = styled(Flex)<Props>`
  position: ${({position}) => (position ? position : 'static')};
  z-index: ${({theme}) => theme.zIndices.header};
  width: 100%;
`;

export function Header({left, right, ...props}: Props) {
  return (
    <StyledHeader
      as="header"
      padding={[3, 4]}
      alignItems="center"
      justifyContent="space-between"
      {...props}
    >
      {left}
      <Logo color="primary" />
      {right}
    </StyledHeader>
  );
}
