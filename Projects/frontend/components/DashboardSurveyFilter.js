import { useQuery, useMutation, useLazyQuery } from '@apollo/client';
import { useEffect, useCallback, useState } from 'react';
import gql from 'graphql-tag';
import { ALL_ROTIS_QUERY } from './Rotis';
import DashboardSurveyFilterStyles from './styles/DashboardSurveyFilterStyles';
import {device} from './styles/Device';
import useForm from '../lib/useForm';
import DisplayError from './ErrorMessage';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import fontawesome from '@fortawesome/fontawesome';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faCoffee, faSearch, faUserCircle, faGlasses} from '@fortawesome/free-solid-svg-icons';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import ThxFeedBack from './ThxFeedBack';
import { CURRENT_USER_QUERY } from './User';
import Search from './Search';


const GridSelectFilterStyles = styled.div`
    //display: flex;
    //flex-direction: column;
    display: grid;
  grid-template-columns: 1fr;
  
  //grid-gap: 1rem;
  font-size: 4.5rem;
  align-items: stretch;
  justify-content: center;
  align-content: center;
    @media ${device.tablet} {
    
        display: grid;
        grid-template-columns: 30% 1fr ; // 200px;
        grid-template-rows: auto 1fr auto;
        grid-gap: 1rem;

    }
    font-family: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    div {
    }
    .menuu {
    }
    .detail {
      //flex: 1;
    }
  `;
const BlockInput = styled.div`
  background-color: white;
  border-radius: 5px;
  //font-size: 3.5rem;
  color: var(--mineShaft);
  text-align: center;
  //display: inline-grid;
  //grid-template-columns: repeat(4, auto);
  align-items: stretch;
  justify-content: center;
  align-content: center;
  margin-top: 1rem ;
  //padding-right: 1rem;
  border-top: 1px solid var(--lightGrey);
  display: flex;
  input, select{
    //height: 2rem;
    display: flex;
    border: 0;
    color: var(--mineShaft);
    //background-color: yellow;
    //width:80%;
    ::placeholder{
      color: var(--grey);;
    }
  } 
  *, *:before, *:after  {
      //content: "XXXXX";
      display:flex;
      padding-right: 5px;
      align-items:center;
      color: var(--alto)
    }
  div{
      display:flex;
      align-items:center;
    }
`;


export default function DashBoardSurveyFilter ({ id, callback }) {
  const [ItemSearch, setSearch] = useState('');
  const [inputs, setInputs] = useState({
    search: "",
    selectperdate: "startDate",
    selectperpage: "10"
  }
  );
  //console.log(callback);
  //console.log(ItemSearch);
  //console.log(search);

  

  function handleSearch(subjects, item) {

    // console.log(inputs);
    // console.log(subjects);
    // console.log(item);
    //let val = {filter: {subjects, item}}
    //let val = {subjects, item};
    //e.preventDefault();
    //console.log('Le lien a été cliqué.');
    //console.log(val);
    //callback(ItemSearch);
    callback(inputs);
  }

  function handlePages(e) {
    //console.log(e.target.value);
    setInputs({
      // copy the existing state
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  function handleTest(){
    //console.log(inputs);
  }

  useEffect(() => {
    // This function runs when the things we are watching change
    //setInputs(initial);
    handleSearch();
  }, [inputs]);


  return (
  <DashboardSurveyFilterStyles>
      <fieldset>
        {/* <Search></Search> */}
        <BlockInput>``
          <input
          type="text"
          id="search"
          name="search"
          placeholder="Search..."
          autocomplete="off"
          //onChange={(evt) => { handleSearch(evt.target.name, evt.target.value); }}
          onChange={handlePages}
          
          //value={ItemSearch}
          ></input>
          <div className='icon'>
            <FontAwesomeIcon icon={faSearch} size='2x' />
          </div>
        </BlockInput>
        <GridSelectFilterStyles>
        <BlockInput>
          <select
          type="selectperpage"
          id="selectperpage"
          name="selectperpage"
          placeholder="select..."
          onChange={handlePages}
          >
            <option value="all">all results</option>
            <option value="3">3 per page</option>
            <option value="5">5 per page</option>
            <option value="10">10 per page</option>
            <option value="20">20 per page</option>
            <option value="30">30 per page</option>
            <option value="40">40 per page</option>
            <option value="50">50 per page</option>
            <option value="100">100 per page</option>
          </select>
          {/* <div>
            <FontAwesomeIcon icon={faSearch} size='sm' />
          </div> */}
        </BlockInput>
        <BlockInput>
          <select
            type="select"
            id="selectperdate"
            name="selectperdate"
            placeholder="order by date"
            //onChange={(evt) => { handleSearch(evt.target.name, evt.target.value); }}
            onChange={handlePages}
          >
            <option value="subject_ASC">Trier par sujet croisant</option>
            <option value="subject_DESC">Trier par sujet décroissant</option>
            <option value="endDate">Trier par date de fin</option>
            <option value="createdAt">Trier par date de création</option>
            <option value="averageRating">Trier par score décroissant</option>
            <option value="averageRatingReverse">Trier par score croissant</option>
            <option value="ratersCount">Trier par votants</option>
            <option value="participantsCount">Trier par invités</option>
            <option value="topic">Trier par titre</option>
          </select>
          {/* <div>
            <FontAwesomeIcon icon={faSearch} size='sm' />
          </div> */}
        </BlockInput>
        </GridSelectFilterStyles>
        {/* <button type="submit">+ Add Roti</button> */}
      </fieldset>
      {/* <button type='button'
        //onClick={e => search()}
        onClick={handleClick}
      >CLICK HERE PLEASE</button> */}
      
    </DashboardSurveyFilterStyles>
  )
}