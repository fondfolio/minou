import React from 'react';
import styled from 'styled-components';
import {IconName, useIcon} from '@minou/icons';

import {Box, BoxProps} from './Box';

export {IconName};

const DEFAULT_SIZE = 24;

interface Props extends BoxProps {
  icon?: IconName;
  overrides?: React.SVGProps<SVGElement>;
}

const StyledIcon = styled(Box)<Props>`
  fill: ${({theme, color}) => theme.colors[color as any]};
  overflow: visible;
`;

export function Icon({icon, overrides, ...props}: Props) {
  const iconConfig = useIcon(icon);

  const {width = DEFAULT_SIZE, height = DEFAULT_SIZE} = iconConfig || {};

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
      {iconConfig.path}
    </StyledIcon>
  );
}
