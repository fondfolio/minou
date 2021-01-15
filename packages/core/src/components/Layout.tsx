import React from 'react';

import {Container} from './Container';
import {Section} from './Section';
import {Flex, BoxProps} from './Box';

interface Props extends BoxProps {
  children: React.ReactNode;
  center?: boolean;
  full?: boolean;
}

export function Layout({children, bg, full, center}: Props) {
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
      order:
        React.isValidElement(child) && child.props.order
          ? child.props.order
          : undefined,
    };

    return (
      <Flex key={index} flexDirection="column" {...props}>
        {child}
      </Flex>
    );
  });

  return (
    <Container bg={bg}>
      <Section>
        <Flex flexWrap="wrap" width="100%" {...additionalProps}>
          {content}
        </Flex>
      </Section>
    </Container>
  );
}
