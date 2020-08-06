import React from "react";

const InputDropDown = ({ enumValues, label, onChange, value, name, error }) => {
  return (
    <div className="for-group">
      <label className="m-1" htmlFor={name}>
        {label}
      </label>

      <select
        onChange={onChange}
        value={value}
        name={name}
        className="custom-select"
        id={name}
      >
        <option value="" />
        {enumValues.map((e) => (
          <option key={e[name]} value={e[name]}>
            {e[name]}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger mt-1 ">{error}</div>}
    </div>
  );
};

export default InputDropDown;
