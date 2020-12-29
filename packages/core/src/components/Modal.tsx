import React from 'react';
import styled from 'styled-components';
import {Icons} from '@minou/icons';
import {center} from '@minou/utilities';

import {ComplexAction} from '../types';

import {Portal} from './Portal';
import {Flex, Box, BoxProps} from './Box';
import {Backdrop} from './Backdrop';
import {Label} from './Label';
import {Actions} from './Actions';
import {Rule} from './Rule';
import {Button} from './Button';
import {Icon} from './Icon';

export interface ModalProps extends BoxProps {
  active?: boolean;
  onClose(): void;
  title?: string | React.ReactNode;
  children: React.ReactNode;
  primaryAction?: ComplexAction;
}

const StyledModal = styled(Flex)`
  ${center({x: true, y: true})}
  z-index: ${({theme}) => theme.zIndices.modal};
`;

export function Modal({
  onClose,
  children,
  title,
  primaryAction,
  active,
}: ModalProps) {
  if (!active) {
    return null;
  }

  const closeMarkup = (
    <Button unstyled onClick={onClose} color="destructive">
      <Icon icon={Icons.Close} />
    </Button>
  );
  const titleMarkup = title ? <Label pb="0">{title}</Label> : null;

  return (
    <Portal>
      <Backdrop onClick={onClose} active={active} visible />
      <StyledModal
        borderRadius="modal"
        position="fixed"
        bg="white"
        width={['100%', 1 / 2]}
        flexDirection="column"
      >
        <Flex p={4} pb={2} flexDirection="column">
          <Flex
            pb={2}
            width="100%"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box flex="1">{titleMarkup}</Box>
            {closeMarkup}
          </Flex>
          {children}
        </Flex>
        <Rule />
        <Box px={4} py={2}>
          <Actions
            primaryAction={primaryAction}
            secondaryActions={[{content: 'Close', onClick: onClose}]}
          />
        </Box>
      </StyledModal>
    </Portal>
  );
}
