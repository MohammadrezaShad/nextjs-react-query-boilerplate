import {Cookies} from 'react-cookie';
import {GraphQLClient} from 'graphql-request';

import {setHeaders} from '@/src/helpers/set-headers';

const graphQLClient = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHQL_URI as string, {});

const getGraphQLClient = () => {
  const cookies = new Cookies();
  graphQLClient.setHeaders(setHeaders(cookies));

  return graphQLClient;
};

export default getGraphQLClient;
