import React from 'react';
import styled from 'styled-components';

import {Box} from './Box';

interface Props {}

export const StyledBanner = styled(Box)<Props>`
  border: 1px solid ${({theme}) => theme.colors.greySuperlight};
  width: 100%;
`;

export function Banner(props: Props) {
  return <StyledBanner borderRadius={2} my={2} p={3} {...props} />;
}
