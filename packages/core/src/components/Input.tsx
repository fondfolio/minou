import React from 'react';
import styled from 'styled-components';

export type Type =
  | 'text'
  | 'email'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'url'
  | 'date'
  | 'datetime-local'
  | 'month'
  | 'time'
  | 'week'
  | 'currency';

interface Props {
  /** Changes the input size */
  textSize?: 'small' | 'large';
  /** Determine type of input */
  type?: Type;

  focus: boolean;
}

type CombinedProps = Props & React.InputHTMLAttributes<HTMLInputElement>;

const StyledInput = styled.input<Props>`
  border-radius: ${({theme}) => theme.radii.input};
  padding: 0.8em 1.2em;
  border: 1px solid ${({theme}) => theme.colors.greyLight};
  font-size: ${({textSize}) => (textSize === 'small' ? '0.8em' : '1em')};

  &:focus {
    outline: none;
    border-color: ${({theme}) => theme.colors.tealLight};
  }
`;

export const Input = (props: CombinedProps) => {
  return <StyledInput {...props} />;
};

Input.displayName = 'Input';
