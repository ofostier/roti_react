import { gql, useQuery } from '@apollo/client';

const CURRENT_SURVEY_QUERY = gql`
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
          tags
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

export function useSurvey() {
  const { data } = useQuery(CURRENT_SURVEY_QUERY);
  return data?.authenticatedItem;
}

export { CURRENT_SURVEY_QUERY };
