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
    background: ${({theme, unstyled}) =>
      unstyled ? 'none' : theme.colors.teal[0]};
  }

  &:after {
    content: '';
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
    background: ${({theme}) => theme.colors.primary};
    position: absolute;
    transform: ${({unstyled}) => (unstyled ? 'scaleX(0)' : 'scaleX(1)')};
  }
`;

interface Props {
  size?: 'small';
  url?: string;
  children: React.ReactNode;
  external?: boolean;
  active?: boolean;
  tab?: boolean;
  unstyled?: boolean;
}

const StyledTab = styled(StyledLink)<Props>`
  padding-bottom: 1em;

  &:hover {
    background: none;
  }

  &:after {
    transform: scaleX(0);
    transform-origin: 0 0;
    transition: ${({theme}) => theme.transitions.all};
  }

  &:hover:after {
    transform: scaleX(1);
  }
`;

export function Link({url, external, tab, children, active, ...props}: Props) {
  const Component = tab ? StyledTab : StyledLink;

  if (external) {
    return (
      <Component href={url || ''} {...props}>
        {children}
        <Icon color="primary" icon={Icons.ArrowLongExternal} />
      </Component>
    );
  }

  const className = active ? 'active' : '';

  return (
    <NextLink href={url || ''}>
      <Component {...props} className={className}>
        {children}
      </Component>
    </NextLink>
  );
}
