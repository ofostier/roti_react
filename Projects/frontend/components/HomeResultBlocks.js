import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { da } from 'date-fns/locale';

const BlockResultStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
  font-size: 4.5rem;
  align-items: stretch;
  justify-content: center;
  align-content: center;
  //border-top: 1px solid var(--lightGrey);
  text-align: center;
  //border: 1px solid var(--red);
  label {
    font-size: 1.5rem;
    color: var(--grey)
  }
  
`;

const NewRotiButtonStyles = styled.button`
  display: block;
  width: 100%;
  background: black;
  color: white;
  border: 0;
  font-size: 2rem;
  font-weight: 600;
  padding: 1rem 1.5rem;
  margin-top: 10px;
  border-radius: 4px;
`;

function getCountVotes(data){
  var count = 0;
  data.rotis.map(roti => {
    //console.log(roti._votesMeta.count)
    count += roti._votesMeta.count
  })
  return count;
}

export default function HomeResultBlock( {me} ) {

  //const count = getCougetCountVotesnt(me);
  //console.log(count);

  // const { data, error, loading } = useQuery(ALL_AGGREGATE_ROTIS_QUERY, {

  // });

  return (
    <>
      <BlockResultStyles>
        <div> {me._rotisMeta.count} 
          <label>SURVEYS</label>
        </div>
        <div> 0 
          <label>RECURENT</label>
        </div>
        <div> {getCountVotes(me)} 
          <label>PLAYERS</label>
        </div>
      </BlockResultStyles>
      <NewRotiButtonStyles>Create New ROTI</NewRotiButtonStyles>
      
    </>
  )
}