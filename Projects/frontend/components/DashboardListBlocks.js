import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Rating from '@material-ui/lab/Rating';
import Link from 'next/link';
import { perPage } from '../config';
import { da } from 'date-fns/locale';
import Title from './styles/Title';
import Moment from 'moment';
import moment from 'moment';

const BlockListStyles = styled.div`
  //display: grid;
  //grid-template-columns: 1fr;
  grid-gap: 60px;
  font-size: 1.5rem;
  color: var(--black);
  padding: 10px;
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
  //text-align: left;
  
  img {
    margin-right: 1rem;
  }
  h3,
  p {
    margin: 0;
  }
  /* div {
    //text-align: left;
    padding-top: 5px;
    width:100%;
  } */
  em {
    color: var(--grey);
    font-size: 0.9rem;
    margin-right: 5px;
    //margin-top: -15px;
    //padding-top: -15px;
    vertical-align: text-top;
  }
  link {
    vertical-align: bottom;
  }
`;
const BlockRatingStyles = styled.div`
  text-align: right;
  padding-top: 1rem;

`;
const BlockInfoStyles = styled.div`
  text-align: left;
  padding-top: 1rem;

`;
const TagStyles = styled.button`
  
    background-color: var(--lightGrey);
    //box-shadow: 0 0 5px 3px rgba(0, 0, 255, 0.05);
    box-shadow: 1px 1px 4px var(--grey);
    color: var(--mineShaft);
    font-size: 1rem;
    padding:0.5rem 1rem;
    margin-right: 5px;
    margin-bottom: 5px;
    border-radius: 4px;
    display: inline-block;
    border: 1px solid var(--grey);
    :hover {
      color: var(--mineShaft);
      background-color: var(--tulipTree)
    }
`;
function toDate(date, format, lg='en-gb') {

  moment.locale(lg);
  return Moment(date).format(format);
}

function RotiItem({ rotiItem, lg, }) {
  //const { roti } = rotiItem;
  //console.log(rotiItem)
  if (!rotiItem) return null;
  const tags = (rotiItem.tags!= null && rotiItem.tags.length>0)?rotiItem.tags.split(','):[];

  return (
    <RotiItemStyles>
      <BlockInfoStyles>
        <Title><Link href={`/surveys/results/${rotiItem.id}`}>{rotiItem.subject}</Link></Title>
        <em className="InfoDate">{toDate(rotiItem.datecreated, 'LLLL', lg)}
        {
          (rotiItem.status ==="AVAILABLE" ? " - 🔼" : " - 🔒❤")
        }
        </em>
        <div>
        {
              tags.map((value, key) => (
                <TagStyles key={key}>{value}</TagStyles>
              ))
        }
        </div>
      </BlockInfoStyles>
      {/* <div> VOTES

      </div> */}
      <BlockRatingStyles>
        <em>({rotiItem._votesMeta.count}  votes)</em>
        <Rating
          style={{fontSize:25}}
          id="note"
          name="note" 
          size="large"
          precision={0.5}
          defaultValue={rotiItem._votesMeta.count>0?getTotalNotes(rotiItem) / rotiItem._votesMeta.count:0}
          readOnly
        ></Rating>
      </BlockRatingStyles>
    </RotiItemStyles>
  );
}

function getTotalNotes(data){
  var total = 0;
  data.votes.map(vote => {
    total += parseInt(vote.note);
  })
  return total;
}

export default function DashboardListBlock( {me, survey, loading} ) {

  //console.log(count);
  //console.log(me);

  if (loading) return <p>Loading...</p>;

  if (me.rotis.length == 0) {
    return(
      <BlockListStyles>
        <p>Hey !! you don't have any ROTI yet!</p>
        <p>Start to create one !</p>
      </BlockListStyles>
    )
  }
  if (survey.length == 0) {
    
    survey = me.rotis;

  }


  return (
    <BlockListStyles>
      <ul>
          {/* {me.rotis.map((roti) => ( */}
          {survey.map((roti) => (
            //console.log(roti.id)
            <RotiItem key={roti.id} lg={me.language} rotiItem={roti} />
          ))}
      </ul>
    </BlockListStyles>
  )
}