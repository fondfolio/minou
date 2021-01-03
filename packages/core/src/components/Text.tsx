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
import {VisuallyHidden} from './VisuallyHidden';

export interface TextProps extends TypographyProps, SpaceProps, ColorProps {
  children: React.ReactNode;
  italic?: boolean;
  id?: string;
  /** specify the underlaying component  */
  as?: React.ElementType;
  large?: boolean;
  small?: boolean;
  sans?: boolean;
  hidden?: boolean;
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

export function Text({
  large,
  small,
  italic,
  children,
  hidden,
  ...props
}: TextProps) {
  let content = children;

  if (italic) {
    content = <Italic>{children}</Italic>;
  }

  if (small) {
    return (
      <VisuallyHidden hidden={hidden}>
        <StyledText as="p" pb={3} fontSize={0} {...props}>
          {content}
        </StyledText>
      </VisuallyHidden>
    );
  }

  if (large) {
    return (
      <VisuallyHidden hidden={hidden}>
        <StyledText as="p" pb={3} fontSize={2} {...props}>
          {content}
        </StyledText>
      </VisuallyHidden>
    );
  }

  return (
    <VisuallyHidden hidden={hidden}>
      <StyledText as="p" fontSize={1} pb={3} {...props}>
        {content}
      </StyledText>
    </VisuallyHidden>
  );
}
