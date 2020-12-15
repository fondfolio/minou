import React, {forwardRef} from 'react';
import styled from 'styled-components';
import {reset} from '@minou/utilities';

interface Props {
  variant?: 'primary';
  /** The content to display inside the button */
  children: string;
}

const StyledButton = styled.button<Props>`
  ${reset};
  text-decoration: none;
  cursor: pointer;
  position: relative;
  display: inline-flex;
  color: ${({theme}) => theme.colors.teal};
  &:hover {
    text-decoration: underline;
  }
`;

const StyledPrimaryButton = styled(StyledButton)`
  color: ${({theme}) => theme.colors.white};
  background: ${({theme}) => theme.colors.teal};
  padding: 0.5em 1em;
  border-radius: ${({theme}) => theme.radii[1]};
  box-shadow: inset 0 0 0 0 ${({theme}) => theme.colors.tealDark};
  transition: ${({theme}) => theme.transitions.background};

  &:hover {
    background: ${({theme}) => theme.colors.tealDark};
    text-decoration: none;
  }
`;

export const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const {variant} = props;
  if (variant === 'primary') {
    return <StyledPrimaryButton ref={ref} {...props} />;
  }

  return <StyledButton ref={ref} {...props} />;
});

Button.displayName = 'Button';
