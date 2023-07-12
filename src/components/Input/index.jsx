import React from "react";

const Input = ({ className, ...res }) => {
  return (
    <input
      className={`app-input ${className ? className : ""}`}
      autoComplete="off"
      {...res}
    />
  );
};

export default Input;
