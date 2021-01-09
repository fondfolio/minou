import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import {NextPageContext} from 'next';
import dotenv from 'dotenv';

dotenv.config();
const uri = process.env.GRAPHQL_ENDPOINT;
const token = process.env.GRAPHQL_ACCESS_TOKEN;

export default function createApolloClient(
  initialState: NormalizedCacheObject,
  ctx?: NextPageContext,
) {
  return new ApolloClient({
    ssrMode: Boolean(ctx),
    link: new HttpLink({
      uri,
      headers: {
        authorization: `Bearer ${token}`,
      },
    }),
    cache: new InMemoryCache().restore(initialState),
  });
}
