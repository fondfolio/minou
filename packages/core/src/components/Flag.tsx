import React from 'react';
import styled from 'styled-components';

import {Text} from './Text';
import {Box} from './Box';

interface FlagProps {
  error?: boolean;
  content?: React.ReactNode;
  parent?: 'Card';
  mount?: 'top' | 'bottom';
}

const StyledFlag = styled.div<Pick<FlagProps, 'parent'>>`
  width: 100%;
  z-index: 0;
  position: relative;
  top: 0px;
  left: 0px;

  margin-left: ${({parent}) => (parent === 'Card' ? '-1px' : 0)};
  margin-bottom: 1px;
`;

export function Flag({error, mount = 'bottom', content, parent}: FlagProps) {
  if (!content) {
    return null;
  }

  const color = error ? 'red' : 'blue';

  const mountProps =
    mount === 'top'
      ? {
          borderRadius: '4px 4px 0 0',
          borderBottom: 'none',
        }
      : {
          borderRadius: '0 0 4px 4px',
          borderTop: 'none',
        };
  return (
    <StyledFlag parent={parent}>
      <Box
        px={4}
        py={2}
        bg={`${color}.0`}
        border="1px solid"
        borderColor={`${color}.1`}
        {...mountProps}
      >
        <Text small color={`${color}.2`} pb={0} textAlign="center">
          {content}
        </Text>
      </Box>
    </StyledFlag>
  );
}
