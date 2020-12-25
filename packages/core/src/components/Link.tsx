import React from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';
import {Icons} from '@minou/icons';

import {Icon} from './Icon';

const StyledLink = styled.a<Props>`
  text-decoration: none;
  cursor: pointer;
  position: relative;
  display: inline-flex;
  color: ${({theme}) => theme.colors.primary};
  text-decoration: none;
  transition: ${({theme}) => theme.transitions.all};
  font-size: ${({size}) => (size === 'small' ? '0.75em' : '1em')};
  padding: 0 1px;
  align-items: center;

  &:hover {
    color: ${({theme}) => theme.colors.tealDark};
    background: ${({theme}) => theme.colors.teal[0]};
  }

  &:after {
    content: '';
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
    background: ${({theme}) => theme.colors.primary};
    position: absolute;
  }
`;

interface Props {
  size?: 'small';
  url?: string;
  children: React.ReactNode;
  external?: boolean;
}

export function Link({url, external, children, ...props}: Props) {
  if (external) {
    return (
      <StyledLink href={url || ''} {...props}>
        {children}
        <Icon color="primary" icon={Icons.ArrowLongExternal} />
      </StyledLink>
    );
  }

  return (
    <NextLink href={url || ''}>
      <StyledLink {...props}>{children}</StyledLink>
    </NextLink>
  );
}
