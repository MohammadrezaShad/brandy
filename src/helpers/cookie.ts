/* eslint-disable no-plusplus */
import {set} from 'js-cookie';

export async function getCookie(cookiename: string, cookiestring: string) {
  const name = `${cookiename}=`;
  const decodedCookie = decodeURIComponent(cookiestring);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}
export function setCookie(cookiename: string, cookievalue: string) {
  set(cookiename, cookievalue, {expires: 365});
}
