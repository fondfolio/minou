import React from 'react';
import styled from 'styled-components';
import Markdown from 'react-markdown';

import {Heading} from './Heading';

const StyledLabel = styled.label``;

export interface LabelProps {
  /** Label content */
  children: string;
  /** Visually hide the label */
  hidden?: boolean;
  /** Size of the label */
  size?: 'large';
}

export function Label({children, size, ...rest}: LabelProps) {
  switch (size) {
    case 'large':
      return (
        <StyledLabel {...rest}>
          <Markdown>{children}</Markdown>
        </StyledLabel>
      );
    default:
      return (
        <StyledLabel {...rest}>
          <Heading level={3} pb={1} {...rest}>
            {children}
          </Heading>
        </StyledLabel>
      );
  }
}
