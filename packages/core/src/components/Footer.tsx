import React from 'react';
import {Icons} from '@minou/icons';

import {Navigation} from './Navigation';
import {Layout} from './Layout';
import {Text} from './Text';
import {Link} from './Link';
import {ButtonGroup} from './ButtonGroup';
import {Bullet} from './Bullet';
import {Flex, Box} from './Box';
import {Label} from './Label';
import {Icon} from './Icon';

const FONDFOLIO_DOMAIN = 'https://fondfolio.com';

export function Footer() {
  return (
    <>
      <Navigation
        items={[
          {content: 'Help', size: 'small', url: `${FONDFOLIO_DOMAIN}/help`},
          {content: 'Terms', size: 'small', url: `${FONDFOLIO_DOMAIN}/terms`},
          {
            content: 'Privacy',
            size: 'small',
            url: `${FONDFOLIO_DOMAIN}/privacy`,
          },
          {content: 'About', size: 'small', url: `${FONDFOLIO_DOMAIN}/about`},
          {content: 'Blog', size: 'small', url: `${FONDFOLIO_DOMAIN}/blog`},
        ]}
      />
      <Layout>
        <Flex
          alignItems={['flex-start', 'center']}
          flexDirection={['column', 'row']}
        >
          <Label pb={0} small>
            Copyright 2020 Fondfolio Inc.
          </Label>
          <Box display={['none', 'block']}>
            <Bullet />
          </Box>
          <Text small italic pb={[2, 0]} pr={3}>
            Proudly made in Toronto by Cartogram
          </Text>
          <ButtonGroup>
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
      </Layout>
    </>
  );
}
