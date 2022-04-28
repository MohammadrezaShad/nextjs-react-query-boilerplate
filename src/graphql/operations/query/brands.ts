import {gql} from 'graphql-request';

export const BRANDS_QUERY = gql`
  query brands {
    brands {
      items {
        id
        title
        englishTitle
      }
    }
  }
`;
