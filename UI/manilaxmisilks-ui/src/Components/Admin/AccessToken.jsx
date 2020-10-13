import React, { Component } from "react";
import AdminNavBar from "./AdminNavBar";
import { GetAccessToken } from "../../Services/userService";
import { trackPromise } from "react-promise-tracker";

class AccessToken extends Component {
  state = { data: [] };

  getData = async () => {
    const data = await GetAccessToken();
    this.setState({ data });
  };

  componentDidMount() {
    trackPromise(this.getData());
  }

  render() {
    const accessToken = this.state.data;
    return (
      <React.Fragment>
        <AdminNavBar />
        <div className="container ">
          <div className="card border-secondary mt-5 mb-5 card-style">
            <div className="card-header  card-header-sticky">
              <div className="input-group ">
                <input
                  disabled={true}
                  type="text"
                  className="form-control mt-1"
                  value={accessToken}
                />

                <button
                  type="button"
                  className="login100-form-btn ml-2"
                  onClick={() => {
                    navigator.clipboard.writeText(accessToken);
                  }}
                >
                  Copy
                  <i class="fa fa-clipboard ml-2" aria-hidden="true"></i>
                </button>
              </div>
              <p className="mt-2">
                <small>This token will expire by this sunday.</small>
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AccessToken;
