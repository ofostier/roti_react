import styled from 'styled-components';

const BlockInfoStyles = styled.div`
flex: 1;
//font-size: 3.5rem;
//color: var(--lightGrey);
text-align: center;
font-family: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
background-color: var(--lightGrey);
align-items: stretch;
justify-content: center;
align-content: center;
margin: 0rem ;
padding: 1rem;
border: 1px solid var(--grey);
border-radius: 5px;
`;

export default function VoteIsClosed() {

  return (
    <BlockInfoStyles>
      <p> Hey buddy !! It's too late !!</p>
      <p> This ROTI is allready closed</p>
      <p> See you later 😘</p>
    </BlockInfoStyles>
  )
}