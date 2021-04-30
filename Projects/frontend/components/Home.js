import { useUser } from "./User";
import styled from 'styled-components';
import HomeResults from "./styles/HomeResults";
import HomeResultBlock from "./HomeResultBlocks";
import HomeListBlock from "./HomeListBlocks";
import { device } from "./styles/Device";


const GridStyles = styled.div`
    display: flex;
    flex-direction: column;
    @media ${device.tablet} {
    
        display: grid;
        grid-template-columns: 370px 1fr; // 200px;
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
