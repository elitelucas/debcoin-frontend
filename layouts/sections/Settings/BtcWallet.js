import { remove } from "nprogress";
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
import AddWallet from "./AddWallet";

const BtcWallet = (props) => {
  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);
  const [removeKey, setRemoveKey] = useState("");
  const toggleModal3 = () => setModal3(!modal3);
  const toggleModal4 = () => setModal4(!modal4);
  const remove = (key) => () => {
    setRemoveKey(key);
    setModal3(true);
  };

  return (
    <Row className="mt-3 mb-3">
      <Col sm="12">
        <h4 className="text-dark">BTC Wallet</h4>
        <div className={`p-5  shadow mt-2`}>
          <Row>
            {props.wallet && props.wallet.length > 0
              ? props.wallet.map((ele, key) => (
                  <Col xs="12" md="4" className="shadow-sm mt-2" key={key}>
                    <div className="card-header pl-2 pr-2 ">
                      <strong> {ele.title}</strong>
                      <span className="float-right" onClick={remove(key)}>
                        <i
                          className="fa fa-trash"
                          style={{
                            color: "#ccc",
                            cursor: "pointer",
                          }}></i>
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
                      <p style={{ overflowWrap: "anywhere" }}>{ele.address}</p>
                    </div>
                  </Col>
                ))
              : ""}

            <Col
              xs="12"
              md="4"
              className="shadow-sm mt-2 mb-4  d-flex justify-content-center  align-items-center">
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
          {/* <div className="alert alert-success dark fade show" role="alert">
            Wallet Added Successfully..
          </div>
          <div className="alert alert-danger dark  fade show" role="alert">
            There was an error adding your wallet. Please try again.
          </div> */}
        </div>
      </Col>
      <AddWallet
        submit={props.submit}
        toggle={() => {
          toggleModal4();
        }}
        isOpen={modal4}
      />
      {/* <Modal isOpen={modal4} toggle={toggleModal4}>
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
      </Modal> */}

      <Modal isOpen={modal3} toggle={toggleModal3}>
        <ModalHeader toggle={toggleModal3}>ID Verification</ModalHeader>
        <ModalBody>
          It will permanently delete wallet{" "}
          {props.wallet && props.wallet.length > 0 && removeKey !== ""
            ? props.wallet[removeKey].title
            : ""}
          . Do you want to proceed?
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleModal3}>
            Close
          </Button>
          <Button
            color="primary"
            onClick={() => {
              props.remove(removeKey);
              toggleModal3();
            }}>
            Confirm
          </Button>
        </ModalFooter>
      </Modal>
    </Row>
  );
};

export default BtcWallet;
