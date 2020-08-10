import React from "react";
import { Modal, Button } from "react-bootstrap";

const PopUpModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      scrollable
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.header}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.body}</Modal.Body>
      {props.footerButtonLabel && (
        <Modal.Footer>
          <Button onClick={props.handlefooterButtonClick}>
            {props.footerButtonLabel}
          </Button>
        </Modal.Footer>
      )}
    </Modal>
  );
};

export default PopUpModal;
