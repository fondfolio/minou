import React from 'react';
import {visuallyHidden} from '@minou/utilities';
import styled from 'styled-components';

interface Props {
  hidden?: boolean;
  children: React.ReactNode;
}

const StyledVisuallyHidden = styled.span`
  ${visuallyHidden}
`;

export function VisuallyHidden({hidden, children}: Props) {
  if (hidden) {
    return <StyledVisuallyHidden>{children}</StyledVisuallyHidden>;
  }
  return <>{children}</>;
}
