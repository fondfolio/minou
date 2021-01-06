import React from 'react';
import styled from 'styled-components';

import {Flex, BoxProps} from './Box';

interface Props extends BoxProps {
  /** Button components */
  children?: React.ReactNode;
}

const StyledButtonGroup = styled(Flex)`
  margin-left: -1em;
  align-items: baseline;

  > button,
  > link {
    margin: 0 1em;
  }
`;

export function ButtonGroup(props: Props) {
  return <StyledButtonGroup {...props} />;
}
