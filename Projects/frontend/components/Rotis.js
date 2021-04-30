import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import DisplayError from './ErrorMessage';
import { perPage } from '../config';
import Roti from './Roti';



export const ALL_ROTIS_QUERY = gql`
  query ALL_ROTIS_QUERY($skip: Int = 0, $first: Int) {
    allRotis(first: $first, skip: $skip) {
      id
      subject
      description
      shorturl
      datecreated
      votes {
        name
        email
        note
        mood
        comment
      }
    }
  }
`;

const RotisListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
`;

export default function Rotis({ page }) {
  const { data, error, loading } = useQuery(ALL_ROTIS_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;

  // TODO: [RR-2] Add the average of Notes and Moods valuees
  // if (data?.allRotis) {
    // const mydata = []
    // const VoteItems = data?.allRotis.map((allRotis, index) => {
      
    //   console.log(allRotis["id"]);
    //   mydata[allRotis["id"]] = {}
    //   //mydata.push(allRotis["id"]);
    //   //mydata.concat(allRotis["id"]);
    //   //mydata[allRotis["id"]].concat({"toto": "0"});
    //   console.log(allRotis["votes"]);
    //   var sumnote = 0;
    //   var summood = 0;
    //   var countvote = 0;
    //   allRotis["votes"].forEach(element => {
    //     countvote += 1
    //     sumnote += parseInt(element["note"]);
    //     summood += parseInt(element["mood"]);
    //   });
    //   mydata[allRotis["id"]] = {note: sumnote, mood: summood, count: countvote}
    // });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <RotisListStyles>
        {data.allRotis.map((roti) => (
          <Roti key={roti.id} roti={roti} />
        ))}
      </RotisListStyles>
    </div>
  );
}
