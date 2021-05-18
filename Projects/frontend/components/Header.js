import Link from 'next/link';
import styled from 'styled-components';
import { sitename } from '../config';
import Nav from './Nav';

const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  transform: skew(-10deg);
  background: var(--tulipTree);
  a {
    //color: white;
    color: var(--mineShaft);
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
  }
`;

const HeaderStyles = styled.header`
  .bar {
    border-bottom: 5px solid var(--mineShaft, black);
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
  }

  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 5px solid var(--black, black);
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <div className="bar">
        <Logo>
          <Link href="/">{sitename}</Link>
        </Logo>
        <Nav />
      </div>
      <div className="sub-bar">
      🔄 - Search in this block
      </div>
    </HeaderStyles>
  );
}