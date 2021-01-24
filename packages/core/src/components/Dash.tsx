import React from 'react';
import styled from 'styled-components';

import {Box, BoxProps} from './Box';

interface Props extends BoxProps {
  vertical?: boolean;
}

const StyledDash = styled(Box)<Props>`
  position: relative;
  display: inline-block;
  vertical-align: middle;

  &::before {
    content: '';
    background: currentColor;
    height: 1px;
    width: 100%;
    top: 50%;
    left: 0;
    margin-top: ${({vertical}) => (vertical ? '' : '2px')};
    transform: ${({vertical}) => (vertical ? `rotate(-90deg)` : '')}
      translate(0, -50%);
    position: absolute;
  }
`;

export function Dash(props: Props) {
  const {vertical, width, height} = props;
  const finalWidth = vertical && height ? height : width;

  return <StyledDash as="span" width={finalWidth} {...props} />;
}
