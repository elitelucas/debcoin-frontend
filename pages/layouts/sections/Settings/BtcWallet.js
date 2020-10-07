import React, { useState } from "react";
import {
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

const BtcWallet = () => {
  const [modal3, setModal3] = useState(false);
  const toggleModal3 = () => setModal3(!modal3);

  const toggleModal4 = () => setModal4(!modal4);

  const [modal4, setModal4] = useState(false);
  return (
    <Row className="mt-3 mb-3">
      <Col sm="12">
        <h4 className="text-dark">BTC Wallet</h4>
        <div className={`p-5  shadow mt-2`}>
          <Row>
            <Col xs="12" md="4" className="shadow-sm mt-2">
              <div class="card-header pl-2 pr-2 ">
                <strong> MYBTC</strong>
                <span className="float-right">
                  <i
                    className="fa fa-trash"
                    style={{
                      color: "#ccc",
                      cursor: "pointer",
                    }}
                    onclick={toggleModal3}></i>
                </span>
              </div>
              <div className="card-body text-center">
                <img
                  alt=""
                  className="img-fluid team"
                  src="/assets/images/home/btc.png"
                />
              </div>
              <div className="card-footer">
                <p style={{ overflowWrap: "anywhere" }}>
                  1FMHNFuts92FnzRxBYvzCgTSfe9Bn2PvMN
                </p>
              </div>
            </Col>
            <Col xs="12" md="4" className="shadow-sm mt-2">
              <div class="card-header pl-2 pr-2 ">
                <strong> MYBTC</strong>
                <span className="float-right">
                  <i
                    className="fa fa-trash"
                    style={{
                      color: "#ccc",
                      cursor: "pointer",
                    }}
                    onClick={toggleModal3}></i>
                </span>
              </div>
              <div className="card-body text-center">
                <img
                  alt=""
                  className="img-fluid team"
                  src="/assets/images/home/btc.png"
                />
              </div>
              <div className="card-footer">
                <p style={{ overflowWrap: "anywhere" }}>
                  1FMHNFuts92FnzRxBYvzCgTSfe9Bn2PvMN
                </p>
              </div>
            </Col>
            <Col
              xs="12"
              md="4"
              className="shadow-sm mt-2  d-flex justify-content-center  align-items-center">
              <i
                className="fa fa-plus"
                style={{
                  fontSize: "3rem",
                  color: "#718096",
                  cursor: "pointer",
                }}
                onClick={toggleModal4}></i>
            </Col>
          </Row>
        </div>
      </Col>
      <Modal isOpen={modal4} toggle={toggleModal4}>
        <ModalHeader toggle={toggleModal4}>Add Wallet</ModalHeader>
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
          <Button color="secondary" onClick={toggleModal4}>
            Close
          </Button>
          <Button color="primary" onClick={toggleModal4}>
            Save Address
          </Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modal3} toggle={toggleModal3}>
        <ModalHeader toggle={toggleModal3}>ID Verification</ModalHeader>
        <ModalBody>
          It will permanently delete wallet MYBTC. Do you want to proceed?
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleModal3}>
            Close
          </Button>
          <Button color="primary" onClick={toggleModal3}>
            Confirm
          </Button>
        </ModalFooter>
      </Modal>
    </Row>
  );
};

export default BtcWallet;
