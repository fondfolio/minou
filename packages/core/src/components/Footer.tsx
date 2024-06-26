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
          {
            content: 'About',
            size: 'small',
            url: `${DOMAINS.website}/about`,
          },
          {content: 'Help', size: 'small', url: `${DOMAINS.website}/help`},
          {content: 'Blog', size: 'small', url: `${DOMAINS.website}/blog`},
          {
            content: 'Sitemap',
            size: 'small',
            url: `${DOMAINS.website}/sitemap`,
          },
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
      <Container pt={[2, 3]}>
        <Section justifyContent={['center']}>
          <Flex
            alignItems={['flex-start', 'center']}
            flexDirection={['column', 'row']}
          >
            <Label pb={0} small>
              Copyright {new Date().getFullYear()} Fondfolio Inc.
            </Label>
            <Box display={['none', 'block']}>
              <Bullet />
            </Box>
            <Text pb={0} small pr={2}>
              <Italic>Proudly made in Toronto & Berlin</Italic>
            </Text>
            <Box pt={[3, 2]}>
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
