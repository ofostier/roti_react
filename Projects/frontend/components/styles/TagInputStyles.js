import styled from 'styled-components';


const TagsInputStyles = styled.div`
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
    //font-size: 1.5rem;
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
  .tag-title {
    margin-top: 5px;
  }
  .tagButton{
    align-items: center;
    justify-content: center;
    vertical-align:baseline;
    padding-left: 10px;
    //margin: 0 8px 8px 0;
  }
`;

export default TagsInputStyles;