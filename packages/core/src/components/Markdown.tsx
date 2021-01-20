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
    margin-top: 2em;
    margin-bottom: 0.8em;
    font-weight: normal;
  }

  blockquote {
    width: calc(100% + 6em);
    margin-left: -3em;
    margin-top: 3em;
    margin-bottom: 3em;
    position: relative;
    background: white;
    padding: 2em;
    box-shadow: 0px 0px 1px currentColor inset;
    line-height: 1.45;
    p {
      text-align: center;
      font-size: ${({theme}) => toPx(theme.fontSizes[2])};
      font-style: italic;
      font-family: ${({theme}) => theme.fonts.serif};
    }
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

  hr {
    background-color: currentColor;
    height: 1px;
    opacity: 0.1;
    margin: 2em -2em;
  }

  img {
    display: block;
    width: calc(100% + 12em);
    margin-left: -6em;
    margin-top: 3em;
    margin-bottom: 1em;
    position: relative;
    background: white;
    box-shadow: 0px 0px 1px currentColor inset;
    line-height: 1.45;
    padding: 3em;
  }

  p img + em {
    font-size: ${({theme}) => toPx(theme.fontSizes[0])};
    display: block;
    text-align: center;
    top: -3.5em;
    position: relative;
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
