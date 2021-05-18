import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { useRouter } from 'next/dist/client/router';
import styled from 'styled-components';
import { device } from "../../../components/styles/Device";
import SurveyResultDetail from '../../../components/SurveyResultDetail';
import SurveyResultInfo from '../../../components/SurveyResultInfo';
import BlockResults from "../../../components/styles/BlockResults";
import { useUser } from "../../../components/User";
import { da } from 'date-fns/locale';

const GridStyles = styled.div`
    display: flex;
    flex-direction: column;
    //background-color: var(--lightGrey);
    @media ${device.tablet} {
    
        display: grid;
        grid-template-columns: 370px 1fr; // 200px;
        grid-template-rows: auto 1fr auto;

    }
    grid-gap: 2rem;
    font-family: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    div {
    }
  `;

const SINGLE_ROTI_QUERY = gql`
  query SINGLE_ROTI_QUERY($id: ID!) {
    Roti(where: { id: $id }) {
      subject
      description
      shorturl
      tags
      id
      createdAt
      status
      user {
        id
        name
        email
      }
      votes {
        id
        name
        email
        note
        mood
        comment
      }
      _votesMeta { count }
      
    }
  }
`;

export default function SurveyResultPage() {

  const { query } = useRouter();
  const id = (query.id);

  const { data, loading, error } = useQuery(SINGLE_ROTI_QUERY, {
    variables: {
      id,
    },
  });

  const me = useUser();
  if (!me) return null;

  if (loading ) return <p>Loading...</p>;
  //console.log(data);
  const roti = data.Roti;

  return (
    <GridStyles>
      <BlockResults>
       <SurveyResultInfo me={me} roti={roti}></SurveyResultInfo>
      </BlockResults>
      <SurveyResultDetail roti={roti}></SurveyResultDetail>
    </GridStyles>
  )
}