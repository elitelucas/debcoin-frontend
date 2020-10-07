import React, { useEffect, useState } from "react";
import Head from "next/head";
// import Custom Components
import Header from "./layouts/sections/Header/header";
import FooterSection from "./layouts/sections/Footer/footer";
import "react-light-accordion/demo/css/index.css";
import { Container, Row, Col } from "reactstrap";
import { Progress } from "reactstrap";

const index = () => {
  useEffect(() => {
    document.body.style.setProperty("--primary", "#333D7A");
    document.body.style.setProperty("--secondary", "##FAEBEE");
    document.body.style.setProperty("--light", "#f3f1e8");
    document.body.style.setProperty("--dark", "#9647DB");
  });
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <div>
      <Head>
        <title>DebCoins </title>
      </Head>
      <Header className="saas2" />
      <section className="saas1 ">
        <Container style={{ marginTop: "8rem" }}>
          <div className={`p-5 shadow-showcase  shadow mt-2`}>
            <Row>
              <Col
                md="3"
                xs="6"
                className="shadow-sm"
                style={{ alignSelf: "center" }}>
                <h4>Limit Left</h4>
                <p>$5000.00</p>
              </Col>
              <Col style={{ alignSelf: "center", textAlign: "right" }}>
                {" "}
                <Progress color="success" value="25" />
                <small>
                  You have traded $0.00 of your $5000.00 weekly limit.
                </small>
              </Col>
            </Row>{" "}
          </div>
          <Row>
            <Col sm="12">
              <div className="mb-5 mt-5">
                <div className="d-flex align-items-center mb-4">
                  <div className="d-flex">
                    <div className="pr-3">
                      <span className="h5 mb-0">
                        <i className="fa fa-history" />
                      </span>
                    </div>
                    <div className>
                      <h3 className="h5 mb-0">Orders History</h3>
                    </div>
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table table-cards align-items-center">
                    <thead>
                      <tr>
                        <th scope="col" style={{ minWidth: "240px" }}>
                          Order #{" "}
                        </th>
                        <th scope="col">Giftcard Amount </th>
                        <th scope="col">BTC Value</th>
                        <th scope="col">USD Value </th>
                        <th scope="col">Wallet</th>
                        <th scope="col">Order Date </th>
                        <th scope="col">Status </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">
                          <a href="order">e236ee19</a>
                        </th>
                        <td>$100.00 </td>
                        <td>0.00711881 </td>
                        <td>$82.64 </td>
                        <td>MYBTC </td>
                        <td>08-25-2020 12:06 UTC </td>
                        <td>
                          <span className="badge badge-danger">Cancelled</span>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <a href="order">e236ee19</a>
                        </th>
                        <td>$100.00 </td>
                        <td>0.00711881 </td>
                        <td>$82.64 </td>
                        <td>MYBTC </td>
                        <td>08-25-2020 12:06 UTC </td>
                        <td>
                          <span className="badge badge-danger">Cancelled</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <FooterSection />
    </div>
  );
};

export default index;
