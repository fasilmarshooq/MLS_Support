import React, { Component } from "react";
import PopUpModal from "./../Common/PopUpModal";
import OrdersForm from "./OrdersForm";

class OrdersModal extends Component {
  state = {};
  render() {
    const { showModal, handleModalClose, data, couriers } = this.props;
    return (
      <React.Fragment>
        <PopUpModal
          show={showModal}
          onHide={handleModalClose}
          header="Order"
          body={
            <OrdersForm
              HandleClose={handleModalClose}
              data={data}
              couriers={couriers}
            />
          }
        />
      </React.Fragment>
    );
  }
}

export default OrdersModal;
