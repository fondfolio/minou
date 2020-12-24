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

export function Text(props: TextProps) {
  return <StyledText fontSize={2} {...props} />;
}
