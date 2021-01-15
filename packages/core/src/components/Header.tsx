import React from 'react';
import styled from 'styled-components';
import {position} from '@minou/utilities';
import {color} from 'styled-system';

import {Section} from './Section';
import {Container} from './Container';
import {Logo} from './Logo';

interface Props {
  secondary?: React.ReactNode;
  primary?: React.ReactNode;
  position?: 'absolute' | 'fixed' | 'sticky';
  bg?: string;
}

const StyledHeader = styled.header<Omit<Props, 'primary' | 'secondary'>>`
  ${position}
  margin: auto;
  width: 100%;
  top: 0px;
  ${color}
`;

export function Header({secondary, bg, primary, ...props}: Props) {
  const justifyContent = secondary && primary ? 'space-between' : 'center';

  return (
    <StyledHeader bg={bg} {...props}>
      <Container py={3}>
        <Section alignItems="center" justifyContent={justifyContent}>
          {secondary}
          <Logo color="primary" />
          {primary}
        </Section>
      </Container>
    </StyledHeader>
  );
}
