import React from 'react';

import {Flex, Box, BoxProps} from './Box';
import {Container} from './Container';
import {Section} from './Section';
import {Navigation} from './Navigation';
import {Button} from './Button';
import {DisplayText} from './DisplayText';
import {Italic} from './Italic';

interface Props extends BoxProps {
  children?: React.ReactNode;
}

export function Mast({children, ...props}: Props) {
  return (
    <Container
      borderBottom="1px solid"
      borderColor="gray.0"
      pb={[0, 0]}
      {...props}
    >
      <Section flexDirection="column">
        <Flex
          width="100%"
          justifyContent="space-between"
          alignItems="center"
          py={3}
        >
          <Box pr={4}>
            <DisplayText p={0}>
              <Italic>Minou’s success</Italic>
            </DisplayText>
          </Box>
          <Box>
            <Button variant="primary">Order now</Button>
          </Box>
        </Flex>
        <Navigation
          variant="tabs"
          items={[
            {content: 'Contibutions'},
            {content: 'Details'},
            {content: 'Share'},
            {content: 'Customizations', active: true},
            {content: 'Questionnaire', external: true},
          ]}
        />
      </Section>
      {children}
    </Container>
  );
}
