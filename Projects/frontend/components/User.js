import { gql, useQuery } from '@apollo/client';

const CURRENT_USER_QUERY = gql`
  query {
    authenticatedItem {
      ... on User {
        id
        email
        name
        firstname
        phone
        rotis {
          id
          subject
          description
          votes {
            id
            name
            note
          }
          _votesMeta{count}
        }
        _rotisMeta {count}
        
      }
    }
  }
`;

export function useUser() {
  const { data } = useQuery(CURRENT_USER_QUERY);
  return data?.authenticatedItem;
}

export { CURRENT_USER_QUERY };
