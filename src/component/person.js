import React from "react";
function Person(props) {
  return (
    <div>
      <h1>I'm {props.fullName}</h1>
      <h3>bio: {props.bio} </h3>
      <h3>profession : {props.profession}</h3>
      <h2>{props.counter}</h2>
    </div>
  );
}

export default Person;
