import React, { useEffect, useState } from "react";
import Head from "next/head";
// import Custom Components
import Header from "../layouts/sections/Header/header";
import FooterSection from "../layouts/sections/Footer/footer";
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
      <section className="saas1 faq mt-0">
        <Container style={{ marginTop: "10rem" }}>
          <Row className="tos_row">
            <Col md="12">
              <div className="faq-block">
                <div>
                  <div className="title title2 title-inner">
                    <div className="main-title">
                      <h2 className="  text-center main-text m-b-0">
                        <span className="font-secondary text-uppercase">
                          AML/KYC
                        </span>
                      </h2>
                      <p>Last updated: Aug 29th, 2020</p>
                      <p>
                        AML refers to "Anti-Money Laundering". KYC refers to
                        "Know Your Customer".
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <hr />
            <Col>
              <h5 className="mb-3">Introduction</h5>
              <p>
                We strive to protect our Users from fraudulent and scam
                activities in the crypto assets sphere. It is possible, that
                certain crypto assets are used for scam or any other criminal
                activity, as defined by law. In order to prevent this, it is
                necessary to take measures to ensure customer verification and
                security of financial transactions. One of the best measures is
                AML/KYC procedure, which allows us to confirm, that you are a
                law-abiding individual or corporation.
              </p>
              <p>
                Changelly service has a risk scoring system that is able to spot
                suspicious activity. If a transaction is flagged by the system,
                it is put on hold and the User is asked to pass AML & KYС
                verification. For the reasons of security, we are not able to
                disclose specific criteria of our system, however, it has proven
                to be very effective against money launderers, scammers etc.
              </p>
              <p>
                Changelly service reserves the right to apply the AML/KYC
                procedure to certain Users, addresses and particular
                transactions of crypto assets. Application of the AML/KYC
                procedure is based on Changelly service internal policies and
                aimed at preventing and mitigating possible risks of Changelly
                service being involved in money laundering as well as any other
                illegal activities.
              </p>
              <p>
                Please be informed, that Changelly service reserves the right to
                appoint Third-party service provider in order to fulfil AML/KYC
                procedure on behalf of Changelly service. While processing your
                information, such service provider completely complies our
                Privacy Policy in respect of your personal information.
              </p>
              <p>
                Changelly service can provide the information collected during
                AML/KYC procedure to the competent authorities upon legitimate
                request.
              </p>
              <p>
                Changelly service will not enter a business arrangement with
                individual or entity suspected of or directly involved in money
                laundering, or in which the funds have been the source of
                illegal activity.
              </p>

              <h5 className="mb-3 mt-5">AML and KYC Procedure</h5>
              <p>
                AML/KYC procedure might be applied in respect to those crypto
                assets payins, which are determined by our automated risk
                prevention system as suspicious. In these cases, Changelly
                service will contact the User by email registered with account.
              </p>
              <p>
                AML/KYC procedure includes confirming the identity of Users by
                means of:
              </p>
              <ul style={{ listStyleType: "decimal", padding: "30px" }}>
                <li>
                  A high-quality photo of their ID (passport or driving license)
                  valid in their country;
                </li>
                <li>Proof of the origin of funds.</li>
                <li>Any other applicable documentation.</li>
              </ul>
              <p>
                Upon successful completion of the AML & KYC verification, the
                transaction that was put on hold will be processed.
              </p>
              <p>
                In response to Changelly request for a user’s documentation,
                Changelly service takes all possible measures to recognize the
                deceptive documentation or other false information and reserves
                the right to investigate certain Users or transactions which
                have been detected to be risky or suspicious.
              </p>
              <p>
                If there is any reasonable doubt that any information provided
                by User is wrong, untruthful, outdated or incomplete, Changelly
                service has the right to send User a notice to demand
                corrections or terminate all of the Services to the User.
              </p>
              <h5 className="mb-3 mt-5">Disclaimer</h5>
              <p>
                Changelly service keeps working on quick and transparent
                procedures updates that may be delivered to our Users via email
                and other means as well as on our website Changelly.com.
              </p>
              <h5 className="mb-3 mt-5">Contact Us</h5>
              <p>
                If you have any questions about AML/KYC procedure, please
                contact us via{" "}
                <a href="mailto:legal@debcoins.com">legal@debcoins.com.</a>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <FooterSection />
    </div>
  );
};

export default index;
