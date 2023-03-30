import React from "react";

const Button = (props) => {
  return (
    <button
      className="button"
      type={props.type || "button"}
      onClick={props.onClick} /* This is that so it forwards if we put a onClick on it */
    >{props.children}</button>
  );
};

export default Button;
