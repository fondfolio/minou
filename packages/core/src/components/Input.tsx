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
  /** Is the input focused */
  focus?: boolean;
  /** specify the underlaying component  */
  as?: React.ElementType;
  /** specify the underlaying component  */
  height?: number;
  /** Error to display beneath the label */
  error?: boolean;
  /** Center align the text inside the input */
  center?: boolean;
  /** Disable the input */
  disabled?: boolean;
}

type CombinedProps = Props & React.InputHTMLAttributes<HTMLInputElement>;

const StyledInput = styled.input<Props>`
  background: ${({disabled, theme}) =>
    disabled ? theme.colors.greySuperlight : 'white'};
  width: 100%;
  border-radius: ${({theme}) => theme.radii.input};
  padding: 0.8em 1.2em;
  text-align: ${({center}) => (center ? 'center' : 'left')};
  border: ${({theme, error}) =>
    error
      ? `2px solid ${theme.colors.error}`
      : `1px solid ${theme.colors.greyLight}`};
  font-size: ${({textSize}) => (textSize === 'small' ? '0.8em' : '1em')};
  line-height: 1.45;
  height: ${({height}) => (height ? `${height}px` : 'auto')};

  &:focus {
    outline: none;
    border-color: ${({theme}) => theme.colors.tealLight};
  }
`;

export const Input = (props: CombinedProps) => {
  return <StyledInput {...props} />;
};

export const TextArea = ({height, ...props}: CombinedProps) => {
  return <StyledInput height={height || 400} as="textarea" {...props} />;
};
