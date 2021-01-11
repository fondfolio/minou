import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import {NextPageContext} from 'next';
import dotenv from 'dotenv';

import {getToken} from './token';

dotenv.config();

const uri = process.env.GRAPHQL_ENDPOINT;
const permanantToken = process.env.GRAPHQL_ACCESS_TOKEN;

export default function createApolloClient(
  initialState: NormalizedCacheObject,
  ctx?: NextPageContext,
) {
  const isServer = Boolean(ctx);
  const token = getToken(ctx);

  return new ApolloClient({
    ssrMode: isServer,
    link: new HttpLink({
      uri,
      headers: {
        authorization: `Bearer ${token || permanantToken}`,
      },
    }),
    cache: new InMemoryCache().restore(initialState),
  });
}
