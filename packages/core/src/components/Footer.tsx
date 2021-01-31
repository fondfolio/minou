import React from 'react';
import {Icons} from '@minou/icons';
import {DOMAINS} from '@minou/utilities';

import {Navigation} from './Navigation';
import {Italic} from './Italic';
import {Link} from './Link';
import {Bullet} from './Bullet';
import {Flex, Box} from './Box';
import {Label} from './Label';
import {Text} from './Text';
import {Icon} from './Icon';
import {Container} from './Container';
import {Section} from './Section';

export function Footer() {
  return (
    <>
      <Navigation
        items={[
          {content: 'About', size: 'small', url: `${DOMAINS.website}/about`},
          {content: 'Help', size: 'small', url: `${DOMAINS.website}/help`},
          {content: 'Blog', size: 'small', url: `${DOMAINS.website}/blog`},
          {content: 'Terms', size: 'small', url: `${DOMAINS.website}/terms`},
          {
            content: 'Privacy',
            size: 'small',
            url: `${DOMAINS.website}/privacy`,
          },
          {
            content: 'Status',
            size: 'small',
            url: `https://status.fondfolio.com`,
          },
        ]}
      />
      <Container>
        <Section>
          <Flex
            alignItems={['flex-start', 'center']}
            flexDirection={['column', 'row']}
          >
            <Label pb={0} small>
              Copyright 2021 Fondfolio Inc.
            </Label>
            <Box display={['none', 'block']}>
              <Bullet />
            </Box>
            <Text pb={0} small pr={3}>
              <Italic>Proudly made in Toronto</Italic>
            </Text>
            <Box pt={[3, 0]}>
              <Link unstyled url="https://twitter.com/fondfolio">
                <Icon color="primary" icon={Icons.Twitter} />
              </Link>
              <Link unstyled url="https://www.instagram.com/fondfolio">
                <Icon color="primary" icon={Icons.Instagram} />
              </Link>
              <Link unstyled url="https://www.facebook.com/fondfolio/">
                <Icon color="primary" icon={Icons.Facebook} />
              </Link>
            </Box>
          </Flex>
        </Section>
      </Container>
    </>
  );
}
