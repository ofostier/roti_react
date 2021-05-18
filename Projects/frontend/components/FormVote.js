import { useQuery, useMutation, useSubscription } from '@apollo/client';
import gql from 'graphql-tag';
import { ALL_ROTIS_QUERY } from './Rotis';
import Form from './styles/Form';
import useForm from '../lib/useForm';
import DisplayError from './ErrorMessage';
import Rating from '@material-ui/lab/Rating';
import styled from 'styled-components';
import ThxFeedBack from './ThxFeedBack';
import { CURRENT_USER_QUERY } from './User';

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
const CREATE_VOTE_MUTATION = gql`
  mutation CREATE_VOTE_MUTATION(
    # Which variables are getting passed in? And What types are they
    $name: String!
    $email: String
    $note: String
    #$mood: String
    $comment: String
    $roti: ID!
  ) {
    createVote(
      data: {
        name: $name
        email: $email
        comment: $comment
        note: $note
        #mood: $mood
        rotis: {connect: {id:$roti}}
      }
    ) {
      id
      note
      #rotis
    }
  }
`;

export default function FormVote ({ id }) {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    name: '',
    email: '',
    comment: '',
    note: '0',
    mood: '',
  });
  
  const [createVote, { data, loading, error }] = useMutation(
    CREATE_VOTE_MUTATION,
    {
      variables: {
        name: inputs.name,
        email: inputs.email,
        comment: inputs.comment,
        note: inputs.note,
        roti: id,
      },
      //variables: {data:{name:"inputs.name", roti:"607e9fc1b86dba1e97689a32"}},
      //refetchQueries: [{ query: ALL_ROTIS_QUERY }],
      refetchQueries: [{ query: CURRENT_USER_QUERY }],
    }
  );
  const handleSubmit = async (e) => {

    e.preventDefault();
    // Submit the inputfields to the backend:
    const res = await createVote();
    
    clearForm();
    // Go to that product's page!
    // Router.push({
    //   pathname: `/roti/${Roti.id}`,
    // });
  }
  
  //console.log(data);
  if (data) {
    return(<ThxFeedBack id={id}></ThxFeedBack>)
  }
  return (

  <Form
      onSubmit={handleSubmit}
    >
      <DisplayError error={error} />
      
      <h2>Who are you ?</h2>
      <fieldset 
        disabled={loading} 
        aria-busy={loading}
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
            style={{fontSize:40, padding: '20px 0 10px 0',}}
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