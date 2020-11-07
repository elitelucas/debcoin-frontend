import React from "react";
import { Container, Row, Col, FormGroup, Input } from "reactstrap";
const Footer = () => (
  <footer
    className="saas2 footer2"
    id="contact"
    style={{ backgroundColor: "#333D7A" }}>
    <Container className="">
      <Row>
        <Col lg="4" md="6" sm="12">
          <div className="logo-sec">
            <div className="footer-contant">
              <img
                alt=""
                className="img-fluid footer-logo"
                src="/assets/images/home/logo.png"
                style={{ maxWidth: "200px" }}
              />
              <div className="footer-para text-white">
                <p className="text-white">
                  Debcoins is a pending trademark of Debcoins, LLC. Debcoins has
                  no relation to Visa, Mastercard, or American-express branded
                  gift cards. Their respective wordmarks and trademarks belong
                  to them alone.
                </p>
              </div>
            </div>
          </div>
        </Col>

        <Col lg="2" md="6" sm="12">
          <div className="footer-title mobile-title">
            <h3 className="text-white">Pages</h3>
          </div>
          <div className="footer-contant">
            <h5 className="footer-headings">QUICK LINKS</h5>
            <div>
              <ul className="footer-lists">
                <li>
                  <a href="#">Home</a>
                </li>

                <li>
                  <a href="#">Support</a>
                </li>
                <li>
                  <a href="#">Sign Up</a>
                </li>
              </ul>
            </div>
          </div>
        </Col>

        <Col lg="2" md="6" sm="12">
          <div className="footer-title mobile-title">
            <h3 className="text-white">LEGAL</h3>
          </div>
          <div className="footer-contant">
            <h5 className="footer-headings">LEGAL</h5>
            <div>
              <ul className="footer-lists">
                <li>
                  <a href="aml-kyc">AML/KYC</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
                <li>
                  <a href="#">Term of Use</a>
                </li>
                <li>
                  <a href="#">privacy Policy</a>
                </li>
                <li>
                  <a href="#">Limit and Compliance</a>
                </li>
                <li>
                  <a href="/fraud-notice"> Fraud Notice</a>
                </li>
              </ul>
            </div>
          </div>
        </Col>

        <Col lg="4" md="6" sm="12">
          <div className="logo-sec">
            <div className="footer-title mobile-title p-t-0">
              <h3 className="text-white">COMPANY INFO</h3>
            </div>
            <div className="footer-contant">
              <h5 className="footer-headings">COMPANY INFO</h5>
              <div className="footer-para text-white">
                <h6 className="text-white para-address">
                  ABC Street New york City,{" "}
                </h6>
                <h6 className="text-white para-address">NY 10001.</h6>
              </div>
              <ul className="d-d-flex footer-social social">
                <li className="footer-social-list">
                  <a href="#">
                    <i aria-hidden="true" className="fa fa-facebook"></i>
                  </a>
                </li>
                <li className="footer-social-list">
                  <a href="#">
                    <i aria-hidden="true" className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="footer-social-list">
                  <a href="#">
                    <i aria-hidden="true" className="fa fa-google"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
