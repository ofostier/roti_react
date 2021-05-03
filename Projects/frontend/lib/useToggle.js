import { useState, useEffect } from 'react';

export default function useToggle(initial = {}) {
  // create a state object for our inputs
  //console.log(initial);
  const [toggled, setToggle] = useState(initial);
  const initialValues = Object.values(initial).join('');

  // console.log("################## initial");
  //  console.log(initial);
  // // console.log(initialValues);
  // console.log("################## Fin initial");

  useEffect(() => {
    // This function runs when the things we are watching change
    setToggle(initial);
  }, [initialValues]);

  // {
  //   name: 'wes',
  //   description: 'nice shoes',
  //   price: 1000
  // }

  function handleClick(e) {
    //console.log(e.target);
    //console.log(Object.values(e.target)[1]["data-icon"]);
    //let { value, name, type, actif } = e.target;
    let { value, name, type, actif, status} = Object.values(e.target)[1];

    console.log("VALUE: "+value);
    console.log("STATUS: "+status);
    //console.log(Object.values(e.target)[1]);
    //console.log(data-icon);
    //console.log(Object.values(e.target)[1].name);
    console.log("use VALUE :" +value);
    if (type === 'number') {
      value = parseInt(value);
    }
    if (type === 'file') {
      [value] = e.target.files;
    }

    if (value === "toggle-off") {
      value = "toggle-on";
      status = "AVAILABLE";
    }
    else {
      value = "toggle-off";
      status = "CLOSED";
    }

    //setToggle(value==="toggle-off"?"toggle-on":"toggle-off")
    console.log("After use toggled: " + value)

    //console.log(value);
    
    setToggle({
      // copy the existing state
      ...toggled,
      //[name]: value,
      ["actif"] : toggled.actif,
      ["color"] : "red",
      //["icon"] : icon,
      ["value"] : value,
      ["status"] : status,
    });
  }



  // return the things we want to surface from this custom hook
  return {
    toggled,
    handleClick,
  };
}
