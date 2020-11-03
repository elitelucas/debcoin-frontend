import React, { useContext, useEffect, useState } from "react";
import {
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

const profile = (props) => {
  const [email, setEmail] = useState(props.email);
  const [phoneNumber, setPhoneNumber] = useState(props.phoneNumber);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const showModal = () => {
    setEmail(props.email);
    setPhoneNumber(props.phoneNumber);
    toggle();
  };

  return (
    <Row className="mt-3 mb-3">
      <Col sm="12">
        <h4 className="text-dark">Profile</h4>
        <div className={`p-5 shadow-showcase text-center shadow mt-2`}>
          <Row className="mt-3">
            <Col sm="12" md="3" className="mb-3">
              <h4 className="text-dark">Username</h4>
              <p>{props.username}</p>
            </Col>
            <Col sm="12" md="3" className="mb-3">
              <h4 className="text-dark">Email</h4>

              <p>{props.email}</p>
            </Col>
            <Col sm="12" md="3" className="mb-3">
              <h4 className="text-dark">Mobile Number</h4>

              <p>{props.phoneNumber}</p>
            </Col>
            <Col sm="12" md="3" className="mb-3">
              <Button
                size="sm"
                className="btn primary-btn btn-default  mt-0"
                onClick={showModal}>
                <i className="fa fa-pencil pr-2"></i> Edit
              </Button>
            </Col>
          </Row>

          {/* <div
            className="alert alert-success dark fade show text-left"
            role="alert" >
            Profile Updated Successfully.
            <button><i className="fa fa-times pr-2"></i></button>
          </div>
          <div
            className="alert alert-danger dark  fade show text-left"
            role="alert">
            There was an error updating your profile. Please try again.
          </div> */}
        </div>
      </Col>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Change my profile</ModalHeader>
        <ModalBody>
          <div className="typo-content">
            <form>
              <div className="form-row">
                <div className="col-12 mb-3">
                  <label htmlFor="name">Phone Number</label>
                  <input
                    className="form-control"
                    id="name"
                    placeholder="Enter Your Phone number"
                    required=""
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div className="col-12 mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    className="form-control"
                    id="email"
                    placeholder="Email"
                    required=""
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
            </form>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              props.submit(email, phoneNumber);
              toggle();
            }}>
            ok
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </Row>
  );
};
export default profile;
