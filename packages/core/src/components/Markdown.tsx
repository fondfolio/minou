import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import {toPx} from '@minou/utilities';

import {line} from './Link';

const StyledMarkdown = styled.div`
  p {
    margin-bottom: 1em;
  }

  p:last-of-type {
    margin: 0;
  }

  h1 {
    font-size: ${({theme}) => toPx(theme.fontSizes[2])};
    font-family: ${({theme}) => theme.fonts.serif};
    margin-top: 1em;
    margin-bottom: 0.35em;
    font-weight: normal;
  }

  ol {
    list-style: none;
    counter-reset: item;
  }

  ol li {
    padding-left: 1em;
    margin-bottom: 1em;
    counter-increment: item;

    &::before {
      content: counter(item);
      display: inline-block;
      font-style: italic;
      font-family: ${({theme}) => theme.fonts.serif};
      color: inherit;
      position: relative;
      left: -1em;
      margin-right: -0.5em;
    }
  }

  ul li {
    list-style: none;
    padding-left: 0.5em;
    margin-left: 1em;
    padding-left: 0;

    &::before {
      content: '';
      height: 4px;
      width: 4px;
      border-radius: 50%;
      background: ${({theme}) => theme.colors.primary};
      display: inline-block;
      position: relative;
      left: -0.5em;
      top: -2px;
    }
  }

  em {
    display: inline;
    font-style: italic;
    font-family: ${({theme}) => theme.fonts.serif};
    margin: 0 1px;
    color: inherit;
  }

  img {
    max-width: 100%;
    display: block;
    margin-bottom: 1em;
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
