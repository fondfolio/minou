import React from 'react';
import styled from 'styled-components';
import {typography, space, TypographyProps, SpaceProps} from 'styled-system';
import {reset} from '@minou/utilities';

export interface TextProps extends TypographyProps, SpaceProps {
  children: string;
  as?: React.ElementType;
}

export const Text = styled.span<TextProps>`
  ${reset}
  display: block;
  max-width: 60em;
  ${typography}
  ${space}
`;
