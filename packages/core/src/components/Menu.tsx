import React from 'react';
import styled from 'styled-components';

import {ComplexAction} from '../types';

import {Flex, BoxProps} from './Box';
import {Link} from './Link';
import {Rule} from './Rule';

type MenuAction = ComplexAction & {
  segment?: boolean;
};

interface Props extends BoxProps {
  items: MenuAction[];
  location?: string;
}

const Item = styled(Link)<ComplexAction>`
  padding: 0.5em 0 0 1.5em;
`;

export function Menu({items, location, ...props}: Props) {
  const itemsMarkup = items.map(({content, segment, url, ...item}, index) => {
    const itemMarkup = (
      <Item key={index} bold={url === location} url={url} unstyled {...item}>
        {content}
      </Item>
    );

    if (segment) {
      return (
        <>
          <Rule mt={2} />
          {itemMarkup}
        </>
      );
    }

    return itemMarkup;
  });

  return (
    <Flex as="nav" flexDirection="column" {...props}>
      {itemsMarkup}
    </Flex>
  );
}
