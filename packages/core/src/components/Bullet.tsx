import React from 'react';
import styled from 'styled-components';

import {Box, BoxProps} from './Box';

const StyledBullet = styled(Box)<BoxProps>`
  padding: 0 0.5em;
  position: relative;
  vertical-align: middle;

  &::before {
    content: '';
    border-radius: 50%;
    background: currentColor;
    height: 4px;
    width: 4px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -25%);
    position: absolute;
  }
`;

export function Bullet(props: BoxProps) {
  return <StyledBullet as="span" {...props} />;
}
