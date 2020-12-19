import React from 'react';
import styled from 'styled-components';

import {Error} from '../types';

import {InlineError} from './InlineError';
import {Banner} from './Banner';

interface Props extends React.FormHTMLAttributes<HTMLFormElement> {
  /** The fields of the form */
  children: React.ReactNode;
  loading?: boolean;
  errors?: Error[];
}

const StyledForm = styled.form<Props>`
  opacity: ${({loading}) => (loading ? '0.5' : '1')};
`;

export function Form({children, errors, loading, ...props}: Props) {
  const loadingMarkup = loading ? <p className="loading">loading...</p> : null;
  const errorMarkup = errors ? (
    <Banner>
      {errors.map((error, index) => {
        const message = typeof error === 'string' ? error : error.message;

        return <InlineError key={`${message}${index}`}>{message}</InlineError>;
      })}
    </Banner>
  ) : null;
  return (
    <StyledForm loading={loading} {...props}>
      {loadingMarkup}
      {errorMarkup}
      {children}
    </StyledForm>
  );
}
