import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  from {
    background-position: 0 0;
    /* rotate: 0; */
  }

  to {
    background-position: 100% 100%;
    /* rotate: 360deg; */
  }
`;

const HomeResults = styled.div`


  //background-color:#EDAB37;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  
  //background: rgba(0, 0, 0, 0.02);
  background-color:var(--alto); //#EDAB37;
  border: 2px solid var(--grey);
  border-radius: 5px;
  padding: 20px;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;
  margin-bottom: 10px;
  height:fit-content;
  label {
    //@font-family: 
    display: block;
    margin-bottom: 1rem;
  }
`;

export default HomeResults;
