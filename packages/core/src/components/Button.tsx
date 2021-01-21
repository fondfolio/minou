import React from 'react';
import styled from 'styled-components';
import NextLink from 'next/link';
import {reset, looksExternal} from '@minou/utilities';

import {ComplexAction} from '../types';

import {Spinner} from './Spinner';

interface Props extends ComplexAction {
  unstyled?: boolean;
  as?: string;
  type?: 'button' | 'submit';
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
      destructive ? theme.colors.error : theme.colors.tealDark};
    background: ${({theme, destructive, unstyled}) =>
      destructive || unstyled ? 'none' : theme.colors.teal[0]};
  }
`;

const StyledPrimaryButton = styled(StyledBasicButton)<CombinedProps>`
  color: ${({theme}) => theme.colors.white};
  background: ${({theme, destructive}) =>
    destructive ? theme.colors.redDark : theme.colors.primary};
  padding: ${({size}) => (size === 'large' ? '1em 2.5em' : '0.4em 1.2em')};
  border-radius: ${({theme}) => theme.radii.button};

  opacity: ${({disabled}) => (disabled ? '0.75' : '1')};
  &:hover {
    color: ${({theme}) => theme.colors.white};
    background: ${({theme, destructive}) =>
      destructive ? theme.colors.red[1] : theme.colors.tealDark};
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
      destructive ? theme.colors.red[1] : theme.colors.tealDark};
    border: 1px solid
      ${({theme, destructive}) =>
        destructive ? theme.colors.red[1] : theme.colors.tealDark};
  }
`;

export function Button({
  variant,
  url,
  loading,
  external,
  type = 'button',
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

  const linkProps: any = {
    as: url ? 'a' : 'button',
    href: external || looksExternal(url) ? url : undefined,
    type: url ? undefined : type,
  };

  let buttonContent;

  switch (variant) {
    case 'primary':
      buttonContent = (
        <StyledPrimaryButton {...linkProps} {...props}>
          {children}
        </StyledPrimaryButton>
      );
      break;
    case 'secondary':
      buttonContent = (
        <StyledSecondaryButton {...linkProps} {...props}>
          {children}
        </StyledSecondaryButton>
      );

      break;
    default:
      buttonContent = (
        <StyledBasicButton {...linkProps} {...props}>
          {children}
        </StyledBasicButton>
      );
  }

  if (url) {
    if (external) {
      return buttonContent;
    }

    return <NextLink href={url}>{buttonContent}</NextLink>;
  }

  return buttonContent;
}

export function buttonFrom(
  {content, ...action}: CombinedProps,
  overrides?: Partial<CombinedProps>,
  key?: any,
) {
  return (
    <Button key={key} {...action} {...overrides}>
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
