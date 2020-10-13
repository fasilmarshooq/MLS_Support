import React from "react";
import Form from "../Common/Form";
import Joi from "joi-browser";
import { PostOrder } from "../../Services/ordersService";
import { toast } from "react-toastify";
import Buffer from "../Common/Buffer";

class OrdersForm extends Form {
  state = {
    data: {
      OrderNumber: "",
      TrackingNumber: "",
      Courier: "",
    },
    Couriers: [],
    errors: {},
    currentId: 0,
    bingo: [],
    submitInprogress: false,
  };

  componentDidMount() {
    this.initializeForm();
  }

  initializeForm() {
    const propsData = this.props.data;
    const Couriers = this.props.couriers;
    this.setState({ Couriers });
    if (!propsData) return;
    const data = this.state.data;
    data.Courier = propsData.Courier;
    data.OrderNumber = propsData.OrderNumber;
    data.TrackingNumber = propsData.TrackingNumber;

    this.setState({ data, currentId: propsData.Id ?? 0 });
  }

  doSubmit = async () => {
    try {
      this.setState({ submitInprogress: true });
      const data = this.state.data;

      await PostOrder(
        this.state.currentId,
        data.OrderNumber,
        data.TrackingNumber,
        data.Courier
      );

      this.props.HandleClose();
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        toast(ex.response.data);
        this.setState({ submitInprogress: false });
      }
    }
  };

  schema = {
    OrderNumber: Joi.string().required().label("Order #"),
    TrackingNumber: Joi.string().required().label("Tracking #"),
    Courier: Joi.string().required().label("Courier"),
  };

  render() {
    return (
      <React.Fragment>
        <Buffer isActive={this.state.submitInprogress} isFromModal={true} />
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("OrderNumber", "Order#", true)}
          {this.renderInputDropDown(this.state.Couriers, "Courier", "Courier")}
          {this.renderInput("TrackingNumber", "Tracking#")}
          {this.renderButton("Submit")}
        </form>
      </React.Fragment>
    );
  }
}

export default OrdersForm;
