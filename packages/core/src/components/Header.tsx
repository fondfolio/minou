import React from 'react';
import styled from 'styled-components';

import {Flex, BoxProps} from './Box';
import {Logo} from './Logo';

interface Props extends BoxProps {
  secondary: React.ReactNode;
  primary: React.ReactNode;
  position?: 'absolute' | 'fixed';
}

const StyledHeader = styled(Flex)<Props>`
  position: ${({position}) => (position ? position : 'relative')};
  z-index: ${({theme}) => theme.zIndices.header};
  width: 100%;
`;

export function Header({secondary, primary, ...props}: Props) {
  return (
    <StyledHeader
      as="header"
      padding={[3, 4]}
      alignItems="center"
      justifyContent="space-between"
      {...props}
    >
      {secondary}
      <Logo color="primary" />
      {primary}
    </StyledHeader>
  );
}
