import React from 'react';
import styled from 'styled-components';

import {ComplexAction} from '../types';

import {Flex, BoxProps} from './Box';
import {Link} from './Link';
import {Text} from './Text';

type ListAction = ComplexAction & {
  meta?: string;
};

interface Props extends BoxProps {
  items: ListAction[];
}

const Item = styled(Link)<ComplexAction>`
  padding: 0.8em 0.2em;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  background: ${({theme, active}) => (active ? theme.colors.teal[0] : 'none')};
`;

export function List({items, ...props}: Props) {
  const itemsMarkup = items.map(({content, meta, active, ...item}, index) => {
    const metaMarkup = meta ? (
      <Text pb={0} small>
        {meta}
      </Text>
    ) : null;

    return (
      <Item active={active} key={index} bold {...item}>
        {content}
        {metaMarkup}
      </Item>
    );
  });

  return (
    <Flex as="nav" flexDirection="column" {...props}>
      {itemsMarkup}
    </Flex>
  );
}
