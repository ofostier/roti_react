//import react, {useState} from "react";
//import { useQuery } from '@apollo/client';
//import gql from 'graphql-tag';
//import { useUser } from './User';
import { useUser } from "./User";
//import { motion } from "framer-motion"
import styled from 'styled-components';
//import Home from './styles/HomeResults'; 
import HomeResults from "./styles/HomeResults";
import HomeResultBlock from "./HomeResultBlocks";
import HomeListBlock from "./HomeListBlocks";


const GridStyles = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(370px, 1fr));
    //grid-template-columns: repeat(3, minmax(300px, 1fr));
    //grid-template-columns: repeat(auto-fit, minmax(200px, 8fr));
    //grid-template-columns: repeat(auto-fit,minmax(2fr 8fr));
    //grid-template-columns: repeat(4, 1fr);
    //grid-template-columns: 30% 1fr 70% 2fr;
   
    grid-gap: 2rem;
    //border: 1px solid var(--red);
    font-family: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
  `;

const HomeListStyles = styled.div`
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


export default function Home() {

  const me = useUser();
  if (!me) return null;
  
  return (
    <GridStyles>
      <HomeResults>
        <HomeResultBlock me={me}></HomeResultBlock>
      </HomeResults>
      <HomeListStyles>
        <HomeListBlock me={me}></HomeListBlock>
      </HomeListStyles>
    </GridStyles>
  );
}
