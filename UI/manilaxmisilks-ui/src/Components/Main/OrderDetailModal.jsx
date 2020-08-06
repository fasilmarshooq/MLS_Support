import React, { Component } from "react";
import PopUpModal from "../Common/PopUpModal";
import OrderDetailModalBody from "./OrderDetailModalBody";

class OrderDetailModal extends Component {
  state = {};

  render() {
    const { showModal, handleModalClose, data } = this.props;
    return (
      <React.Fragment>
        <PopUpModal
          show={showModal}
          onHide={handleModalClose}
          modalHeader="Order & Tracking"
          modalBody={<OrderDetailModalBody data={data} />}
        />
      </React.Fragment>
    );
  }
}

export default OrderDetailModal;
