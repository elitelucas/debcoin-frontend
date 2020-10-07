import React from "react";
import { Row, Col, Button } from "reactstrap";

const profile = () => {
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
              <Button size="sm" className="btn primary-btn btn-default  mt-0">
                <i className="fa fa-pencil pr-2"></i> Edit
              </Button>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col sm="12" md="4" className="mb-3">
              <h4 className="text-dark">Username</h4>
              <p>Ortc</p>
            </Col>
            <Col sm="12" md="4" className="mb-3">
              <h4 className="text-dark">Email</h4>

              <p>otrc80@gmail.com</p>
            </Col>
            <Col sm="12" md="4" className="mb-3">
              <h4 className="text-dark">Mobile Number</h4>

              <p>916-581-0509</p>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
};
export default profile;
