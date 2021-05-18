import { useQuery, useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import styled from 'styled-components';
import ItemStyles from './styles/ItemStyles';
import Title from './styles/Title';
import DisplayError from './ErrorMessage';
import {formatDate} from '../lib/formatDate';
import Rating from '@material-ui/lab/Rating';
import FormVote from './FormVote';
import ThxFeedBack from './ThxFeedBack';
import { useShortUrl } from './ShortUrl';
import VoteIsClosed from './VoteIsClosed';

//TODO: [RR-7] Change grid for VoteRoti for RERSPONSIVE capacity
const RotiStyles = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  max-width: var(--maxWidth);
  justify-content: center;
  align-items: top;
  gap: 2rem;
  padding-bottom: 10rem;
  img {
    width: 100%;
    object-fit: contain;
  };
`;
const RotiIntroStyles = styled.div`
  border-bottom: 1px solid var(--lightGrey);
  padding: 0px;
  margin: 0px;
  line-height:1.5;
  p {
    color: var(--grey);
    //border: 1px solid var(--lightGrey);
    padding: 0px;
    margin: 0px 0px 20px 0px;
  }
`;
const StatusStyle = styled.p`
  line-height:1.5;
  p {
    color: var(--grey);
    border: 1px solid var(--lightGrey);
  }
`;
const RulesButtonStyles = styled.button`
  display: block;
  width: 100%;
  background-color: var(--lightGray);
  color: var(--black);
  border: 1px solid var(--black);
  line-height:2;
  border-radius: 3px;
  outline:none;
`;
const DateStyles = styled.div`
  font-size: 1rem;
  color: var(--grey);
  text-align: right;
  //display: inline-grid;
  //grid-template-columns: repeat(4, auto);
  //align-items: stretch;
  justify-content: center;
  align-content: center;
  margin: 0rem ;
  padding-right: 1rem;
  border-top: 1px solid var(--lightGrey);
`;
const BlockRating = styled.div`
  font-size: 3.5rem;
  color: var(--lightGrey);
  text-align: center;
  //display: inline-grid;
  //grid-template-columns: repeat(4, auto);
  align-items: stretch;
  justify-content: center;
  align-content: center;
  margin: 0rem ;
  //padding-right: 1rem;
  border-top: 1px solid var(--lightGrey);
`;

const SINGLE_ROTI_QUERY = gql`
  query SINGLE_ROTI_QUERY($shorturl: String!) {
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

export default function VoteRoti ({ shorturl }) {
  //console.log(shorturl);
  const url = useShortUrl(shorturl);

  const { data, loading, error } = useQuery(SINGLE_ROTI_QUERY, {
    variables: {
      shorturl,
    },
  });
  // if (error) return <DisplayError error={error} />;

  if (loading ) return <p>Loading...</p>;
  const Roti = data.allRotis[0];

  function Status () {
    if(Roti.status == "AVAILABLE") {
      return (
        <StatusStyle>🟢 &nbsp; Vote is OPEN</StatusStyle>
      )
    }
    return <StatusStyle>🔴 &nbsp; Vote is CLOSED</StatusStyle>
  }

  function UseFormVote (datacreated) {
    // Check If vote is allreeady closed
    if (Roti.status != "AVAILABLE"){
      return (
        <VoteIsClosed />
      )
    }
    if (!datacreated) {
      
      return (
        <FormVote id={Roti.id}></FormVote>
      )
    }
    return (<ThxFeedBack></ThxFeedBack>)
  }

  //TODO: [RR-8] Change 'ROTI's RULES BUTTON to be used correctly
  return (
    <RotiStyles>
      <Head>
        {/* <title>ROTI | {Roti.shorturl}</title> */}
      </Head>
      <div>
        
        <RotiIntroStyles>
          {(Roti.user.name).toUpperCase()}
          <p>Need your feedback &gt;&gt;</p>
        </RotiIntroStyles>
        <Title>{Roti.subject}</Title>
        <p>{Roti.description}</p>
        <DateStyles>Created at : {formatDate(Roti.createdAt, "DD MMMM YYYY à HH:mm")}</DateStyles>
        {Status()}
        <div>
          <RulesButtonStyles>ROTI'S RULES</RulesButtonStyles>
        </div>
      </div>
      {
        UseFormVote()
      }
      
      
    </RotiStyles>
  );
}
