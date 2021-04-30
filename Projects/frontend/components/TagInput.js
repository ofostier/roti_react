import React from "react";
import styled from 'styled-components';
import { FontAwesomeIcon,  } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import TagsInputStyles from "./styles/TagInputStyles";

const TagsInput = (props) => {
  const [tags, setTags] = React.useState([]);
  const addTags = event => {
    if ((event.key === "Enter" || event.type=== "blur") && event.target.value !== "") {
        //console.log("Add tag");
        setTags([...tags, event.target.value]);

        // TODO: [RR-5] Is it the better to pass state from child to parent ?
        let mytags = {target:[]};
        mytags["target"]["value"] = [...tags, event.target.value];
        mytags["target"]["name"] = props.name;
        props.onChange(mytags);
        /////////////////////////// end TODO

        event.target.value = "";
    }
  };
  const removeTags = index => {
    setTags([...tags.filter(tag => tags.indexOf(tag) !== index)]);
    //console.log(tags);
    let mytags = {target:[]};
        mytags["target"]["value"] = [...tags.filter(tag => tags.indexOf(tag) !== index)]; //[...tags, event.target.value];
        mytags["target"]["name"] = props.name;
        props.onChange(mytags);
  };

  const clearInput = event => {
    console.log(event);
    console.log("should clear iinpuut");
  };
  const Focus = () => {
    console.log("FOCUUUUS");
  }

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
              onKeyUp={event => {
                  addTags(event);
                }
              }
              placeholder="Press enter to add tags"
              ///value={props.value}
              onBlur={event => {
                addTags(event);
                }
              }
              onReset={event => {
                clearInput(event);
              }
            }
          />
      </TagsInputStyles>
  );
};
export default TagsInput;


