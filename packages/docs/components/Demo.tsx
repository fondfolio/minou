import {Box, Flex, Layout, Card} from 'minou';

export function Demo({children}) {
  return (
    <Layout>
      <Card>{children}</Card>
    </Layout>
  );
}
