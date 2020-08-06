import React, { Component } from "react";
import { validateLogin } from "../../Services/adminLoginService";
import { toast } from "react-toastify";

class AdminLogin extends Component {
  state = {
    data: {},
  };

  handleChange = ({ currentTarget }) => {
    const data = { ...this.state.data };
    data[currentTarget.name] = currentTarget.value;
    this.setState({ data });
  };

  handleLogin = () => {
    const data = this.state.data;
    const result = validateLogin(data.username, data.password);
    if (result) {
      this.props.history.push("/Orders");
    } else {
      toast("Please Check your user name or password");
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="limiter">
          <div
            className="container-login100 "
            style={{
              backgroundImage: "url('assets/ordersSelfHelp/images/bg-01.jpg')",
            }}
          >
            <div className="wrap-login100 p-t-30 p-b-50">
              <span className="login100-form-title p-b-41">Admin Login</span>
              <form className="login100-form validate-form p-b-33 p-t-5">
                <div
                  className="wrap-input100 validate-input"
                  data-validate="Enter username"
                >
                  <input
                    onChange={this.handleChange}
                    className="input100"
                    type="text"
                    name="username"
                    placeholder="User Name"
                  />
                  <span
                    className="focus-input100"
                    data-placeholder="&#xe82a;"
                  ></span>
                </div>
                <div
                  className="wrap-input100 validate-input"
                  data-validate="Enter password"
                >
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

export default AdminLogin;
