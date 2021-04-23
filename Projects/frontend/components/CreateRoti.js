import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import Router from 'next/router';
import useForm from '../lib/useForm';
import DisplayError from './ErrorMessage';
// import { ALL_PRODUCTS_QUERY } from './Products';
import Form from './styles/Form';

const CREATE_ROTI_MUTATION = gql`
  mutation CREATE_ROTI_MUTATION(
    # Which variables are getting passed in? And What types are they
    $name: String!
    $description: String!
  ) {
    createRoti(
      data: {
        name: $name
        description: $description
        status: "AVAILABLE"
      }
    ) {
      id
      description
      name
    }
  }
`;

export default function CreateRoti() {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    name: '',
    description: '',
  });
  const [createRoti, { loading, error, data }] = useMutation(
    CREATE_ROTI_MUTATION,
    {
      variables: inputs,
      //refetchQueries: [{ query: ALL_PRODUCTS_QUERY }],
    }
  );
  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();
        // Submit the inputfields to the backend:
        const res = await createRoti();
        clearForm();
        // Go to that product's page!
        // Router.push({
        //   pathname: `/product/${res.data.createProduct.id}`,
        // });
      }}
    >
      {/* <DisplayError error={error} /> */}
      <h2>Create New ROTI</h2>
      <fieldset 
        // disabled={loading} 
        // aria-busy={loading}
      >
        <label htmlFor="name">
          ROTI Name
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Roti Name"
            value={inputs.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            id="description"
            name="description"
            placeholder="Description"
            value={inputs.description}
            onChange={handleChange}
          />
        </label>

        <button type="submit">+ Add Roti</button>
      </fieldset>
    </Form>
  );
}
