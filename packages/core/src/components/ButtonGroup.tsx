import React from 'react';
import styled from 'styled-components';

import {Flex, BoxProps} from './Box';

interface Props extends BoxProps {
  /** Button components */
  children?: React.ReactNode;
}

const StyledButtonGroup = styled(Flex)`
  margin-left: -0.4em;
  align-items: baseline;

  * {
    margin: 0 0.4em;
  }
`;

export function ButtonGroup(props: Props) {
  return <StyledButtonGroup {...props} />;
}
