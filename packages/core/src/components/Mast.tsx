import React from 'react';

import {Container} from './Container';
import {Section} from './Section';
import {DisplayText} from './DisplayText';
import {Italic} from './Italic';

interface Props {
  title: React.ReactNode;
}

export function Mast({title, ...props}: Props) {
  return (
    <Container pb={[0, 0]} bg="white" {...props}>
      <Section justifyContent="space-between" alignItems="center">
        <DisplayText p={0}>
          <Italic>{title}</Italic>
        </DisplayText>
      </Section>
    </Container>
  );
}
