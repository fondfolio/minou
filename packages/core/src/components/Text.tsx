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

import {Italic} from './Italic';

export interface TextProps extends TypographyProps, SpaceProps, ColorProps {
  children: React.ReactNode;
  italic?: boolean;
  id?: string;
  /** specify the underlaying component  */
  as?: React.ElementType;
  large?: boolean;
  small?: boolean;
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

export function Text({large, small, italic, children, ...props}: TextProps) {
  const content = italic ? <Italic>{children}</Italic> : children;

  if (small) {
    return (
      <StyledText as="p" pb={3} fontSize={0} {...props}>
        {content}
      </StyledText>
    );
  }

  if (large) {
    return (
      <StyledText as="p" pb={3} fontSize={2} {...props}>
        {content}
      </StyledText>
    );
  }

  return (
    <StyledText as="p" fontSize={1} pb={3} {...props}>
      {content}
    </StyledText>
  );
}
