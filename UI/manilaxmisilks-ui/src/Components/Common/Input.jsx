import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Input = ({ name, label, type, value, onChange, error, autoFocus }) => {
  return (
    <div className="form-group">
      <label className="m-1" htmlFor={name}>
        {label}
      </label>
      <input
        value={value || ""}
        onChange={onChange}
        name={name}
        id={name}
        type={type}
        className="form-control"
        ref={autoFocus}
      />
      {error && <div className="alert alert-danger mt-1 ">{error}</div>}
    </div>
  );
};

export default Input;
