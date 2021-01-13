import React from 'react';
import {gql, useQuery} from '@apollo/client';
import {Page, Icon, IconName, Spinner, Layout, Title, withGraphql} from 'minou';

const ALL_FONDFOLIOS_QUERY = gql`
  query allFondfolios {
    fondfolios {
      id
    }
  }
`;

function Graphql() {
  const {loading, error, data} = useQuery(ALL_FONDFOLIOS_QUERY);

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
        <Spinner />
        <Title>Graphql</Title>
        {fondfoliosMarkup}
      </Layout>
    </Page>
  );
}

export default withGraphql({ssr: false})(Graphql);
