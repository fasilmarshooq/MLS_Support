import React from "react";
import Form from "../Common/Form";
import Joi from "joi-browser";
import { PostOrder, GetCouriers } from "../../Services/ordersService";
import { toast } from "react-toastify";

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
  };

  componentDidMount() {
    this.updateCouriers();
    this.updateFormForEdit();
  }
  async updateCouriers() {
    const Couriers = await GetCouriers();
    this.setState({ Couriers });
  }

  updateFormForEdit() {
    const propsData = this.props.data;
    if (!propsData) return;
    const data = this.state.data;
    data.Courier = propsData.Courier;
    data.OrderNumber = propsData.OrderNumber;
    data.TrackingNumber = propsData.TrackingNumber;

    this.setState({ data, currentId: propsData.Id ?? 0 });
  }

  doSubmit = async () => {
    try {
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
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("OrderNumber", "Order#")}
          {this.renderInputDropDown(this.state.Couriers, "Courier", "Courier")}
          {this.renderInput("TrackingNumber", "Tracking#")}
          {this.renderButton("Submit")}
        </form>
      </React.Fragment>
    );
  }
}

export default OrdersForm;
