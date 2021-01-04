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
  const numberOfChildren = React.Children.count(children);
  const shouldBleed = full || numberOfChildren === 1;

  const additionalProps = {
    justifyContent: center ? 'center' : 'flex-start',
    ml: [0, 0, 0, shouldBleed ? 0 : -4],
  };

  const content = React.Children.map(children, (child, index) => {
    const props = {
      width: full ? ['100%'] : ['100%', '90%', '80%', '50%'],
      paddingLeft: [0, 0, 0, shouldBleed ? 0 : 4],
      paddingRight: [0, 0, 0, shouldBleed ? 0 : 4],
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
