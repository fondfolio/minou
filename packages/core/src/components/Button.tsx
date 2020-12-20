import React, {forwardRef} from 'react';
import styled from 'styled-components';
import {reset} from '@minou/utilities';
import {ComplexAction} from 'types';

interface Props extends ComplexAction {
  /** The content to display inside the button */
  children?: React.ReactNode;
}

type CombinedProps = Props & React.ButtonHTMLAttributes<HTMLButtonElement>;

const StyledButton = styled.button<Props>`
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
  cursor: pointer;
  position: relative;
  color: ${({theme}) => theme.colors.teal};
  transition: ${({theme}) => theme.transitions.all};
  font-size: ${({size}) => (size === 'small' ? '0.75em' : '1em')};

  &:hover {
    text-decoration: underline;
    color: ${({theme}) => theme.colors.tealDark};
  }
`;

const StyledPrimaryButton = styled(StyledButton)`
  color: ${({theme}) => theme.colors.white};
  background: ${({theme}) => theme.colors.teal};
  padding: ${({size}) => (size === 'small' ? '0.8em 1.6em' : '0.8em 1.6em;')};
  font-weight: ${({theme}) => theme.fontWeights.bold};
  border-radius: ${({theme}) => theme.radii.button};
  border: 1px solid ${({theme}) => theme.colors.tealDark};
  line-height: 0.9;

  &:hover {
    color: ${({theme}) => theme.colors.white};
    background: ${({theme}) => theme.colors.tealDark};
    text-decoration: none;
  }
`;

const StyledSecondaryButton = styled(StyledPrimaryButton)`
  color: ${({theme}) => theme.colors.teal};
  background: ${({theme}) => theme.colors.white};

  &:hover {
    text-decoration: none;
    color: ${({theme}) => theme.colors.tealDark};
    background: ${({theme}) => theme.colors.white};
  }
`;

const StyledDestructiveButton = styled(StyledSecondaryButton)`
  color: ${({theme}) => theme.colors.red};
  border: 1px solid ${({theme}) => theme.colors.red};

  &:hover {
    color: ${({theme}) => theme.colors.redDark};
    border: 1px solid ${({theme}) => theme.colors.redDark};
  }
`;

export const Button = forwardRef<HTMLButtonElement, CombinedProps>(
  (props, ref) => {
    const {variant} = props;
    const combinedProps = {ref, ...props};

    switch (variant) {
      case 'primary':
        return <StyledPrimaryButton {...combinedProps} />;
      case 'secondary':
        return <StyledSecondaryButton {...combinedProps} />;
      case 'destructive':
        return <StyledDestructiveButton {...combinedProps} />;
      default:
        return <StyledButton {...combinedProps} />;
    }
  },
);

Button.displayName = 'Button';

export function buttonFrom(
  {content, onAction, ...action}: ComplexAction,
  overrides?: Partial<CombinedProps>,
  key?: any,
) {
  return (
    <Button key={key} onClick={onAction} {...action} {...overrides}>
      {content}
    </Button>
  );
}
