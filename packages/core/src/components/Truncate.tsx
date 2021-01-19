import React from 'react';
import styled from 'styled-components';

export interface TruncateProps {
  children: React.ReactNode;
}

const StyledTruncate = styled.span`
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export function Truncate({children}: TruncateProps) {
  return <StyledTruncate>{children}</StyledTruncate>;
}
