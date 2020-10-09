import React from "react";
import { Container, Row, Col, FormGroup, Input } from "reactstrap";
const url = "/assets/images/saas2/beforeFooter.png";
const HowItWorks = () => (
  <Container className="mb-5 " style={{ marginTop: "7rem" }} id="feature">
    <h3 style={{ color: "black" }}>How it works</h3>
    <Row>
      <Col xs="12" md="4" className="">
        <div className=" p-3 pb-5 shadow" style={{ minHeight: "415px" }}>
          <p
            className="text-left text-bold "
            style={{ fontSize: "22px", fontFamily: "Graphik_Semibold" }}>
            1
          </p>
          <img src="/assets/images/step_1.svg" className="w-100" />
          <p className="pt-3">
            Choose the crypto pair you’d like to exchange. Make sure you are
            okay with the best rate on the market and the 0.25% service fee.
          </p>
        </div>
      </Col>
      <Col xs="12" md="4" className="">
        <div className=" p-3 pb-5 shadow" style={{ minHeight: "415px" }}>
          <p
            className="text-left text-bold "
            style={{ fontSize: "22px", fontFamily: "Graphik_Semibold" }}>
            2
          </p>
          <img src="/assets/images/step_2.svg" className="w-100" />
          <p className="pt-3">
            Confirm the transaction and sign in/sign up with just your email to
            save your transaction history.
          </p>
        </div>
      </Col>
      <Col xs="12" md="4" className="">
        <div className=" p-3 pb-5 shadow" style={{ minHeight: "415px" }}>
          <p
            className="text-left text-bold "
            style={{ fontSize: "22px", fontFamily: "Graphik_Semibold" }}>
            3
          </p>
          <img src="/assets/images/step_3.svg" className="w-100" />
          <p className="pt-3">
            Send the exact amount to the address provided and receive the crypto
            in your wallet within minutes. Debcoins works with a variety of
            trading platforms, and so has found the best offer on the market for
            you.
          </p>
        </div>
      </Col>
    </Row>
  </Container>
);

export default HowItWorks;
