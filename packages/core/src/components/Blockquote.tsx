import React from 'react';

import {DisplayText} from './DisplayText';
import {Box, Flex} from './Box';
import {Text} from './Text';
import {Italic} from './Italic';

interface Props {
  /** The content to display inside the button */
  children: React.ReactNode;
  citation: string;
}

export function Blockquote({citation, children}: Props) {
  return (
    <Flex flexDirection="column" alignItems="center" p="4">
      <DisplayText textAlign="center">
        <Italic>{children}</Italic>
      </DisplayText>
      <Box pt="4">
        <Text textAlign="center">– {citation}</Text>
      </Box>
    </Flex>
  );
}
