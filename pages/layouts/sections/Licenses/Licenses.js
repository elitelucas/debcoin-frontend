import React from "react";
import { Container, Row, Col, FormGroup, Input } from "reactstrap";
const url = "/assets/images/saas2/beforeFooter.png";
const HowItWorks = () => (
  <div style={{ backgroundColor: "#e1ebec" }} className="mb-5 p-5">
    <h2 className=" text-center" style={{ color: "black" }}>
      Licenses and Eligibility
    </h2>
    <Container>
      <Row>
        <Col xs="12" md="6">
          <div className=" p-3 pb-5 text-center">
            <div>
              <img
                src="/assets/images/saas2/usa.webp"
                style={{ width: "130px" }}
              />
            </div>
            <h6 className="mt-3">
              Global coverage of 180+ countries and unprecedented 48 US states
            </h6>
            <p className="pt-3">
              Buy & sell cryptocurrencies no matter where you are
            </p>
          </div>
        </Col>
        <Col xs="12" md="6">
          <div className=" p-3 pb-5 text-center">
            <div>
              <img
                src="/assets/images/saas2/fincen.webp"
                style={{ width: "82px" }}
              />
            </div>
            <h6 className="mt-3">
              FinCEN Department of the Treasury, United States of America
            </h6>
            <p className="pt-3">
              Money Service Business Registration: 31000166366948
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default HowItWorks;
