import React from "react";
import styled from 'styled-components';
import { FontAwesomeIcon,  } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import TagsInputStyles from "./styles/TagInputStyles";

const TagsInputStyles2 = styled.div`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  //min-height: auto;
  width: auto;
  padding: 3px 8px;
  border: 1px solid var(--black);
  border-radius: 4px;
  &:focus-within {
    border: 1px solid #0052cc;
  }
  input {
    flex: 1;
    border: none;
    //height: 46px;
    font-size: 1.5rem;
    //padding: 16px 0 0 0;
    &:focus {
      outline: transparent;
    }
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: auto; //8px 0 0 0;
  }
  .tag{
    width: auto;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--black);
    padding: 10px 5px 10px 8px;
    font-size: 1.2rem;
    font-weight: lighter;
    list-style: none;
    border-radius: 6px;
    border: 1px solid var(--grey);
    //margin: 0 8px 8px 0;
    margin-right: 5px;
    background: var(--lightGrey);
  }
  .tagButton{
    align-items: center;
    justify-content: center;
    vertical-align:baseline;
    padding-left: 10px;
    //margin: 0 8px 8px 0;
  }

`;

const TagsInput = () => {
  const [tags, setTags] = React.useState([]);
  const addTags = event => {
    if (event.key === "Enter" && event.target.value !== "") {
        setTags([...tags, event.target.value]);
        event.target.value = "";
    }
  };
  const removeTags = index => {
    setTags([...tags.filter(tag => tags.indexOf(tag) !== index)]);
  };

  return (
      <TagsInputStyles>
          <ul>
              {tags.map((tag, index) => (
                  <li className="tag" key={index}>
                      <span className="tagTitle">{tag}</span>
                      <i 
                        className="tagButton"
                        onClick={() => removeTags(index)} 
                      >
                        <FontAwesomeIcon icon={faTimesCircle} size="sm" /> 
                      </i>
                  </li>
              ))}
          </ul>
          <input
              type="text"
              onKeyUp={event => addTags(event) && e.preventDefault()}
              //onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
              placeholder="Press enter to add tags"
          />
      </TagsInputStyles>
  );
};
export default TagsInput;


