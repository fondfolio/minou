import React from 'react';
import styled from 'styled-components';

import {Image} from './Image';

interface User {
  name?: string;
  picture?: string;
}

interface Props {
  user?: User;
  onClick(): void;
  active?: boolean;
  large?: boolean;
}

const FALLBACK_PICTURE = '/avatar.jpg';
const sizes = {
  large: 100,
  small: 40,
};

const StyledAvatar = styled.button<Props>`
  border-radius: 50%;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: ${({theme}) => theme.colors.primary};
  box-shadow: ${({theme, active}) =>
    active
      ? `0 0 0px 2px ${theme.colors.primary}`
      : `0 0 0px 1px ${theme.colors.tealDark}`};
  transition: ${({theme}) => theme.transitions.all};
  cursor: pointer;
  outline: none;

  &:focus,
  &:hover {
    box-shadow: 0 0 0px 2px ${({theme}) => theme.colors.tealDark};
  }
`;

export function Avatar({user, large, ...props}: Props) {
  const size = large ? sizes.large : sizes.small;
  return (
    <StyledAvatar {...props}>
      <Image
        height={size}
        width={size}
        alt={user?.name}
        src={user?.picture || FALLBACK_PICTURE}
      />
    </StyledAvatar>
  );
}
