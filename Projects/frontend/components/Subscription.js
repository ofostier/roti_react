import { gql, useQuery, useSubscription } from '@apollo/client';

const ALL_SURVEY_QUERY = gql`
  subscription ALL_SURVEY_QUERY{
    searchTerms: allRotis
    {
      id
    	user {id email}
      subject
      description
      status
      _votesMeta {count}
      votes {
        note
        mood
      }
    }
  }
`;


export default function Subscription() {

  const { data, error, loading } = useQuery(ALL_SURVEY_QUERY, {
    variables: {
      skip: 0,
      first: 100,
    },
  });

  if (loading) return (<p>.... Loading....</p>)
  console.log(data);

  return (
    <div>
      <h2>Subscription part</h2>
      <div>
     {
       data.searchTerms.map((roti) => (
        <p key={roti.id}>{roti.subject}-{roti.status}</p>
      ))
     }   
      </div>
    </div>
  )
}