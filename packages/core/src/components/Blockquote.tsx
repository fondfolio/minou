import React from 'react';

import {Display} from './Display';
import {Box, Flex} from './Box';
import {Text} from './Text';
import {Mono} from './Mono';
import {Bullet} from './Bullet';

interface Props {
  /** The content to display inside the button */
  children: React.ReactNode;
  citation: string;
}

export function Blockquote({citation, children}: Props) {
  return (
    <Flex flexDirection="column" alignItems="center">
      <Display textAlign="center" as="blockquote" italic>
        {children}
      </Display>
      <Box pt="4">
        <Text pb={0} textAlign="center">
          <Bullet mr={1} />
          <Mono>{citation}</Mono>
        </Text>
      </Box>
    </Flex>
  );
}
