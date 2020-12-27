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
}

const FALLBACK_PICTURE = '/avatar.jpg';

const StyledAvatar = styled.button`
  border-radius: 50%;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: ${({theme}) => theme.colors.primary};
  box-shadow: 0 0 0px 1px ${({theme}) => theme.colors.primary};
`;

export function Avatar({user, ...props}: Props) {
  return (
    <StyledAvatar {...props}>
      <Image
        height={40}
        width={40}
        alt={user?.name}
        src={user?.picture || FALLBACK_PICTURE}
      />
    </StyledAvatar>
  );
}
