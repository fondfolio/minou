import React from 'react';
import styled from 'styled-components';

import {Text} from './Text';
import {Box} from './Box';

interface FlagProps {
  error?: boolean;
  content?: React.ReactNode;
  parent?: 'Card';
}

const StyledFlag = styled.div<Pick<FlagProps, 'parent'>>`
  width: 100%;
  z-index: 0;
  margin-bottom: 3px;
  position: relative;
  top: 0px;
  left: 0px;

  margin-left: ${({parent}) => (parent === 'Card' ? '-1px' : 0)};
`;

export function Flag({error, content, parent}: FlagProps) {
  if (!content) {
    return null;
  }

  const color = error ? 'red' : 'blue';
  return (
    <StyledFlag parent={parent}>
      <Box
        px={4}
        py={2}
        bg={`${color}.0`}
        border="1px solid"
        borderColor={`${color}.1`}
        borderTop="none"
        borderRadius="0 0 4px 4px"
      >
        <Text small color={`${color}.2`} pb={0} textAlign="center">
          {content}
        </Text>
      </Box>
    </StyledFlag>
  );
}
