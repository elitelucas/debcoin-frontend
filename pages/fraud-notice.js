import React, { useEffect, useState } from "react";
import Head from "next/head";
// import Custom Components
import Header from "./layouts/sections/Header/header";
import FooterSection from "./layouts/sections/Footer/footer";
import "react-light-accordion/demo/css/index.css";
import { Container, Row, Col } from "reactstrap";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

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
                          Fraud Notice
                        </span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <hr />
            <Col>
              <h5 className="mb-3">Introduction</h5>
              <p>
                Here at Debcoins, we take pride in providing cryptocurrency in
                exchange for our customers non-reloadable prepaid gift cards. We
                understand that this choice of payment method is popular among
                consumers; our services get you your Bitcoin faster than
                traditional exchanges where you may have to wait up to 7
                business days to get your Bitcoin. Unfortunately, our swift
                service comes with its complications, as there are criminals out
                there right now who defraud millions of dollars from consumers
                per year in gift card scams alone. In an effort to educate our
                customers about these fraudulent gift card scams, here are a few
                steps you may take to stay ahead of the criminals.
              </p>

              <h5 className="mb-3 mt-5">
                Do not give out your personal information to strangers
              </h5>
              <p>
                Criminals will do anything in their power to get in contact with
                you, whether it be via telephone, text, email, live chat, mail,
                or any other type of online communication. The first step of
                preventing this is to never give out your personal information
                as criminals will use it in any way, shape, or form to gain from
                it.
              </p>
              <h5 className="mb-3 mt-5">
                Educate yourself on the common types of scams
              </h5>
              <p>
                Most scams can be avoided with a little research and
                preparation. Here are the most popular ways criminals try to
                defraud you of your money via prepaid gift card scams:
              </p>

              <ul style={{ listStyleType: "disc" }}>
                <li>
                  via
                  <a href="https://www.fbi.gov/scams-and-safety/common-scams-and-crimes/advance-fee-schemes">
                    {" "}
                    Advance Fee Fraud{" "}
                  </a>
                </li>
                <li>
                  via{" "}
                  <a href="https://www.fbi.gov/scams-and-safety/common-scams-and-crimes/investment-fraud">
                    {" "}
                    Investment Fraud{" "}
                  </a>
                </li>
                <li>
                  via{" "}
                  <a href="https://www.fbi.gov/scams-and-safety/common-scams-and-crimes/romance-scams">
                    {" "}
                    Romance Fraud{" "}
                  </a>
                </li>
                <li>
                  via
                  <a href="https://www.consumer.ftc.gov/articles/0086-international-lottery-scams">
                    {" "}
                    Lottery Fraud
                  </a>{" "}
                </li>
                <li>
                  via{" "}
                  <a href="https://www.irs.gov/newsroom/tax-scams-consumer-alerts">
                    {" "}
                    IRS Tax Extortion Fraud{" "}
                  </a>
                </li>
                <li>
                  via
                  <a href="https://www.fbi.gov/scams-and-safety/common-scams-and-crimes/elder-fraud">
                    {" "}
                    Senior Fraud
                  </a>{" "}
                </li>
              </ul>
              <p>
                If you are a victim of a prepaid gift card scam, please contact
                us immediately via our support center. In addition, please
                contact the Federal Trade Commission (FTC) and file a complaint.
              </p>
              <p>
                To file a complaint, visit{" "}
                <a href="https://ftccomplaintassistant.gov/">
                  https://ftccomplaintassistant.gov/
                </a>{" "}
                or you may call their hotline at:{" "}
                <a href="tel:1(877) 20382-4357">1-877-FTC-HELP</a>
              </p>
              <p>
                For updates on other types of potential scams, check out the
                FTC’s “scam alert” website at{" "}
                <a href="https://www.consumer.ftc.gov/scam-alerts">
                  https://www.consumer.ftc.gov/scam-alerts
                </a>
              </p>
              <h5 className="mb-3 mt-5">Additional Resources</h5>
              <p>Internal Revenue Service (IRS)</p>
              <p>Tax Scams &amp; Consumer Alerts:</p>
              <a href="https://www.irs.gov/uac/tax-scams-consumer-alerts ">
                https://www.irs.gov/uac/tax-scams-consumer-alerts{" "}
              </a>
              <p>Federal Trade Commission (FTC)</p>
              <p>10 Things You Can Do to Avoid Fraud:</p>
              <a href="https://www.consumer.ftc.gov/articles/0060-10-things-you-can-do-avoid-fraud ">
                https://www.consumer.ftc.gov/articles/0060-10-things-you-can-do-avoid-fraud{" "}
              </a>
              <p>Federal Bureau of Investigation (FBI)</p>
              <p>Common Scams & Crimes:</p>
              <a href="https://www.fbi.gov/scams-and-safety/common-scams-and-crimes ">
                https://www.fbi.gov/scams-and-safety/common-scams-and-crimes{" "}
              </a>
            </Col>
          </Row>
        </Container>
      </section>
      <FooterSection />
    </div>
  );
};

export default index;
