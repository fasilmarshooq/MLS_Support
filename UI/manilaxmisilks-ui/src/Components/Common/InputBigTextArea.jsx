import React from "react";

const InputBigTextArea = ({ name, label, value, onChange, error }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <textarea
        value={value || ""}
        onChange={onChange}
        name={name}
        id={name}
        className="form-control"
        rows="2"
      ></textarea>
      {error && <div className="alert alert-danger mt-1 ">{error}</div>}
    </div>
  );
};

export default InputBigTextArea;
