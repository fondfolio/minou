import React from 'react';
import styled from 'styled-components';

import {Section} from './Section';
import {Container} from './Container';
import {Logo} from './Logo';

interface Props {
  secondary: React.ReactNode;
  primary: React.ReactNode;
  position?: 'absolute' | 'fixed';
}

const StyledHeader = styled.header<Omit<Props, 'primary' | 'secondary'>>`
  position: ${({position}) => (position ? position : 'relative')};
  z-index: ${({theme}) => theme.zIndices.header};
  margin: auto;
  width: 100%;
`;

export function Header({secondary, primary, ...props}: Props) {
  return (
    <StyledHeader {...props}>
      <Container py={3}>
        <Section alignItems="center" justifyContent="space-between">
          {secondary}
          <Logo color="primary" />
          {primary}
        </Section>
      </Container>
    </StyledHeader>
  );
}
