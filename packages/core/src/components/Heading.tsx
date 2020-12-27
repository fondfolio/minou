import React from 'react';
import styled from 'styled-components';

import {Text, TextProps} from './Text';

export interface HeadingProps extends TextProps {
  level?: number;
}

const StyledHeader = styled(Text)<HeadingProps>`
  display: block;
`;

export function Heading({level, ...props}: HeadingProps) {
  const commonProps = {
    fontFamily: 'sans',
    lineHeight: 'heading',
  };
  switch (level) {
    case 1:
      return (
        <StyledHeader
          {...commonProps}
          fontFamily="sans"
          fontSize={[6, 8]}
          {...props}
        />
      );
    case 2:
      return (
        <StyledHeader
          {...commonProps}
          textAlign="left"
          pb={3}
          fontSize={[5, 6]}
          {...props}
        />
      );
    case 3:
      return (
        <StyledHeader
          {...commonProps}
          fontSize={[3]}
          fontWeight="bold"
          {...props}
        />
      );
    case 4:
      return <StyledHeader {...commonProps} fontSize={[3]} {...props} />;
    case 5:
      return (
        <StyledHeader
          {...commonProps}
          fontWeight="bold"
          fontSize={[3]}
          {...props}
        />
      );
    case 6:
      return (
        <StyledHeader
          {...commonProps}
          lineHeight="body"
          letterSpacing="0.08em"
          fontSize={[1]}
          {...props}
        />
      );
    default:
      return <StyledHeader {...commonProps} fontSize={[1, 7]} {...props} />;
  }
}
