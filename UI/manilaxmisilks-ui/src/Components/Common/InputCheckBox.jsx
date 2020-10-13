import React from "react";

const InputCheckBox = ({ name, label, value, onChange }) => {
  return (
    <div className="form-check">
      <input
        type="checkbox"
        checked={value}
        onChange={onChange}
        name={name}
        id={name}
        className="form-check-input"
      />
      <label className="form-check-label" htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

export default InputCheckBox;
