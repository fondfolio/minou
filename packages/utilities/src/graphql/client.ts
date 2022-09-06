import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import {NextPageContext} from 'next';

import {getToken} from './token';

const permanantToken = process.env.NEXT_PUBLIC_GRAPHQL_ACCESS_TOKEN;

export interface CreateApolloClientOptions {
  url: string;
}

export function createApolloClient(
  options: CreateApolloClientOptions,
  initialState: NormalizedCacheObject,
  ctx?: NextPageContext,
) {
  const isServer = Boolean(ctx);
  const token = getToken(ctx);

  return new ApolloClient({
    ssrMode: isServer,
    link: new HttpLink({
      uri: options.url,
      headers: {
        authorization: `Bearer ${token || permanantToken}`,
      },
    }),
    cache: new InMemoryCache().restore(initialState),
  });
}
