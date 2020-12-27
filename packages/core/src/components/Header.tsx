import React from 'react';
import styled, {css} from 'styled-components';

import {Section} from './Section';
import {Container} from './Container';
import {Logo} from './Logo';

interface Props {
  secondary?: React.ReactNode;
  primary?: React.ReactNode;
  position?: 'absolute' | 'fixed' | 'sticky';
}

const StyledHeader = styled.header<Omit<Props, 'primary' | 'secondary'>>`
  ${position}
  z-index: ${({theme}) => theme.zIndices.header};
  margin: auto;
  width: 100%;
  top: 0px;
`;

function position({position}: Props) {
  switch (position) {
    case 'sticky':
      return css`
        position: sticky;
        position: -webkit-sticky;
      `;
    case 'absolute':
      return css`
        position: absolute;
      `;
    case 'fixed':
      return css`
        position: fixed;
      `;
    default:
      return css`
        position: relative;
      `;
  }
}

export function Header({secondary, primary, ...props}: Props) {
  return (
    <StyledHeader {...props}>
      <Container py={3} bg="white">
        <Section alignItems="center" justifyContent="space-between">
          {secondary}
          <Logo color="primary" />
          {primary}
        </Section>
      </Container>
    </StyledHeader>
  );
}
