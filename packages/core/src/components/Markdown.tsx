import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

import {line} from './Link';

const StyledMarkdown = styled.div`
  p {
    margin-bottom: 1em;
  }

  em {
    display: inline;
    font-style: italic;
    font-family: ${({theme}) => theme.fonts.serif};
    margin: 0 1px;
    color: inherit;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    position: relative;
    display: inline-flex;
    color: ${({theme}) => theme.colors.primary};
    text-decoration: none;
    transition: ${({theme}) => theme.transitions.all};
    padding: 0 1px;
    align-items: center;
    white-space: nowrap;

    &:hover {
      color: ${({theme}) => theme.colors.tealDark};
      background: ${({theme}) => theme.colors.teal[0]};
    }

    ${(props) => line({...props, active: true})}
  }
`;

export function Markdown({children}: any) {
  return (
    <StyledMarkdown>
      <ReactMarkdown>{children}</ReactMarkdown>
    </StyledMarkdown>
  );
}
