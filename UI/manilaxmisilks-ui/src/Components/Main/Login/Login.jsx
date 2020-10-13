import React, { Component } from "react";
import { validateLogin, SetUserContext } from "../../../Services/userService";
import { toast } from "react-toastify";
import { trackPromise } from "react-promise-tracker";

class Login extends Component {
  state = {
    data: {},
    result: {},
  };

  handleChange = ({ currentTarget }) => {
    const data = { ...this.state.data };
    data[currentTarget.name] = currentTarget.value;
    this.setState({ data });
  };



  handleLogin = async () => {
    try {
      const { data } = this.state;
      const result = await trackPromise( validateLogin(data.username, data.password));
      SetUserContext(result.Name, result.IsAdmin);
      if (result.IsAdmin) {
        this.props.history.push("/ProductEntry");
      }
       else if (data.username === "LogisticsUser")
        {
      this.props.history.push("/Orders");

      }
      else{
        this.props.history.push("/Products");
      }
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        toast(ex.response.data);
      }
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="limiter">
          <div
            className="container-login100 "
            style={{
              backgroundImage: "url('assets/LandingPage/images/lp1.JPG')",
            }}
          >
            <div className="wrap-login100 p-t-30 p-b-50">
              <span className="login100-form-title p-b-41">User Login</span>
              <form className="login100-form validate-form p-b-33 p-t-5">
                <div className="wrap-input100 ">
                  <input
                    onChange={this.handleChange}
                    className="input100"
                    type="text"
                    name="username"
                    placeholder="Mobile #"
                  />
                  <span
                    className="focus-input100"
                    data-placeholder="&#xe82a;"
                  ></span>
                </div>
                <div className="wrap-input100 ">
                  <input
                    onChange={this.handleChange}
                    className="input100"
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <span
                    className="focus-input100"
                    data-placeholder="&#xe80f;"
                  ></span>
                </div>
                <div className="container-login100-form-btn m-t-32">
                  <button
                    className="login100-form-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      this.handleLogin();
                    }}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
