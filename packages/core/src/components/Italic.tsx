import React from 'react';
import styled from 'styled-components';

export interface ItalicProps {}

const StyledItalic = styled.span<ItalicProps>`
  display: inline;
  font-style: italic;
  font-family: ${({theme}) => theme.fonts.serif};
  margin: 0 1px;
  color: inherit;
  font-weight: normal;
`;

export function Italic(props: ItalicProps) {
  return <StyledItalic {...props} />;
}
