import { gql, useQuery } from '@apollo/client';

const SINGLE_ROTI_URL_QUERY = gql`
  query SINGLE_ROTI_URL_QUERY($shorturl: String!) {
    allRotis(where:{AND: [{shorturl:$shorturl}]})
    {
      subject
        description
        shorturl
        id
        createdAt
        status
        user {
          id
          name
          email
        }
    }
  }
`;

export function useShortUrl( {shorturl} ) {
  const { data } = useQuery(SINGLE_ROTI_URL_QUERY, {
    variables: {
      shorturl,
    },
  });
  return data?.allRotis;
}

export { SINGLE_ROTI_URL_QUERY };
