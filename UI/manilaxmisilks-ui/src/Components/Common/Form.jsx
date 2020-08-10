import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./Input";
import InputDropDown from "./InputDropDown";

class Form extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  state = {
    data: {},
    errors: {},
    formChanged: false,
  };
  focus() {
    this.myRef.current && this.myRef.current.focus();
  }
  componentDidUpdate() {
    !this.state.formChanged && this.focus();
  }

  validate = () => {
    const options = {
      abortEarly: false,
    };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;
    const errors = {};
    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let errors = this.validate();
    errors = errors ? errors : {};
    this.setState({ errors });

    this.doSubmit();
  };
  handleChange = ({ currentTarget }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(currentTarget);
    if (errorMessage) errors[currentTarget.name] = errorMessage;
    else delete errors[currentTarget.name];
    const data = { ...this.state.data };
    data[currentTarget.name] = currentTarget.value;
    const formChanged = true;
    this.setState({ data, errors, formChanged });
  };
  renderButton = (label) => {
    return (
      <button disabled={this.validate()} className="login100-form-btn mt-3">
        {label}
      </button>
    );
  };
  renderInput = (name, label, autoFocus, type = "text") => {
    const { data, errors } = this.state;
    return (
      <Input
        autoFocus={autoFocus && this.myRef}
        value={data[name]}
        type={type}
        label={label}
        name={name}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  };
  renderInputDropDown = (enumValues, name, label) => {
    const { data, errors } = this.state;
    return (
      <InputDropDown
        enumValues={enumValues}
        label={label}
        value={data[name]}
        name={name}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  };
}

export default Form;
