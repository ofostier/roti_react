import { useMutation, useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { serverUrl } from '../config';
import fontawesome from '@fortawesome/fontawesome';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faCoffee, faShareSquare, faUserCircle, faToggleOn, faToggleOff, faTags, faLink, faCopy } from '@fortawesome/free-solid-svg-icons';
import useToggle from '../lib/useToggle';

const ToggleStyle = styled(FontAwesomeIcon)
.attrs({
  size: "2x", //props => props.iconsize || "5x"
  //color: "green"
})
`
.toggle-on {
  color: green;
}
.toggle-off {
  color: var(--red);
}
`;
fontawesome.library.add(faUserCircle, faCoffee, faToggleOff, faToggleOn);

const UPDATE_ROTI_MUTATION = gql`
  mutation UPDATE_ROTI_MUTATION(
    $id: ID!
    $status: String
  ) {
    updateRoti(
      id: $id
      data: { status: $status }
    ) {
      id
      status
    }
  }
`;

export default function ToggleButton(props) {

  const [
    updateRoti,
    { data: updateData, error: updateError, loading: updateLoading },
  ] = useMutation(UPDATE_ROTI_MUTATION);

  const statToggle = (props.state==="AVAILABLE"?"toggle-on":"toggle-off");
  const statToggleStatus = (props.state==="AVAILABLE"?"AVAILABLE":"CLOSED");
  const { toggled, handleClick} = useToggle({
    value: statToggle,
    status: statToggleStatus, //props.state,
  },
  //doSomething(),
  
  );

  if(toggled.value != statToggle) {
    console.log("change detected");
    updateRoti({
      variables: {
        id: props.setId,
        status: toggled.status,
      },
    }).catch(console.error)
  }

  return (
    <>
      <ToggleStyle 
        className={toggled.value}
        onClick={handleClick}
        id={props.id}
        name={props.name}
        icon={toggled.value} size="2x" 
        value = {toggled.value}
        status = {toggled.status}
      />
    </>  
  )

}