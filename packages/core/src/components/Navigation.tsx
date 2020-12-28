import React from 'react';
import styled from 'styled-components';

import {ComplexAction} from '../types';

import {Section} from './Section';
import {Container} from './Container';
import {Flex, BoxProps} from './Box';
import {Link} from './Link';

interface Props extends BoxProps {
  items: ComplexAction[];
  prefix?: React.ReactNode;
  postfix?: React.ReactNode;
  location?: string;
}

const Tab = styled(Link)<ComplexAction>`
  padding-bottom: 1em;
  margin: 0 1em;

  &:hover {
    background: none;
  }
`;

const Wrapper = styled(Flex)`
  flex: 1;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  white-space: nowrap;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export function Navigation({
  items,
  location,
  prefix,
  postfix,
  ...props
}: Props) {
  const itemsMarkup = items.map(({content, url, ...item}, index) => {
    return (
      <Tab key={index} active={location === url} url={url} {...item}>
        {content}
      </Tab>
    );
  });

  return (
    <Container
      as="nav"
      pb={[0, 0]}
      borderBottom="1px solid"
      borderColor="gray.0"
      {...props}
    >
      <Section alignItems="baseline">
        {prefix}
        <Wrapper mb="-1px" ml="-1em" mr="1em" flex="1" alignItems="baseline">
          {itemsMarkup}
        </Wrapper>
        {postfix}
      </Section>
    </Container>
  );
}
