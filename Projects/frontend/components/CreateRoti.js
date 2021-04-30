import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import Router from 'next/router';
import RandomString from '../lib/randomString';
import useForm from '../lib/useForm';
import DisplayError from './ErrorMessage';
import React from "react";
//import { InputTagsContainer } from 'react-input-tags';

// import { ALL_PRODUCTS_QUERY } from './Products';
import Form from './styles/Form';
import TagsInput from './TagInput';

const shortUrl = RandomString(6);

const CREATE_ROTI_MUTATION = gql`
  mutation CREATE_ROTI_MUTATION(
    # Which variables are getting passed in? And What types are they
    #
    $subject: String!
    $description: String!
    $shorturl: String!
    $tags: String
  ) {
    createRoti(
      data: {
        subject: $subject
        description: $description
        status: "AVAILABLE"
        shorturl: $shorturl
        tags: $tags
      }
    ) {
      id
      description
      subject
    }
  }
`;


export default function CreateRoti() {

  const { inputs, handleChange, clearForm, resetForm } = useForm({
    subject: undefined,
    description: undefined,
    shorturl: shortUrl,
    tags: '',
  });
  const [createRoti, { loading, error, data }] = useMutation(
    CREATE_ROTI_MUTATION,
    {
      variables: inputs,
      //refetchQueries: [{ query: ALL_PRODUCTS_QUERY }],
    }
  );
  
  //console.log(inputs);

  return (

    <Form
      onSubmit={
        
        async (e) => {
          console.log(e);
          e.preventDefault();
          // Submit the inputfields to the backend:
          const res = await createRoti();
          clearForm();
          // Go to that product's page!
          Router.push({
            pathname: `/surveys/results/${res.data.createRoti.id}`,
          });
        }
      }
      onKeyPress={(e) =>{ e.key === 'Enter' && e.preventDefault(); }}
    >
      <DisplayError error={error} />
      <h2>Create New ROTI</h2>
      <fieldset 
        disabled={loading} 
        aria-busy={loading}
      >
        <label htmlFor="subject">
          ROTI Subject
          <input
            required
            type="text"
            maxLength="20" 
            id="subject"
            name="subject"
            placeholder="Roti subject or event name"
            value={inputs.subject}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            required
            id="description"
            name="description"
            placeholder="Description"
            value={inputs.description}
            onChange={handleChange}
          />
        </label>
        </fieldset>
        <fieldset>
          <h2>Options</h2>
          {
          //TODO: [RR-4] Create field input for TAGS
          }
          <label>
            Add Tags
            {/* <TagsInput onChange={getTags}></TagsInput> */}
            <TagsInput 
              name="tags" 
              onChange={handleChange}
              onReset={clearForm}
              //value={inputs.tags}
            >
            </TagsInput>
          </label>
          <label htmlFor="shorturl">
            Short URL (max 20 characters)
            <input
              required
              maxLength="20"            
              id="shorturl"
              name="shorturl"
              placeholder="shorturl"
              value={inputs.shorturl}
              onChange={handleChange}
            />
          </label>
        <button type="submit" >+ Add Roti</button>
      </fieldset>
    </Form>
  );
}
