import React from 'react'
import Link from 'next/link';
import styled from 'styled-components';
import { serverUrl } from '../config';
import { FontAwesomeIcon,  } from '@fortawesome/react-fontawesome'
import { faShareSquare, faUserCircle, faToggleOn, faTags, faLink, faCopy } from '@fortawesome/free-solid-svg-icons'


const BlockInfoStyles = styled.div`
  flex: 1;
  //font-size: 3.5rem;
  //color: var(--lightGrey);
  text-align: center;
  font-family: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  //align-items: stretch;
  //justify-content: center;
  //align-content: center;
  margin: 0rem ;
  padding: 1rem;
  border: 1px solid var(--lightGrey);
  border-radius: 5px;
`;
const BlockListSection = styled.div`
  display: grid;  
  grid-template-columns: 50px 2fr; // 200px;
  grid-template-rows: auto 1fr auto;
  //display: block;
  //width: 100%;
  padding: 10px;
  text-align:left;
  vertical-align: baseline;
  color: var(--black);
  border-bottom: 1px solid var(--lightGrey);

`;

const BlockListSectionLabelName = styled.div`
  //display: block;
  //width: 100%;
  //padding: 5px;
  font-size: 2rem;
  text-align:left;
  vertical-align: baseline;
  color: var(--black);
  text-transform: uppercase;
  p {
    margin: 0;
    padding: 0;
    font-size: 1rem;
    color: var(--grey);
    text-transform: capitalize;
  }
`;
const BlockListSectionLabel = styled.div`
  //display: block;
  //width: 100%;
  padding: 5px;
  font-size: 1.2rem;
  text-align:left;
  margin: 0;
  padding: 0;
  //vertical-align: baseline;
  color: var(--black);
  p {
    margin: 0;
    padding: 0;
    font-size: 1rem;
    color: var(--grey);
    text-transform: capitalize;
  }
  em {
    background-color: var(--lightGrey);
    //box-shadow: 0 0 5px 3px rgba(0, 0, 255, 0.05);
    box-shadow: 2px 2px 7px var(--grey);
    color: var(--black);
    font-size: 1rem;
    padding:0.5rem 1rem;
    margin-right: 5px;
    margin-bottom: 5px;
    border-radius: 4px;
    display: inline-block;
    border: 1px solid var(--grey);
  }
`;
const TagStyles = styled.button`
  
    background-color: var(--lightGrey);
    //box-shadow: 0 0 5px 3px rgba(0, 0, 255, 0.05);
    box-shadow: 1px 1px 4px var(--grey);
    color: var(--black);
    font-size: 1rem;
    padding:0.5rem 1rem;
    margin-right: 5px;
    margin-bottom: 5px;
    border-radius: 4px;
    display: inline-block;
    border: 1px solid var(--grey);
    :hover {
      color:white;
      background-color: var(--grey)
    }
`;

const LinkStyles = styled.div`
  border-bottom: 1px solid var(--lightGrey);
  text-align: left;
  display: grid;
  grid-template-columns: 90% 1fr;
  align-items: stretch;
  justify-content: left;
  align-content: left;
  vertical-align: baseline;
  padding: 1rem;
  //margin: 2rem 0;
  border: 1px solid var(--lightGrey);
  border-radius: 5px;
  /* & > * {
    margin: 0;
    //padding: 15px 30px;
    border-right: 1px solid var(--lightGrey);
    &:last-child {
      border-right: 0;
    }
  } */
  a[aria-disabled='true'] {
    display: inline-block;
    padding-top: 1rem;
    color: grey;
    pointer-events: none;
    height:100%;
  }
  span {
    margin: auto 0;
    text-align: left;
    //width: max-content;
    //height: max-content;
}
`;

function copyUrl(){
  console.log("copied");
}

export default function SurveyResultInfo( {me, roti} ) {
  //console.log(me);
  //console.log(roti);
  console.log(roti.tags);
  const tags = (roti.tags!= null && roti.tags.length>0)?roti.tags.split(','):[];

  return (
    <BlockInfoStyles>
      <BlockListSection>
        <FontAwesomeIcon icon={faUserCircle} size='2x' /> 
        <BlockListSectionLabelName>{me.name}<p>My compagnie</p></BlockListSectionLabelName>
      </BlockListSection>
      <BlockListSection>
        <FontAwesomeIcon icon={faShareSquare} size="2x" /> 
        <BlockListSectionLabel>Shared document<p>(None)</p></BlockListSectionLabel>
      </BlockListSection>
      <BlockListSection>
        <FontAwesomeIcon icon={faToggleOn} size="2x" /> 
        <BlockListSectionLabel>Status<p>{roti.status}</p></BlockListSectionLabel>
      </BlockListSection>
      <BlockListSection>
        <FontAwesomeIcon icon={faTags} size="2x" /> 
        <BlockListSectionLabel>Tags
          <p>
            {
              tags.map((value, key) => (
                <TagStyles key={key}>{value}</TagStyles>
              ))
            }
          </p>
        </BlockListSectionLabel>
      </BlockListSection>
      <h2>Share your Roti</h2>
      <BlockListSection>
        <FontAwesomeIcon icon={faLink} size="2x" /> 
        <BlockListSectionLabel>Link
          <LinkStyles>
          <span>{serverUrl}/{roti.shorturl}</span>
          <FontAwesomeIcon onClick={() => {navigator.clipboard.writeText(roti.shorturl)}} icon={faCopy} size="2x" />
          
          </LinkStyles>
        </BlockListSectionLabel>
      </BlockListSection>
    </BlockInfoStyles>
  )
}
