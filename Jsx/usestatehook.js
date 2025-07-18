import { useState } from "react";

// so here we need it work when the user click instead of having a static display.
// We use userState hook to make this work .
// first we import it from react and then in the function we remove the vaalue thing as we arent gonna give an input value to the prop in the export function.

function Square() {
  const [value, setValue] = useState(null);
// const[value,setValue] is an std practice and here value ref to the one we pass for the const atp 
// Whereas , setValue is something we use to change the value when an click event occurs
// so we create a new function to handleClick and it will be included in the div as onClick all these are inbuilt func names .

  function handleClick() {
    setValue("X");
  }
  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}

export default function Board() {
  return (
    <>
      <div className="row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
