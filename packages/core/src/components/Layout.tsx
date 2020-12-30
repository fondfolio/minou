import React from 'react';

import {Container} from './Container';
import {Section} from './Section';
import {Flex} from './Box';

interface Props {
  children: React.ReactNode;
  center?: boolean;
  full?: boolean;
}

export function Layout({children, full, center}: Props) {
  const additionalProps = {
    justifyContent: center ? 'center' : 'flex-start',
    ml: full ? 0 : -3,
  };

  const content = React.Children.map(children, (child, index) => {
    const props = {
      width: full ? ['100%'] : ['100%', '80%', '75%', '50%'],
      padding: full ? 0 : 3,
    };

    return (
      <Flex key={index} flexDirection="column" {...props}>
        {child}
      </Flex>
    );
  });

  return (
    <Container>
      <Section>
        <Flex flexWrap="wrap" width="100%" {...additionalProps}>
          {content}
        </Flex>
      </Section>
    </Container>
  );
}
