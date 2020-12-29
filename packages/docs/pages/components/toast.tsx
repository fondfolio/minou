import {Container, Layout, Box, Title, Page, Section, Flex, Toast} from 'minou';

export default function ToastPage() {
  return (
    <Page>
      <Container>
        <Section>
          <Layout>
            <>
              <Title>Toast</Title>
              <Flex flexDirection="column">
                <Box my={1}>
                  <Toast content="Basic toast message" />
                </Box>
                <Box my={1}>
                  <Toast content="With an action" action={{content: 'Undo'}} />
                </Box>

                <Box my={1}>
                  <Toast content="Oops! Something went wrong!" error />
                </Box>
              </Flex>
            </>
          </Layout>
        </Section>
      </Container>
    </Page>
  );
}
