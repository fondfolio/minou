import React from 'react';
import styled from 'styled-components';
import {
  typography,
  color,
  space,
  TypographyProps,
  SpaceProps,
  ColorProps,
} from 'styled-system';
import {reset} from '@minou/utilities';

export interface TextProps extends TypographyProps, SpaceProps, ColorProps {
  children: React.ReactNode;
  id?: string;
  /** specify the underlaying component  */
  as?: React.ElementType;
  large?: boolean;
}

const StyledText = styled.span<TextProps>`
  ${reset}
  display: block;
  max-width: 60em;
  line-height: 1.45;
  ${typography}
  ${space}
  ${color}
`;

export function Text({large, ...props}: TextProps) {
  if (large) {
    return <StyledText as="p" pb={3} fontSize={4} {...props} />;
  }

  return <StyledText as="p" fontSize={2} pb={3} {...props} />;
}
