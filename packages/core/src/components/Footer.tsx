import React from 'react';
import {Icons} from '@minou/icons';

import {Navigation} from './Navigation';
import {Italic} from './Italic';
import {Link} from './Link';
import {ButtonGroup} from './ButtonGroup';
import {Bullet} from './Bullet';
import {Flex, Box} from './Box';
import {Label} from './Label';
import {Text} from './Text';
import {Icon} from './Icon';
import {Container} from './Container';
import {Section} from './Section';

const FONDFOLIO_DOMAIN = 'https://fondfolio.com';

export function Footer() {
  return (
    <>
      <Navigation
        items={[
          {content: 'About', size: 'small', url: `${FONDFOLIO_DOMAIN}/about`},
          {content: 'Help', size: 'small', url: `${FONDFOLIO_DOMAIN}/help`},
          {content: 'Blog', size: 'small', url: `${FONDFOLIO_DOMAIN}/blog`},
          {content: 'Terms', size: 'small', url: `${FONDFOLIO_DOMAIN}/terms`},
          {
            content: 'Privacy',
            size: 'small',
            url: `${FONDFOLIO_DOMAIN}/privacy`,
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
            <Text pb={0} small>
              <Italic>Proudly made in Toronto &amp; Berlin</Italic>
              {/* <Bullet /> <Link>Cartogram</Link> */}
            </Text>
            <Box display={['none', 'block']}>
              <Bullet />
            </Box>
            <ButtonGroup pl={[3, 0]} pt={[3, 0]}>
              <Link unstyled url="https://twitter.com/fondfolio">
                <Icon color="primary" icon={Icons.Twitter} />
              </Link>
              <Link unstyled url="https://www.instagram.com/fondfolio">
                <Icon color="primary" icon={Icons.Instagram} />
              </Link>
              <Link unstyled url="https://www.facebook.com/fondfolio/">
                <Icon color="primary" icon={Icons.Facebook} />
              </Link>
            </ButtonGroup>
          </Flex>
        </Section>
      </Container>
    </>
  );
}
