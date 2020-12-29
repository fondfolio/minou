import React from 'react';
import styled from 'styled-components';

import {Flex, BoxProps} from './Box';

interface BackdropProps extends BoxProps {
  onClick(): void;
  active: boolean;
  visible?: boolean;
}

const StyledBackdrop = styled(Flex)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
`;

export function Backdrop({onClick, active, visible = false}: BackdropProps) {
  if (!active) {
    return null;
  }

  const opacity = visible ? 0.95 : 0;

  return (
    <StyledBackdrop
      bg="black"
      opacity={opacity}
      as="a"
      onClick={onClick}
      aria-hidden="true"
    />
  );
}
