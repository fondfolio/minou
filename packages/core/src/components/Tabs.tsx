import React from 'react';
import styled from 'styled-components';

import {Box} from './Box';

interface Props {}

export const StyledTabs = styled(Box)<Props>`
  border: 1px solid ${({theme}) => theme.colors.greySuperlight};
`;

export function Tabs(props: Props) {
  return <StyledTabs borderRadius={2} mb={4} p={3} {...props} />;
}
