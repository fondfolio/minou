import React from 'react';

import {Action} from '../types';

import {Container} from './Container';
import {Section} from './Section';
import {Title} from './Title';
import {Image} from './Image';
import {IconType} from './Icon';
import {Flex, Box} from './Box';
import {buttonsFrom} from './Button';

interface Props {
  title: React.ReactNode;
  meta?: React.ReactNode;
  image?: string | React.ReactNode | IconType;
  breadcrumbs?: Action[];
}

export function Mast({title, image, breadcrumbs, meta, ...props}: Props) {
  const imageContent =
    typeof image === 'string' ? (
      <Image circle src={image} height="100" width="100" />
    ) : (
      image
    );
  const imageMarkup = imageContent ? <Box pr={4}>{imageContent}</Box> : null;
  const breadcrumbsMarkup = breadcrumbs ? (
    <Flex alignItems="center">{buttonsFrom(breadcrumbs)}</Flex>
  ) : null;

  return (
    <Container pb={[0, 0]} bg="white" {...props}>
      <Section alignItems="center">
        {imageMarkup}
        <Flex flexDirection="column">
          {breadcrumbsMarkup}
          <Title pb={1}>{title}</Title>
          {meta}
        </Flex>
      </Section>
    </Container>
  );
}
