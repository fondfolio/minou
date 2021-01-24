import React from 'react';
import styled, {css} from 'styled-components';
import {center} from '@minou/utilities';

import {Container} from './Container';
import {Section} from './Section';
import {Flex, BoxProps} from './Box';

interface Props extends BoxProps {
  children: React.ReactNode;
  center?: boolean;
  full?: boolean;
  split?: boolean;
}

const StyledLayout = styled(Flex)<Props>`
  ${({split}) => line(split)};
`;

export function Layout({children, split, bg, full, center}: Props) {
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
        <StyledLayout
          position="relative"
          flexWrap="wrap"
          width="100%"
          split={split}
          {...additionalProps}
        >
          {content}
        </StyledLayout>
      </Section>
    </Container>
  );
}

export function line(show?: boolean) {
  if (!show) {
    return '';
  }

  return css`
    position: relative;
    @media screen and (min-width: ${({theme}) => theme.breakpoints[2]}) {
      &::before {
        content: '';
        position: absolute;
        height: 100%;
        top: 0;
        background: ${({theme}) => theme.colors.primary};
        width: 1px;
        ${center({x: true, y: true})};
      }
    }
  `;
}
