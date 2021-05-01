import React from 'react';
import styled from 'styled-components';

import {Flex, BoxProps} from './Box';
import {Portal} from './Portal';

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
  z-index: ${({theme}) => theme.zIndices.dropdownBackdrop};
`;

export function Backdrop({onClick, active, visible = false}: BackdropProps) {
  if (!active) {
    return null;
  }

  const opacity = visible ? 0.95 : 0;

  return (
    <Portal>
      <StyledBackdrop
        bg="black"
        opacity={opacity}
        as="a"
        onClick={onClick}
        aria-hidden="true"
      />
    </Portal>
  );
}
