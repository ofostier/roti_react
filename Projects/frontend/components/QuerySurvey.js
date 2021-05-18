import { gql, useQuery } from '@apollo/client';

const WhereClause = '';

const FILTER_SURVEY_QUERY = gql`
  query FILTER_SURVEY_QUERY($searchTerm: String, $searchUserId: ID!, $skip: Int = 0, $first: Int = 2, 
  #sort: 'createdAt:desc' #[sortBy] = createdAt_ASC
  ) {
    searchTerms: allRotis(
      where: {
        user:{id: $searchUserId}
        OR: [
          { subject_contains_i: $searchTerm }
          { description_contains_i: $searchTerm }
          
        ]
      }
      sortBy: createdAt_ASC
      skip: $skip
      first: $first
      #sortBy: {fields: [subjects], order: DESC}
      #filter: {subject:{subject_contains_i:{$searchTerm}}}
      #filters: [ { field: "subject", contains: "Do" } ]
      ) {
      id
    	user {id email}
      subject
      description
      tags
      status
      datecreated
      _votesMeta {count}
      votes {
        note
        mood
      }
    }
  }
`;
const ALL_SURVEY_QUERY = gql`
  query ALL_SURVEY_QUERY($searchUserId: ID!) {
    searchTerms: allRotis
    (
      where: {
        user:{id: $searchUserId}
      }
    ) 
    {
      id
    	user {id email}
      subject
      description
      _votesMeta {count}
      votes {
        note
        mood
      }
    }
  }
`;


export function getFilteredSurvey() {
  const { data } = useQuery(FILTER_SURVEY_QUERY);
  return data?.authenticatedItem;
}
export function getAllSurvey() {
  const { data } = useQuery(ALL_SURVEY_QUERY);
  return data?.authenticatedItem;
}

export { FILTER_SURVEY_QUERY, ALL_SURVEY_QUERY };
