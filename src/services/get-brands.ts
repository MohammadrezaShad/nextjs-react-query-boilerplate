import graphQLClient from '@/src/graphql/graphql-client';
import {BRANDS_QUERY} from '@/src/graphql/operations/query/brands';

// eslint-disable-next-line no-return-await
export const getBrands = async () => graphQLClient().request(BRANDS_QUERY);
