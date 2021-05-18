import { useLazyQuery, useQuery } from '@apollo/client';
import { useUser } from "./User";
import { useCallback, useState, useEffect } from 'react';
import styled from 'styled-components';
import BlockResults from "./styles/BlockResults";
import DashboardResultBlock from "./DashboardResultBlocks";
import DashboardListBlock from "./DashboardListBlocks";
import { device } from "./styles/Device";
import { getSurvey,FILTER_SURVEY_QUERY, ALL_SURVEY_QUERY} from "./QuerySurvey";
import debounce from 'lodash.debounce';


const GridStyles = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 5rem;
    @media ${device.tablet} {
    
        display: grid;
        grid-template-columns: 450px 1fr; // 200px;
        grid-template-rows: auto 1fr auto;

    }
    grid-gap: 2rem;
    font-family: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    div {
    }
    .menuu {
    }
    .detail {
      //flex: 1;
    }
  `;

const DashboardListStyles = styled.div`
  font-size: 3.5rem;
  color: var(--lightGrey);
  text-align: center;
  font-family: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
  //display: inline-grid;
  //grid-template-columns: repeat(4, auto);
  align-items: stretch;
  justify-content: center;
  align-content: center;
  margin: 0rem ;
  padding: 1rem;
  //border-top: 1px solid var(--lightGrey);
  display: block;
  width: 100%;
  border: 1px solid var(--lightGrey);
  border-radius: 5px;
`;


export default function Dashboard() {

  const me = useUser();
  if (!me) return null;
  //const [search, setSearch] = useState(null);
  //console.log(search);
  //console.log("search");

  const [ItemSearch, setSearch] = useState("");
  
  const [findAllItems, { loadingAll, dataAll, errorAll }] = useLazyQuery(
    ALL_SURVEY_QUERY,
    {
      fetchPolicy: 'no-cache',
      //variables: { searchUserId: me.id } 
    }
  );
  const [findItems, { loading, data, error }] = useLazyQuery(
    FILTER_SURVEY_QUERY,
    {
      fetchPolicy: 'no-cache',
      variables: { 
        skip: 0,
        first: 4,
      } 
    }
  );
  const setFilterSearch = useCallback((inputs) => {

    //const {subjects, item} = inputs;
    //console.log("Subkect: "+subjects);
    //console.log("Item: "+item);
    //console.log(inputs);

    setSearch(ItemSearch);
    console.log("ItemSearch GPx: " +inputs);
    console.log(inputs);
    
    if (!me) return null;
    const findItemsButChill = debounce(findItems, 350);

    //if (subjects==="search"){
      findItems({
        variables: {
          searchTerm: inputs.search,
          searchUserId: me.id,
          //offset: 0,
          first: parseInt(inputs.selectperpage),
        },
      });
    //}
    
  
    // if (ItemSearch==="" || ItemSearch == undefined){
    //   console.log('FIND ALL ITEMS');
    //   findAllItems({
    //     variables: {
    //       searchUserId: me.id
    //     },
    //   });
    // }
    // else {
    //   console.log('FIND FILTERED ITEMS');
    //   findItems({
    //     variables: {
    //       searchTerm: ItemSearch,
    //       searchUserId: me.id
    //     },
    //   });
    // }
    
  }, []);

  // console.log("FILTER DATA: "+data);
  // console.log("ALL DATA: "+dataAll);
  //console.log(search);
  

  //const survey = getSurvey(ItemSearch);
  //console.log(survey);
  
  // const me = useUser();
  // if (!me) return null;

//  findAllItems({
//     variables: {
//       searchUserId: me.id
//     },
//   });


  
  // function handleClick() {
  //   console.log("Double click");
    
  // }

  const survey = data?.searchTerms || [];

  console.log(loading);
  
  
  //setSearch(me);
  return (
    <GridStyles>
      <BlockResults>
        <DashboardResultBlock me={me} callback={setFilterSearch} survey={survey}></DashboardResultBlock>
        {/* <button type='button'
        //onClick={e => search()}
        //onClick={handleClick}
      >PLEASE PLEASE PLEASE</button> */}
      </BlockResults>
      <DashboardListStyles>
        <DashboardListBlock me={me} survey={survey} loading={loading}></DashboardListBlock>
      </DashboardListStyles>
      
    </GridStyles>
  );
}
