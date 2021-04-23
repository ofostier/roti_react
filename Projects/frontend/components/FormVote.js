
import Form from './styles/Form';
import DisplayError from './ErrorMessage';
import Rating from '@material-ui/lab/Rating';
import styled from 'styled-components';

const BlockRating = styled.div`
  font-size: 3.5rem;
  color: var(--lightGrey);
  text-align: center;
  //display: inline-grid;
  //grid-template-columns: repeat(4, auto);
  align-items: stretch;
  justify-content: center;
  align-content: center;
  margin: 0rem ;
  //padding-right: 1rem;
  border-top: 1px solid var(--lightGrey);
`;

export default function FormVote ({handleSubmit, handleChange, error, loadingcreated, inputs}) {

  return (
  <Form
      onSubmit={handleSubmit}
    >
      <DisplayError error={error} />
      
      <h2>Who are you ?</h2>
      <fieldset 
        disabled={loadingcreated} 
        aria-busy={loadingcreated}
      >
        <label htmlFor="name">
          Your name
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={inputs.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="email">
          Your Email
          <input
            id="email"
            name="email"
            placeholder="Your Email Address"
            value={inputs.email}
            onChange={handleChange}
          />
        </label>
        
        {/* <button type="submit">+ Add Roti</button> */}
      </fieldset>
      <h2>Your Evaluation</h2>
      <fieldset>
        <BlockRating>
          <Rating 
            id="note"
            name="note" 
            size="large"
            defaultValue={0}
            //value={3}
            onChange={handleChange}
            //disabled 
          />
        </BlockRating>
        <label htmlFor="comment">
          Your comment
          <textarea
            id="comment"
            name="comment"
            placeholder="Your comment here"
            value={inputs.comment}
            onChange={handleChange}
          />
        </label>
        <button type="submit">+ Send my Feedback</button>
      </fieldset>
    </Form>
  )
}