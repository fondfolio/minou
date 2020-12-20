import React from 'react';
import styled from 'styled-components';

import {Box} from './Box';

const DEFAULT_SIZE = 24;

interface StyledProps {
  color?: string;
}

interface IconConfig {
  path: React.SVGProps<SVGPathElement>;
  width?: number;
  height?: number;
}

type Props = StyledProps & {
  icon: IconConfig;
};

const StyledIcon = styled(Box)<StyledProps>`
  fill: ${({theme, color}) => theme.colors[color as any]};
`;

export function Icon({icon, ...props}: Props) {
  const {width = DEFAULT_SIZE, height = DEFAULT_SIZE} = icon;

  return (
    <StyledIcon
      as="svg"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="currentColor"
      {...props}
    >
      {icon.path}
    </StyledIcon>
  );
}
