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

const DashboardSurveyFilterStyles = styled.form`
  /* box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  background: rgba(0, 0, 0, 0.02);
  border: 5px solid (white);
  border-radius: 0.5rem;
  padding: 20px; */
  padding-top: 20px;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;
  label {
    display: block;
    margin-bottom: 1rem;
  }
  input,
  textarea,
  select {
    background-color: white;
    display:flex;
    width: 100%;
    padding: 0.5rem;
    font-size: 1.5rem;
    //border: 1px solid black;
    border-radius: 0.5rem;
    height:3.5rem; //.8rem;
    &:focus {
      outline: 0;
      border-color: var(--red);
    }
  }
  fieldset {
    border: 0;
    padding: 0;

    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      height: 5px;
      content: '';
      display: block;
      background-image: linear-gradient(
        to right,
        var(--tulipTree) 0%,
        var(--pottersClay) 70%,
        var(--mineShaft) 100%
      );
    }
    &[aria-busy='true']::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }
`;

export default DashboardSurveyFilterStyles;
