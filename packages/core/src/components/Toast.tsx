import React from 'react';
import styled from 'styled-components';
import {IconName} from '@minou/icons';

import {ComplexAction} from '../types';

import {Flex, Box} from './Box';
import {Button, buttonsFrom} from './Button';
import {Label} from './Label';
import {Icon} from './Icon';

interface ToastProps extends ComplexAction {
  action?: ComplexAction;
  error?: boolean;
}

const StyledContent = styled(Flex)<ToastProps>`
  pointer-events: bounding-box;

  button {
    color: white !important;
  }
`;

export function Toast({content, onClick, action, error, variant}: ToastProps) {
  const actionMarkup = action ? (
    <Box px={2}>{buttonsFrom(action, {size: 'small', unstyled: true})}</Box>
  ) : null;

  const bg = error ? 'redDark' : 'tealDark';

  return (
    <StyledContent
      bg={bg}
      justifyContent="space-between"
      alignItems="center"
      variant={variant}
      borderRadius="toast"
      pl={3}
      pr={2}
      py={2}
      m="auto"
      my={1}
      width={['100%', 1 / 2, 1 / 3]}
    >
      <Box flex="1">
        <Label pb="0" color="white">
          {content}
        </Label>
      </Box>
      {actionMarkup}
      <Button onClick={onClick} unstyled>
        <Icon icon={IconName.Close} color="white" />
      </Button>
    </StyledContent>
  );
}
