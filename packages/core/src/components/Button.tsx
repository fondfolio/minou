import React from 'react';
import styled from 'styled-components';
import NextLink from 'next/link';
import {reset} from '@minou/utilities';

import {ComplexAction} from '../types';

import {Spinner} from './Spinner';

interface Props extends ComplexAction {
  href?: string;
  external?: boolean;
}

type CombinedProps = Props &
  React.HTMLAttributes<HTMLButtonElement> &
  ComplexAction;

const StyledBasicButton = styled.button<CombinedProps>`
  ${reset};
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: baseline;
  text-align: center;
  user-select: none;
  text-decoration: none;
  cursor: ${({disabled}) => (disabled ? 'default' : 'pointer')};
  pointer-events: ${({disabled}) => (disabled ? 'none' : 'auto')};
  transition: ${({theme}) => theme.transitions.all};
  position: relative;
  color: ${({theme, destructive}) =>
    destructive ? theme.colors.redDark : theme.colors.primary};
  transition: ${({theme}) => theme.transitions.all};
  font-size: ${({size}) => (size === 'small' ? '0.8em' : '1em')};
  padding: 1px;
  line-height: 1.8;
  font-weight: ${({theme}) => theme.fontWeights.bold};
  white-space: nowrap;

  &:hover {
    color: ${({theme, destructive}) =>
      destructive ? theme.colors.red : theme.colors.tealDark};
    background: ${({theme, destructive}) =>
      destructive ? 'none' : theme.colors.teal[0]};
  }
`;

const StyledPrimaryButton = styled(StyledBasicButton)<CombinedProps>`
  color: ${({theme}) => theme.colors.white};
  background: ${({theme, destructive}) =>
    destructive ? theme.colors.redDark : theme.colors.primary};
  padding: 0.4em 1.2em;
  border-radius: ${({theme}) => theme.radii.button};

  opacity: ${({disabled}) => (disabled ? '0.75' : '1')};
  &:hover {
    color: ${({theme}) => theme.colors.white};
    background: ${({theme, destructive}) =>
      destructive ? theme.colors.red : theme.colors.tealDark};
  }
`;

const StyledSecondaryButton = styled(StyledPrimaryButton)<CombinedProps>`
  background: ${({theme}) => theme.colors.white};
  color: ${({theme, destructive}) =>
    destructive ? theme.colors.redDark : theme.colors.primary};
  border: 1px solid
    ${({theme, destructive}) =>
      destructive ? theme.colors.redDark : theme.colors.primary};

  &:hover {
    background: ${({theme}) => theme.colors.white};
    color: ${({theme, destructive}) =>
      destructive ? theme.colors.red : theme.colors.tealDark};
    border: 1px solid
      ${({theme, destructive}) =>
        destructive ? theme.colors.red : theme.colors.tealDark};
  }
`;

export function Button({
  variant,
  url,
  loading,
  external,
  ...props
}: CombinedProps) {
  let spinnerColor;

  if (variant === 'primary') {
    spinnerColor = 'white';
  } else if (props.destructive) {
    spinnerColor = 'error';
  }

  const loadingMarkup = loading ? (
    <Spinner pr={2} color={spinnerColor} />
  ) : null;

  const children = (
    <>
      {loadingMarkup}
      {props.children}
    </>
  );

  if (url) {
    const additionalProps: any = {as: 'a'};

    if (external) {
      return (
        <StyledBasicButton {...props} href={url} {...additionalProps}>
          {children}
        </StyledBasicButton>
      );
    }

    return (
      <NextLink href={url}>
        <StyledBasicButton {...props} {...additionalProps}>
          {children}
        </StyledBasicButton>
      </NextLink>
    );
  }

  switch (variant) {
    case 'primary':
      return <StyledPrimaryButton {...props}>{children}</StyledPrimaryButton>;
    case 'secondary':
      return (
        <StyledSecondaryButton {...props}>{children}</StyledSecondaryButton>
      );
    default:
      return <StyledBasicButton {...props}>{children}</StyledBasicButton>;
  }
}

export function buttonFrom(
  {content, onAction, ...action}: CombinedProps,
  overrides?: Partial<CombinedProps>,
  key?: any,
) {
  return (
    <Button key={key} onClick={onAction} {...action} {...overrides}>
      {content}
    </Button>
  );
}

export function buttonsFrom(
  action: CombinedProps,
  overrides?: Partial<CombinedProps>,
): React.ReactElement<CombinedProps>;
export function buttonsFrom(
  actions: CombinedProps[],
  overrides?: Partial<CombinedProps>,
): React.ReactElement<CombinedProps>[];
export function buttonsFrom(
  actions: CombinedProps[] | CombinedProps,
  overrides: Partial<CombinedProps> = {},
) {
  if (Array.isArray(actions)) {
    return actions.map((action, index) => buttonFrom(action, overrides, index));
  } else {
    const action = actions;
    return buttonFrom(action, overrides);
  }
}
