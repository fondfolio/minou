import React from 'react';
import styled from 'styled-components';
import {Remarkable} from 'remarkable';

const StyledLabel = styled.label``;
const markdown = new Remarkable();

export interface LabelProps {
  /** Label content */
  children: string;
  /** A unique identifier for the label */
  id: string;
  /** Visually hide the label */
  hidden?: boolean;
  size?: string;
}

export function Label({children, size, ...rest}: LabelProps) {
  switch (size) {
    case 'large':
      return <StyledLabel {...rest}>{markdown.render(children)}</StyledLabel>;
    default:
      return <StyledLabel {...rest}>{children}</StyledLabel>;
  }
}
