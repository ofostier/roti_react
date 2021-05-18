import { ApolloClient, ApolloLink, InMemoryCache, split } from '@apollo/client';
//import {ApolloLink} from 'apollo-link';
import { getMainDefinition } from "@apollo/client/utilities";
//import { WebSocketLink } from "@apollo/link-ws";
import { WebSocketLink } from "@apollo/client/link/ws";
import { onError } from '@apollo/link-error';
import { getDataFromTree } from '@apollo/client/react/ssr';
import { createUploadLink } from 'apollo-upload-client';
import withApollo from 'next-with-apollo';
import { endpoint, endpointWs, prodEndpoint } from '../config';
//import {WebSocketLink} from 'apollo-link-ws';

//import paginationField from './paginationField';

const wsLink = process.browser
  ? new WebSocketLink({
      //uri: `ws://192.168.0.13:9998`, // Can test with your Slash GraphQL endpoint (if you're using Slash GraphQL) 
      uri: `ws://localhost:9998/api/graphql`, // Can test with your Slash GraphQL endpoint (if you're using Slash GraphQL) 
      //uri: process.env.NODE_ENV === 'development' ? endpointWs : prodEndpoint,
      options: {
        reconnect: true,
        timeout: 30000,
        connectionParams: () => {
          return { headers: getHeaders() };
        },
      },
    })
  : null;


function createClient({ headers, initialState }) {
  return new ApolloClient({
    link: ApolloLink.from([
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors)
          graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
          );
        if (networkError)
          console.log(
            `[Network error]: ${networkError}. Backend is unreachable. Is it running?`
          );
      }),

      createUploadLink({
        uri: process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint,
        fetchOptions: {
          credentials: 'include',
        },
        // pass the headers along from this request. This enables SSR with logged in state
        headers,
      }),
      
    ]),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            // TODO: We will add this together!
            //allProducts: paginationField(),
          },
        },
      },
    }).restore(initialState || {}),
  });
}

export default withApollo(createClient, { getDataFromTree });
