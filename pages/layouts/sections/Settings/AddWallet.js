import React, { useState } from "react";
import {
  Row,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

const addWallet = (props) => {
  return (
    <Modal isOpen={props.isOpen} toggle={props.toggle}>
      <ModalHeader toggle={props.toggle}>Add Wallet</ModalHeader>
      <ModalBody>
        <div className="typo-content">
          <h4 className="text-dark mb-3">Add Wallet</h4>
          <form>
            <Row>
              <div className="col-sm-12  mb-3">
                <label htmlFor="title">Title *</label>
                <input
                  className="form-control"
                  id="text"
                  placeholder="title"
                  required=""
                  type="text"
                />
              </div>
              <div className="col-sm-12  mb-3">
                <label htmlFor="name">Wallet Address *</label>
                <input
                  className="form-control"
                  placeholder="Wallet Address"
                  required=""
                  type="text"
                />
              </div>
            </Row>
          </form>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={props.toggle}>
          Close
        </Button>
        <Button color="primary" onClick={props.toggle}>
          Save Address
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default addWallet;
