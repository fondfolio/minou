import React from 'react';
import styled from 'styled-components';
import {center} from '@minou/utilities';
import {Icons} from '@minou/icons';

import {Icon} from './Icon';
import {Link} from './Link';

const StyledLogo = styled(Link)`
  position: absolute;
  display: block;
  ${center({x: true, y: true})}
  cursor: pointer;
`;

interface Props {
  color?: 'primary';
}

export const Logo = ({color, ...rest}: Props) => (
  <StyledLogo href="/" {...rest}>
    <Icon icon={Icons.LogoWord} color={color} />
  </StyledLogo>
);
