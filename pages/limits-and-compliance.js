import React, { useEffect, useState } from "react";
import Head from "next/head";
// import Custom Components
import Header from "./layouts/sections/Header/header";
import FooterSection from "./layouts/sections/Footer/footer";
import "react-light-accordion/demo/css/index.css";
import { Container, Row, Col } from "reactstrap";

const index = () => {
  useEffect(() => {
    document.body.style.setProperty("--primary", "#333D7A");
    document.body.style.setProperty("--secondary", "##FAEBEE");
    document.body.style.setProperty("--light", "#f3f1e8");
    document.body.style.setProperty("--dark", "#9647DB");
  });

  return (
    <div>
      <Head>
        <title>DebCoins </title>
      </Head>
      <Header className="saas2" />

      <section className="saas1 service" id="feature">
        <div className="about-chat" style={{ marginTop: "10rem" }}>
          <Container>
            <Row>
              <Col md="12" className="text-center">
                <div className="title">
                  <div className="main-title">
                    <h2>LIMITS & COMPLIANCE</h2>
                  </div>
                  <hr />
                </div>
              </Col>
              <Col md="12" lg="4">
                <div className={`p-4 shadow-showcase text-center shadow`}>
                  <div
                    style={{
                      backgroundColor: "#5cc9a7",
                      boxShadow: "0 .5rem 1rem rgba(0, 138, 255, .4)",

                      padding: "1rem",
                    }}>
                    <img
                      alt="stay-connected"
                      src="/assets/images/home/sheild_tier_1.png"
                      style={{ maxWidth: "50px" }}
                    />
                    <p className="m-0 f-18 text-center text-white">Tier 1</p>
                  </div>
                  <p className="mt-2">Trade Volume</p>
                  <h5 class="h3 font-weight-bolder mb-1 mt-3">0$ - $499</h5>
                  <br></br>
                  <div
                    class="  text-white rounded-circle"
                    style={{
                      backgroundColor: "#5cc9a7",
                      borderRadius: "50%",
                      display: "inline-flex",
                      width: "3.125rem",
                      height: "3.125rem",
                    }}>
                    <i
                      className="fa fa-mobile"
                      style={{ fontSize: "2rem", padding: "9px 16px" }}></i>
                  </div>
                  <p className="mt-2 mb-0">
                    <i
                      className="fa fa-check  mr-2"
                      style={{ color: "#5cc9a7" }}></i>
                    SMS verification required
                  </p>
                  <p className="mt-2 mb-0">
                    <i
                      className="fa fa-check  mr-2 invisible"
                      style={{ color: "#5cc9a7" }}></i>
                  </p>
                  <p className="mt-2 mb-0">
                    <i
                      className="fa fa-check invisible mr-2"
                      style={{ color: "#5cc9a7" }}></i>
                  </p>
                </div>
              </Col>
              <Col md="12" lg="4">
                <div className={`p-4 shadow-showcase text-center shadow`}>
                  <div
                    style={{
                      backgroundColor: "#ffbe3d",
                      boxShadow: "0 .5rem 1rem rgba(255, 190, 61, .4)",

                      padding: "1rem",
                    }}>
                    <img
                      alt="stay-connected"
                      src="/assets/images/home/sheild_tier_2.png"
                      style={{ maxWidth: "50px" }}
                    />
                    <p className="m-0 f-18 text-center text-white">Tier 2</p>
                  </div>
                  <p className="mt-2">Trade Volume</p>
                  <h5 class="h3 font-weight-bolder mb-1 mt-3">$500 - $1999</h5>
                  <br></br>
                  <div
                    class="  text-white rounded-circle"
                    style={{
                      backgroundColor: "#ffbe3d",
                      borderRadius: "50%",
                      display: "inline-flex",
                      width: "3.125rem",
                      height: "3.125rem",
                    }}>
                    <i
                      className="fa fa-id-card"
                      style={{ fontSize: "20px", padding: "15px 13px" }}></i>
                  </div>
                  <p className="mt-2 mb-0">
                    <i
                      className="fa fa-check  mr-2"
                      style={{ color: "#ffbe3d" }}></i>
                    SMS verification required
                  </p>
                  <p className="mt-2 mb-0">
                    <i
                      className="fa fa-check  mr-2"
                      style={{ color: "#ffbe3d" }}></i>
                    Government issued ID required
                  </p>
                  <p className="mt-2 mb-0 invisible">
                    <i
                      className="fa fa-check  mr-2"
                      style={{ color: "#ffbe3d" }}></i>
                  </p>
                </div>
              </Col>
              <Col md="12" lg="4">
                <div className={`p-4 shadow-showcase text-center shadow`}>
                  <div
                    style={{
                      backgroundColor: "#f25767",
                      boxShadow: "0 .5rem 1rem rgba(242, 87, 103, .4)",

                      padding: "1rem",
                    }}>
                    <img
                      alt="stay-connected"
                      src="/assets/images/home/sheild_tier_3.png"
                      style={{ maxWidth: "50px" }}
                    />
                    <p className="m-0 f-18 text-center text-white">Tier 3</p>
                  </div>
                  <p className="mt-2">Trade Volume</p>
                  <h5 class="h3 font-weight-bolder mb-1 mt-3">$2000+</h5>
                  <br></br>
                  <div
                    class="  text-white rounded-circle"
                    style={{
                      backgroundColor: "#f25767 ",
                      borderRadius: "50%",
                      display: "inline-flex",
                      width: "3.125rem",
                      height: "3.125rem",
                    }}>
                    <i
                      className="fa fa-file"
                      style={{ fontSize: "20px", padding: "15px 15px" }}></i>
                  </div>
                  <p className="mt-2 mb-0">
                    <i
                      className="fa fa-check  mr-2"
                      style={{ color: "#f25767 " }}></i>
                    SMS verification required
                  </p>
                  <p className="mt-2 mb-0">
                    <i
                      className="fa fa-check  mr-2"
                      style={{ color: "#f25767" }}></i>
                    Government issued ID required
                  </p>
                  <p className="mt-2 mb-0">
                    <i
                      className="fa fa-check  mr-2"
                      style={{ color: "#f25767" }}></i>
                    Proof of Address required
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <section
        className="resume services "
        style={{ backgroundColor: "#f3f1e8" }}>
        <Container>
          <Row>
            <Col md="8" className="offset-md-2">
              <div className="title title2">
                <div className="sub-title">
                  <div>
                    <h2 className="text-dark title-text">
                      List of the Supported Documents
                    </h2>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="6" sm="12">
              <div className="service bg-white">
                <div className="img-block">
                  <i className="fa fa-id-card" style={{ fontSize: "60px" }}></i>
                </div>
                <div className="service-feature">
                  <h4 className="feature-text text-dark text-center">
                    Identity Verification
                  </h4>
                  <p>Government-issued Passport.</p>
                  <p>Government-issued Drivers License.</p>
                  <p>Government-issued Identity Card</p>
                </div>
              </div>
            </Col>
            <Col md="6" sm="12">
              <div className="service bg-white">
                <div className="img-block">
                  <i className="fa fa-book" style={{ fontSize: "60px" }}></i>
                </div>
                <div className="service-feature">
                  <h4 className="feature-text text-dark text-center">
                    Address Verification
                  </h4>
                  <p>
                    Utility Bill or Bank Statement, not older than 6 months.
                  </p>
                  <p>Paper versions or electronic versions are allowed</p>
                  <p>No modifications are allowed to the documents</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="saas1 service" id="feature">
        <div className="about-chat mt-5">
          <Container>
            <Row>
              <Col md="12" className="text-center">
                <div className="title">
                  <div className="main-title">
                    <h2>Compliance</h2>
                  </div>
                  <hr />
                </div>
              </Col>
              <Col sm="12" md="6">
                <div className={`p-5 shadow-showcase text-center shadow`}>
                  <img
                    src="/assets/images/saas2/fincen.webp"
                    style={{ width: "60px" }}
                  />
                  <h3>Fincen Registration</h3>
                  <p>
                    Debcoins is a registered Money Transmitter with the
                    Financial Crimes Enforcement Network.
                  </p>
                  <p className="mt-3">MSB Registration #31000163879733</p>
                  <p className="invisible">a</p>
                </div>
              </Col>
              <Col sm="12" md="6">
                <div className={`p-5 shadow-showcase text-center shadow`}>
                  <i
                    className="fa fa-user-circle"
                    style={{ fontSize: "60px" }}></i>
                  <h3>Chief Compliance Officer</h3>
                  <p>
                    Our chief compliance officer may be contacted at this email
                    address:
                  </p>
                  <p className="mt-3">ATTN: CCO</p>
                  <p>
                    <a href="mailto:legal@debcoins.com" target="_self">
                      legal@debcoins.com
                    </a>
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <FooterSection />
    </div>
  );
};

export default index;
