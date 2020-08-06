import React from "react";

const Input = ({ name, label, type, value, onChange, error }) => {
  return (
    <div className="for-group">
      <label className="m-1" htmlFor={name}>
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        name={name}
        id={name}
        type={type}
        className="form-control"
      />
      {error && <div className="alert alert-danger mt-1 ">{error}</div>}
    </div>
  );
};

export default Input;
