import React from 'react';
import styled from 'styled-components';
import {IconType} from '@minou/icons';

import {Box, BoxProps} from './Box';

export {IconType};

const DEFAULT_SIZE = 24;

interface Props extends BoxProps {
  icon?: IconType;
  overrides?: React.SVGProps<SVGElement>;
}

const StyledIcon = styled(Box)<Props>`
  fill: ${({theme, color}) => theme.colors[color as any]};
  overflow: visible;
`;

export function Icon({icon, overrides, ...props}: Props) {
  if (!icon) {
    return null;
  }

  const {width = DEFAULT_SIZE, height = DEFAULT_SIZE} = icon;

  return (
    <StyledIcon
      as="svg"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="currentColor"
      viewBox={`0 0 ${width} ${height}`}
      {...props}
      {...overrides}
    >
      {icon.path}
    </StyledIcon>
  );
}
