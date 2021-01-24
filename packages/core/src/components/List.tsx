import React from 'react';
import styled from 'styled-components';

import {ComplexAction} from '../types';

import {Flex, Box, BoxProps} from './Box';
import {Link} from './Link';
import {Text} from './Text';
import {Mono} from './Mono';
import {Rule} from './Rule';

type ListAction = ComplexAction & {
  meta?: string;
};

interface Props extends BoxProps {
  items: ListAction[];
  small?: boolean;
}

const Item = styled(Link)<ComplexAction>`
  padding: 0.8em 0;
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  &:hover {
    background: none;
  }
`;

export function List({items, small, ...props}: Props) {
  const itemsMarkup = items.map(
    ({content, meta, active, url, onClick, ...item}, index) => {
      const color = active ? 'primary' : 'secondary';
      const metaMarkup = meta ? (
        <Text pb={0} small color={color}>
          <Mono>{meta}</Mono>
        </Text>
      ) : null;

      const contentMarkup = (
        <Box flex={1}>
          <Text color="primary" key={index} small={small} pb={0}>
            {content}
          </Text>
        </Box>
      );

      if (url || onClick) {
        return (
          <Item
            active={active}
            key={index}
            bold
            url={url}
            onClick={onClick}
            {...item}
          >
            {contentMarkup}
            {metaMarkup}
          </Item>
        );
      }

      return (
        <Box key={index} width="100%">
          <Flex alignItems="center">
            {contentMarkup}
            {metaMarkup}
          </Flex>
          <Rule my={2} />
        </Box>
      );
    },
  );

  return (
    <Flex as="nav" flexDirection="column" {...props}>
      {itemsMarkup}
    </Flex>
  );
}
