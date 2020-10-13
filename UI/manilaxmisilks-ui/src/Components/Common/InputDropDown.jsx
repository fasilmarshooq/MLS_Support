import React from "react";

const InputDropDown = ({ enumValues, label, onChange, value, name, error }) => {
  return (
    <div className="form-group">
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
          <option key={e[name] || e} value={e[name] || e}>
            {e[name] || e}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger mt-1 ">{error}</div>}
    </div>
  );
};

export default InputDropDown;
