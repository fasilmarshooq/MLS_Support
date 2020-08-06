import React, { Component } from "react";
import PopUpModal from "./../Common/PopUpModal";
import OrdersForm from "./OrdersForm";

class OrdersModal extends Component {
  state = {};
  render() {
    const { showModal, handleModalClose, data } = this.props;
    return (
      <React.Fragment>
        <PopUpModal
          show={showModal}
          onHide={handleModalClose}
          modalHeader="Order"
          modalBody={<OrdersForm HandleClose={handleModalClose} data={data} />}
        />
      </React.Fragment>
    );
  }
}

export default OrdersModal;
