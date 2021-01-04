import React from 'react';
import styled from 'styled-components';

const StyledBullet = styled.span`
  padding: 0 0.5em;
`;

export function Bullet() {
  return <StyledBullet>•</StyledBullet>;
}
