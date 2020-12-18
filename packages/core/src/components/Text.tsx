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
  /** specify the underlaying component  */
  as?: React.ElementType;
}

export const Text = styled.span<TextProps>`
  ${reset}
  display: block;
  max-width: 60em;
  ${typography}
  ${space}
  ${color}
`;
