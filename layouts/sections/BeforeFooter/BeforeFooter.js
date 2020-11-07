import React from "react";
import { Container, Row, Col, FormGroup, Input } from "reactstrap";
const url = "/assets/images/saas2/beforeFooter.svg";
const BeforeFooter = () => (
  <div
    style={{
      backgroundImage: `url(${url})`,
      width: "100%",
      height: "22rem",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      paddingTop: "12rem",
      paddingBottom: "12rem",
    }}>
    <Container>
      <Row>
        <Col md="6" xs="12">
          <div className="beforeFooterHeading">
            <div className="header-text ">
              <h1>Buy or Sell Cryptocurrency in Just a Few Minutes!</h1>
            </div>

            <p className=" text-dark mt-4">
              The best way to exchange crypto and e-money around the world.
            </p>
          </div>
        </Col>
        <Col md="6" xs="12" className="text-center mb-3">
          <a className="btn btn-default primary-btn " href="signup">
            Get Started
          </a>
        </Col>
      </Row>
    </Container>
  </div>
);

export default BeforeFooter;
