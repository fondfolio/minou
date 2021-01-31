import React, {useState, useEffect} from 'react';
import {gql, useQuery} from '@apollo/client';
import {
  Page,
  Button,
  Form,
  TextField,
  InlineFieldSet,
  Layout,
  Title,
  withGraphql,
  Modal,
} from 'minou';

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
        <Filter />
        {fondfoliosMarkup}
      </Layout>
    </Page>
  );
}

export default withGraphql()(Graphql);

interface Props {
  initialQuery?: string;
  placeholder?: string;
  onFilter?(query?: string): void;
}

function Filter({initialQuery, placeholder, onFilter}: Props) {
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  return (
    <Form
      onSubmit={() => {
        if (onFilter) {
          onFilter(query);
        }
      }}
    >
      <InlineFieldSet
        action={{
          onClick: () => {
            if (onFilter) {
              onFilter(query);
            }
          },
          variant: 'primary',
          content: 'Search',
        }}
      >
        <TextField
          labelHidden
          placeholder={placeholder}
          value={query}
          onChange={setQuery}
        />
      </InlineFieldSet>
    </Form>
  );
}
