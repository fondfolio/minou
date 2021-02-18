import {Header, Flex, Box, Layout, Footer, List} from 'minou';

const ITEMS = [
  {
    content: 'Actions',
    url: '/components/actions',
  },
  {
    content: 'InlineFieldSet',
    url: '/components/inline-field-set',
  },
  {
    content: 'Icons',
    url: '/components/icons',
  },
  {
    content: 'Banner',
    url: '/components/banner',
  },
  {
    content: 'Checkbox',
    url: '/components/checkbox',
  },
];

export function Interface({children}) {
  return (
    <>
      <Header />
      <Layout full>
        <Flex width="100%">
          <Box width={1 / 3} pr={3}>
            <List items={ITEMS} />
          </Box>
          <Box width={2 / 3}>{children}</Box>
        </Flex>
      </Layout>
      <Footer />
    </>
  );
}
