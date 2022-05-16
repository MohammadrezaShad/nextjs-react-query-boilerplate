import React from 'react';
import {Cookies, CookiesProvider} from 'react-cookie';
import {ReactQueryDevtools} from 'react-query/devtools';
import {canUseDom} from '@plaza-ui/utils/lib/canUseDom';
import type {AppContext} from 'next/app';
import {appWithTranslation} from 'next-i18next';

import {ThemeProvider} from '@/providers/theme/theme-provider';
import {DeviceTypes} from '@/src/constants/device-types';
import graphQLClient from '@/src/graphql/graphql-client';
import {parseCookies} from '@/src/helpers/parse-cookie';
import {setHeaders} from '@/src/helpers/set-headers';
import {useGetLayout} from '@/src/hooks/use-get-layout';
import DeviceTypeProvider from '@/src/providers/device-type/device-type-provider';
import QueryClientProvider from '@/src/providers/query-client/query-client-provider';
import type {AppExtendedProps} from '@/types/main';
import CheckUserAgent from '@/utils/check-user-agent';

const App = ({Component, pageProps, deviceType, cookies}: AppExtendedProps) => {
  const getLayout = useGetLayout({Component, deviceType});

  return (
    <QueryClientProvider dehydratedState={pageProps.dehydratedState}>
      <CookiesProvider cookies={canUseDom ? undefined : cookies}>
        <ThemeProvider>
          {getLayout(
            <DeviceTypeProvider deviceType={deviceType}>
              <Component deviceType={deviceType} {...pageProps} />
            </DeviceTypeProvider>,
            deviceType,
          )}
        </ThemeProvider>
      </CookiesProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

App.getInitialProps = async ({Component, ctx}: AppContext) => {
  const pageProps = (await Component?.getInitialProps?.(ctx)) || {};
  const cookies = new Cookies(await parseCookies(ctx.req));
  const userAgent = ctx?.req?.headers['user-agent'];
  const deviceType = userAgent ? CheckUserAgent(userAgent) : DeviceTypes.DESKTOP;
  cookies && graphQLClient().setHeaders(setHeaders(cookies));

  return {
    pageProps,
    cookies,
    deviceType,
  };
};

export default appWithTranslation(App);
