import React from 'react';
import styled from 'styled-components';

import {Flex, BoxProps} from './Box';
import {Portal} from './Portal';

interface BackdropProps extends BoxProps {
  onClick(): void;
  active: boolean;
  visible?: boolean;
  context?: 'modal' | 'dropdown';
}

const StyledBackdrop = styled(Flex)<BackdropProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: ${({theme, context}) =>
    context === 'dropdown'
      ? theme.zIndices.dropdownBackdrop
      : theme.zIndices.modalBackdrop};
`;

export function Backdrop({
  onClick,
  context = 'dropdown',
  active,
  visible = false,
  ...rest
}: BackdropProps) {
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
        context={context}
        {...rest}
      />
    </Portal>
  );
}
