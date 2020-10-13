import React, { Component } from "react";
import OrderDetailModal from "./OrderDetailModal";
import { GetOrder } from "../../../Services/ordersService";
import "../../../TrackOrder.css";
import { trackPromise } from "react-promise-tracker";
import LandingPagenavBar from "../Landingpage/LandingPageNavBar";

class TrackOrder extends Component {
  state = {
    data: {},
    showModel: false,
    orderNumber: "",
  };

  async getData(orderNumber) {
    const data = await GetOrder(orderNumber);
    this.setState({ data, showModel: true });
  }

  handleSearch = () => {
    const orderNumber = this.state.orderNumber;
    trackPromise(this.getData(orderNumber));
  };

  handlePopUpModalClose = () => {
    this.setState({ showModel: false });
  };
  handleChange = ({ currentTarget }) => {
    const orderNumber = currentTarget.value;
    this.setState({ orderNumber });
  };

  render() {
    return (
      <React.Fragment>
        <LandingPagenavBar />
        <div className="limiter">
          <div
            className="container-login100"
            style={{
              backgroundImage:
                "url('assets/ordersSelfHelp/images/shpbg-1.jpg')",
            }}
          >
            <div className="wrap-login100 p-t-30 p-b-50">
              <span className="login100-form-title p-b-41">
                Self Help Portal
              </span>
              <form className="login100-form validate-form p-b-33 p-t-5">
                <div className="wrap-input100">
                  <input
                    className="input100"
                    type="text"
                    name="OrderNumber"
                    placeholder="Order #"
                    onChange={this.handleChange}
                  />
                  <span
                    className="focus-input100"
                    data-placeholder="&#xe86b;"
                  />
                </div>
                <div className="container-login100-form-btn m-t-32">
                  <button
                    disabled={!this.state.orderNumber}
                    className="login100-form-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      this.handleSearch();
                    }}
                  >
                    Check Status
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <OrderDetailModal
          showModal={this.state.showModel}
          handleModalClose={this.handlePopUpModalClose}
          data={this.state.data}
        />
      </React.Fragment>
    );
  }
}

export default TrackOrder;
