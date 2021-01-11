import {NextPageContext} from 'next';
import Cookies from 'js-cookie';

export const TOKEN_NAME = 'MINOU_AUTH_TOKEN';

export function getToken(ctx?: NextPageContext) {
  if (ctx) {
    const jwtCookie = ctx.req?.headers.cookie
      ?.split(';')
      .find((cook) => cook.trim().startsWith(TOKEN_NAME));

    return jwtCookie
      ? jwtCookie.split('=')[1]
      : ctx.req?.headers.authorization?.replace('Bearer ', '');
  } else {
    return Cookies.get(TOKEN_NAME);
  }
}
