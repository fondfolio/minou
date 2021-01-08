import { ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject} from "@apollo/client";
import {NextPageContext} from 'next'

export default function createApolloClient(initialState: NormalizedCacheObject, ctx?: NextPageContext) {
  const uri = `http://localhost:3000/api/graphql`;
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoid2Vic2l0ZSIsInR5cGUiOiJQRVJNQU5BTlRfQUNDRVNTX1RPS0VOIiwidGltZXN0YW1wIjoxNjEwMTI0ODQzMDMyLCJpYXQiOjE2MTAxMjQ4NDMsImV4cCI6MTY0MTY2MDg0M30.i6pPxeg2olK3wcAEgoFDQwWqeUHR84rpC27V8w6v7vE"

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
