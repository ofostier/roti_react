import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import GlobalStyles from './styles/GlobalStyle';
import Header from './Header';
import Footer from './Footer';

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
  /* display: flex;
  flex-direction: column;
  height: 100%; */
`;


export default function Page({ children }) {

  return (
    <div>
      <GlobalStyles />
      <Header />
      <InnerStyles>{children}</InnerStyles>
      <Footer></Footer>
    </div>
  );
}

Page.propTypes = {
  cool: PropTypes.string,
  children: PropTypes.any,
};
