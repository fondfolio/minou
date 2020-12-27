import React from 'react';
import styled from 'styled-components';

import {ComplexAction} from '../types';

import {Flex, BoxProps} from './Box';
import {Link} from './Link';

interface Props extends BoxProps {
  items: ComplexAction[];
  prefix?: React.ReactNode;
  postfix?: React.ReactNode;
}

const Tab = styled(Link)<ComplexAction>`
  padding: 0.5em 0 0 1.5em;
`;

export function Menu({items, prefix, postfix, ...props}: Props) {
  const itemsMarkup = items.map(({content, ...item}, index) => {
    return (
      <Tab key={index} unstyled {...item}>
        {content}
      </Tab>
    );
  });

  return (
    <Flex as="nav" flexDirection="column" {...props}>
      {itemsMarkup}
    </Flex>
  );
}
