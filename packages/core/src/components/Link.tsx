import React from 'react';
import NextLink from 'next/link';
import styled, {css} from 'styled-components';
import {Icons} from '@minou/icons';
import {toPx, looksExternal} from '@minou/utilities';

import {Icon} from './Icon';

const StyledLink = styled.a<Props>`
  text-decoration: none;
  cursor: pointer;
  position: relative;
  display: inline-flex;
  color: ${({theme, unstyled}) =>
    unstyled ? 'inherit' : theme.colors.primary};
  text-decoration: none;
  transition: ${({theme}) => theme.transitions.all};
  font-size: ${({size, theme}) =>
    size === 'small' ? toPx(theme.fontSizes[0]) : '1em'};
  padding: ${({unstyled}) => (unstyled ? '0' : '0 1px')};
  font-weight: ${({bold}) => (bold ? '500' : 'normal')};
  align-items: center;

  p > & {
    white-space: nowrap;
  }

  &:hover {
    color: ${({theme, unstyled}) =>
      unstyled ? 'inherit' : theme.colors.tealDark};
    background: ${({theme, unstyled}) =>
      unstyled ? 'none' : theme.colors.teal[0]};
    cursor: pointer;
  }

  ${line}
`;

export function line({theme, active, unstyled}: any) {
  const showLine = 'scaleX(1);';
  const hideLine = 'scaleX(0);';
  let transform = hideLine;

  if (active) {
    transform = showLine;
  }

  if (unstyled) {
    transform = hideLine;
  }

  return css`
    &:after {
      content: '';
      left: 0;
      right: 0;
      bottom: 0;
      height: 1px;
      background: ${theme.colors.primary};
      position: absolute;
      transform: ${transform};
      transform-origin: 0 0;
      transition: ${({theme}) => theme.transitions.all};
    }

    &:hover:after {
      transform: ${unstyled ? hideLine : showLine};
    }
  `;
}

interface Props {
  size?: 'small' | 'large';
  url?: string;
  children: React.ReactNode;
  external?: boolean;
  active?: boolean;
  bold?: boolean;
  unstyled?: boolean;
  target?: '_blank';
  onClick?(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void;
}

export function Link({url, external, children, onClick, ...props}: Props) {
  if (external) {
    return (
      <StyledLink href={url || ''} active {...props}>
        {children}
        <Icon color="primary" icon={Icons.ArrowLongExternal} />
      </StyledLink>
    );
  }

  if (looksExternal(url)) {
    return (
      <StyledLink href={url || ''} active {...props}>
        {children}
      </StyledLink>
    );
  }

  if (onClick) {
    return (
      <StyledLink
        active
        onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
          event.preventDefault();
          onClick(event);
        }}
        {...props}
      >
        {children}
      </StyledLink>
    );
  }

  return (
    <NextLink href={url || ''}>
      <StyledLink href={url} active {...props}>
        {children}
      </StyledLink>
    </NextLink>
  );
}
