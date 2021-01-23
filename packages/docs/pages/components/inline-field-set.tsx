import React from 'react';
import {gql, useQuery} from '@apollo/client';
import {Page, Button, Layout, Title, withGraphql, Modal} from 'minou';

const ALL_FONDFOLIOS_QUERY = gql`
  query allFondfolios {
    fondfolios {
      id
    }
  }
`;

function Graphql() {
  const {loading, error, data} = useQuery(ALL_FONDFOLIOS_QUERY);
  const [showModal, setShowModal] = React.useState(false);

  if (loading) {
    return 'loading';
  }

  if (error) {
    return 'error';
  }

  if (!data) {
    return 'no data';
  }

  const fondfoliosMarkup = data.fondfolios.map((fond) => (
    <div key={fond.id}>{fond.id}</div>
  ));

  return (
    <Page>
      <Layout>
        <Title>Graphql</Title>
        <Button onClick={() => setShowModal(true)}>show modal</Button>
        <Button onClick={() => setShowModal(true)}>show modal</Button>
        <Button onClick={() => setShowModal(true)}>show modal</Button>
        <Modal
          active={showModal}
          onClose={() => {
            setShowModal(false);
          }}
        >
          Trapped
          <Button onClick={() => setShowModal(true)}>show modal</Button>
        </Modal>
        <Button onClick={() => setShowModal(true)}>show modal</Button>

        {fondfoliosMarkup}
      </Layout>
    </Page>
  );
}

export default withGraphql()(Graphql);

declare module 'trap-focus-react' {
  interface Props {}
  export default function TrapFocus(props: Props);
}
