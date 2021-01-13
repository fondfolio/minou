import React from 'react';

import {Display} from './Display';
import {Box, Flex} from './Box';
import {Text} from './Text';

interface Props {
  /** The content to display inside the button */
  children: React.ReactNode;
  citation: string;
}

export function Blockquote({citation, children}: Props) {
  return (
    <Flex flexDirection="column" alignItems="center" p="4">
      <Display textAlign="center" italic>
        {children}
      </Display>
      <Box>
        <Text as="span" textAlign="center">
          – {citation}
        </Text>
      </Box>
    </Flex>
  );
}
