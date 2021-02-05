import React from 'react';
import styled from 'styled-components';
import {toPx} from '@minou/utilities';

import {Flex, BoxProps} from './Box';

interface Props extends BoxProps {
  size?: 'narrow';
  /** Button components */
  children?: React.ReactNode;
}

const StyledButtonGroup = styled(Flex)<{spacing: number}>`
  margin-left: -${({spacing}) => toPx(spacing)};
  align-items: baseline;

  > button,
  > a {
    margin: 0 0 0 ${({spacing}) => toPx(spacing)};
  }
`;

export function ButtonGroup({size, ...props}: Props) {
  const spacing = {
    narrow: 6,
  };

  const spacingUnit = size ? spacing[size] : 8;
  return <StyledButtonGroup spacing={spacingUnit} {...props} />;
}
