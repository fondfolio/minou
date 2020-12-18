import React from 'react';
import styled from 'styled-components';

import {Text, TextProps} from './Text';

export interface HeadingProps extends TextProps {}

const StyledHeader = styled(Text)``;

export function Heading(props: HeadingProps) {
  return (
    <StyledHeader
      pb={1}
      {...props}
      fontFamily="serif"
      fontSize={6}
      fontWeight={400}
    />
  );
}
