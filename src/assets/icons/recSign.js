import React from "react";

const RecSign = props => (
  <svg
    className={props.className}
    onClick={props.onClick}
    viewBox="0 0 50 50"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="25" cy="25" r="25" />
    <circle cx="25" cy="25" r="25" />
  </svg>
);

export default RecSign;
