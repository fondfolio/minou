import React from 'react';
import styled from 'styled-components';

import {ComplexAction} from '../types';

import {Flex, BoxProps} from './Box';
import {Link} from './Link';

interface Props extends BoxProps {
  rightToLeft?: boolean;
  items: ComplexAction[];
  variant?: 'tabs' | 'links';
}

const StyledNavigation = styled(Flex)<Props>`
  margin: ${({rightToLeft}) =>
    rightToLeft ? '0 -0.5em -1px 0' : '0 0 -1px -0.5em'};

  > a {
    margin: 0 0.5em;

    &:after {
      transform: scaleX(0);
    }

    &.active {
      pointer-events: none;

      &:hover {
        background: none;
      }

      &:after {
        transform: scaleX(1);
      }
    }
  }
`;

export function Navigation({items, variant, ...props}: Props) {
  const itemsMarkup = items.map(({content, ...item}, index) => {
    return variant === 'tabs' ? (
      <Link tab key={index} {...item}>
        {content}
      </Link>
    ) : (
      <Link key={index} {...item}>
        {content}
      </Link>
    );
  });

  return (
    <StyledNavigation as="nav" {...props}>
      {itemsMarkup}
    </StyledNavigation>
  );
}
