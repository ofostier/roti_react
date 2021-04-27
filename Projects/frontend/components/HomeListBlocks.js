import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Rating from '@material-ui/lab/Rating';
import Link from 'next/link';
import { perPage } from '../config';
import { da } from 'date-fns/locale';

const BlockListStyles = styled.div`
  //display: grid;
  //grid-template-columns: 1fr;
  //grid-gap: 60px;
  font-size: 1.5rem;
  color: var(--black);
  //align-items: stretch;
  //justify-content: center;
  //align-content: center;
  //border-top: 1px solid var(--lightGrey);
  //text-align: center;
  //border: 1px solid var(--red);
  
  label {
    font-size: 1.5rem;
    color: var(--grey)
  }
  
  ul {
    padding: 0;
    margin: 0;
    display: block;
    width: 100%;
  }
  li {
    padding: 0;
    margin: 0;
  }
`;

const RotiItemStyles = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid var(--lightGrey);
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  margin: 0;
  padding: 0;
  text-align: left;
  
  img {
    margin-right: 1rem;
  }
  h3,
  p {
    margin: 0;
  }
  div {
    text-align: right;
    padding-top: 5px;
  }
  em {
    color: var(--grey);
    font-size: 0.9rem;
    margin-right: 5px;
    margin-top: -15px;
    padding-top: -15px;
  }
`;

function RotiItem({ rotiItem }) {
  //const { roti } = rotiItem;
  //console.log(rotiItem)
  if (!rotiItem) return null;
  console.log(getTotalNotes(rotiItem));
  console.log(rotiItem._votesMeta.count);
  console.log(getTotalNotes(rotiItem) / rotiItem._votesMeta.count);
  return (
    <RotiItemStyles>
      <Link href={`/roti/${rotiItem.id}`}>{rotiItem.subject}</Link>
      {/* <div> VOTES

      </div> */}
      <div>
        <em>({rotiItem._votesMeta.count}  votes)</em>
        <Rating
          style={{fontSize:25}}
          id="note"
          name="note" 
          size="large"
          precision={0.5}
          defaultValue={getTotalNotes(rotiItem) / rotiItem._votesMeta.count}
          readOnly
        ></Rating>
      </div>
    </RotiItemStyles>
  );
}

function getTotalNotes(data){
  var total = 0;
  //console.log(data.votes)
  data.votes.map(vote => {
     //console.log(vote.note);
    //console.log(roti._votesMeta.count)
    total += parseInt(vote.note);
  })
  return total;
}

export default function HomeListBlock( {me} ) {

  //const count = getCougetCountVotesnt(me);
  //console.log(count);

  // const { data, error, loading } = useQuery(ALL_AGGREGATE_ROTIS_QUERY, {

  // });

  return (
    <BlockListStyles>
      <ul>
          {me.rotis.map((roti) => (
            //console.log(roti.id)
            <RotiItem key={roti.id} rotiItem={roti} />
          ))}
      </ul>
    </BlockListStyles>
  )
}