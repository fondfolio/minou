import React from 'react';
import styled from 'styled-components';

export interface Props {}

const StyledCaps = styled.span`
  display: inline;
  font-family: ${({theme}) => theme.fonts.sans};
  color: inherit;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export function Caps(props: Props) {
  return <StyledCaps {...props} />;
}
