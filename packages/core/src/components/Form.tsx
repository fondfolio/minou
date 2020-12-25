import React from 'react';
import styled from 'styled-components';

import {Error} from '../types';

import {Box} from './Box';
import {Banner} from './Banner';
import {Spinner} from './Spinner';

interface Props extends React.FormHTMLAttributes<HTMLFormElement> {
  /** The fields of the form */
  children: React.ReactNode;
  submitting?: boolean;
  errors?: Error[];
}

const StyledForm = styled.form<Props>`
  opacity: ${({submitting}) => (submitting ? '0.5' : '1')};
  width: 100%;
`;

export function Form({children, errors, submitting, ...props}: Props) {
  const loadingMarkup = submitting ? <Spinner /> : null;
  const errorMarkup =
    errors && errors.length ? (
      <Box pb={3} width={[1]}>
        {errors.map((error, index) => {
          const message = typeof error === 'string' ? error : error.message;
          return (
            <Banner variant="error" key={`${message}${index}`}>
              {message}
            </Banner>
          );
        })}
      </Box>
    ) : null;

  return (
    <>
      {loadingMarkup}
      {errorMarkup}
      <StyledForm submitting={submitting} {...props}>
        {children}
      </StyledForm>
    </>
  );
}
