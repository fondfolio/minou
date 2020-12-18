import React from 'react';
import styled from 'styled-components';

import {Box} from './Box';

interface Props {}

export const StyledBanner = styled(Box)<Props>`
  border: 1px solid ${({theme}) => theme.colors.greySuperlight};
`;

export function Banner(props: Props) {
  return <StyledBanner borderRadius={2} mb={4} p={3} {...props} />;
}
