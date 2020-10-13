import React from "react";
import Joi from "joi-browser";
import MainCatalogNavBar from "../catalog/MainCatalogNavBar";
import Form from "../../Common/Form";
import Buffer from "../../Common/Buffer";
import { PostUser } from "../../../Services/userService";
import { toast } from "react-toastify";

class UserRegistrationForm extends Form {
  state = {
    data: {},
    errors: {},
    submitInprogress: false,
  };

  doSubmit = async () => {
    try {
      this.setState({ submitInprogress: true });
      const response = await PostUser(this.state.data);
      if (response.status === 200) {
        this.props.history.push("/Login");
      } else {
        toast(response.data);
        this.setState({ submitInprogress: false });
      }
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        toast(ex.response.data);
        this.setState({ submitInprogress: false });
      }
    }
  };

  schema = {
    Name: Joi.string().required().label(" Name"),
    MobileNumber: Joi.string().label("Mobile #"),
    Password: Joi.string().required().label("Password"),
    AccessToken: Joi.string().required().label("Access Token"),
  };
  render() {
    return (
      <React.Fragment>
        <Buffer isActive={this.state.submitInprogress} />
        <MainCatalogNavBar />
        <div className="container_ProductEntryForm">
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("Name", "Name", true)}
            {this.renderInput("MobileNumber", "Mobile #")}
            {this.renderInput("Password", "Password", true, "Password")}
            {this.renderInput("AccessToken", "Access Token")}
            <p className="mt-2">
              <small>
                Note: You need a valid token for registration, Dont have one
                please get in touch with our team.
              </small>
            </p>
            {this.renderButton("Submit")}
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default UserRegistrationForm;
