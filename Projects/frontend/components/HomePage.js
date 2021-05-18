import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import GlobalStyles from './styles/GlobalStyle';
import Header from './Header';
//import fontawesome from '@fortawesome/fontawesome';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

//import Button from '@material-ui/core/Button';
//import { makeStyles } from '@material-ui/core/styles';

const HomeImageBlock = styled.div`

background-image: url('static/media/we-want-your-feedback.jpg');
background-size: cover; //100%; //cover;
//background-attachment: fixed;
background-repeat: no-repeat;
background-position: top;
width: 100%;
height: 750px;
@media (max-width: 700px) {
  //font-size: 10px;
  //padding: 0 10px;
  height: 250px; 
}
`;
const BlockButton = styled.div`
  justify-content: center;
  text-align:center;
  padding: 2rem;
  .css-button {
    font-family: Arial;
    color: #FFFFFF;
    font-size: 26px;
    border-radius: 8px;
    border: 1px #3866a3 solid;
    background: linear-gradient(180deg, #FF4A4A 5%, #C7043E 100%);
    text-shadow: 1px 1px 1px #528ecc;
    box-shadow: inset 1px 1px 2px 0px #bbdaf7;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
  }
  .css-button:hover {
    background: linear-gradient(180deg, #C7043E 5%, #FF4A4A 100%);
  }
  .css-button-icon {
    padding: 12px 10px;
    border-left: 1px solid rgba(255, 255, 255, 0.16);
    box-shadow: rgba(0, 0, 0, 0.14) 1px 0px 0px inset;
  }
  .css-button-icon i {
    position: relative;
    font-size: 26px;
    left: 0px;
  }
  .css-button-text {
    padding: 12px 29px;
  }
`;

export default function HomePage() {

  return (
    <div>
      <GlobalStyles/>
      <Header />
      <HomeImageBlock></HomeImageBlock>
      <BlockButton className='buttonBlock'>
        <a className="css-button" href='/create'>
          <span className="css-button-text">Start your Survey</span>
          <span className="css-button-icon"><i className="fa fa-gear" aria-hidden="true"><FontAwesomeIcon icon={faSignOutAlt} size="lg"></FontAwesomeIcon></i></span>
        </a>
      </BlockButton>
      {/* <InnerStyles>{children}</InnerStyles> */}
    </div>
  )
}