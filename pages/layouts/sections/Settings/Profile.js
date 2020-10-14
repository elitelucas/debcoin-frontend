import React, { useContext, useEffect, useState } from "react";
import { Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";


const profile = (props) => {
  const [email,setEmail]=useState(props.email);
  const [phoneNumber,setPhoneNumber]=useState(props.phoneNumber); 
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const showModal=()=>{
    setEmail(props.email);
    setPhoneNumber(props.phoneNumber);
    toggle();
  }


  return (
    <Row className="mt-3 mb-3">
      <Col sm="12">
        <h4 className="text-dark">Profile</h4>
        <div className={`p-5 shadow-showcase text-center shadow mt-2`}>
          <Row>
            <Col xs="12" sm="6" className="text-md-left">
              {" "}
              <img
                alt=""
                className="img-fluid team rounded-circle "
                src="/assets/images/home/user.png"
                style={{ width: "80px" }}
              />
            </Col>
            <Col xs="12" sm="6" className="text-md-right mt-xs-2">
              {" "}
              <Button size="sm" className="btn primary-btn btn-default  mt-0" onClick={showModal}>
                <i className="fa fa-pencil pr-2"></i> Edit
              </Button>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col sm="12" md="4" className="mb-3">
              <h4 className="text-dark">Username</h4>
              <p>{props.username}</p>
            </Col>
            <Col sm="12" md="4" className="mb-3">
              <h4 className="text-dark">Email</h4>

              <p>{props.email}</p>
            </Col>
            <Col sm="12" md="4" className="mb-3">
              <h4 className="text-dark">Mobile Number</h4>

              <p>{props.phoneNumber}</p>
            </Col>
          </Row>
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
                    onChange={(e)=>setPhoneNumber(e.target.value)}
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
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                </div>
                
              </div>
            </form>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={()=>{props.submit(email,phoneNumber);toggle();}}>
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
