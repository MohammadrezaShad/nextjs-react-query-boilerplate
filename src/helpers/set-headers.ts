import {Cookies} from 'react-cookie';
import {IncomingMessage} from 'node:http';

import {parseCookies} from '@/src/helpers/parse-cookie';

export const setHeaders = (cookies?: Cookies) => ({
  auth: `Bearer ${cookies?.get('_t')}`,
});
