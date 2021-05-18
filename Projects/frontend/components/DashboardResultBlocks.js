import { useCallback, useState } from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { da } from 'date-fns/locale';
import DashBoardSurveyFilter from './DashboardSurveyFilter';
import { getSurvey,FILTER_SURVEY_QUERY } from "./QuerySurvey";

const BlockResultStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
  font-size: 4.5rem;
  align-items: stretch;
  justify-content: center;
  align-content: center;
  //border-top: 1px solid var(--pottersClay);
  border-bottom: 1px solid var(--tulipTree);
  text-align: center;
  color: var(--mineShaft);
  //text-shadow: 1px 1px 2px var(--lightGrey);
  //border: 1px solid var(--red);
  label {
    font-size: 1.5rem;
    color: var(--pottersClay);
    //text-shadow: 1px 1px 2px black;
  }
  
`;

const NewRotiButtonStyles = styled.button`
  display: block;
  width: 100%;
  background: var(--tulipTree);
  box-shadow: 1px 1px 2px var(--mineShaft);
  color: white;
  border: 0;
  font-size: 2rem;
  font-weight: 600;
  padding: 1rem 1.5rem;
  margin-top: 10px;
  border-radius: 4px;
  text-shadow: 1px 1px 2px var(--black);
`;

function getCountVotes(data){
  var count = 0;
  data.rotis.map(roti => {
    //console.log(roti._votesMeta.count)
    count += roti._votesMeta.count
  })
  return count;
};

function BlockTest({rotiItem}){
  //console.log(rotiItem);
  return(
  <p>{rotiItem.subject}</p>
  )
};



export default function DashboardResultBlock( {me, callback, survey} ) {

  //const survey = getSurvey();
  //const count = getCougetCountVotesnt(me);
  //console.log(me);
  //console.log(callback);

  // const { data, error, loading } = useQuery(ALL_AGGREGATE_ROTIS_QUERY, {

  // });

  // TODO: [RR-3] Create action on button CREATET ROTI

 

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

      <DashBoardSurveyFilter callback={callback}></DashBoardSurveyFilter>
      {/* {survey.map((survey) => (
            //console.log(survey)
            <BlockTest key={survey.id} rotiItem={survey}></BlockTest>
          ))} */}

    </>
  )
}