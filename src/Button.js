import React from "react";

const Button = props => (
  <button id={props.styleId} onClick={props.clicked}>
    {props.children}
  </button>
);

export default Button;
