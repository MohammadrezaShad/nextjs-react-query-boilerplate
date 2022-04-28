import {GraphQLClient} from 'graphql-request';

const graphQLClient = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHQL_URI, {});

export default graphQLClient;
