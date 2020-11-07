import React, { useState, useCallback } from "react";
import StartYourOrder from "./StartYourOrder";
import VerifySms from "./VerifySms";
import SelectWallet from "./selectWallet";
import UploadImages from "./uploadImages";
import GiftCardInformation from "./GiftCardInformation";

import Lottie from "react-lottie";
import animationData from "../../../public/assets/animation/animation.json";
import {
  Collapse,
  CardBody,
  Card,
  CardHeader,
  Label,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
} from "reactstrap";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const AccordionElementSection = () => {
  const [isFirstOpen, setFirstOpen] = useState(false);
  const [isSecondOpen, setSecondOpen] = useState(false);
  const [isThirdOpen, setThirdOpen] = useState(false);
  const [isFourthOpen, setFourthOpen] = useState(false);
  const [isFifthOpen, setFifthOpen] = useState(false);

  const toggle1 = () => setFirstOpen(!isFirstOpen);
  const toggle2 = () => setSecondOpen(!isSecondOpen);
  const toggle3 = () => setThirdOpen(!isThirdOpen);
  const toggle4 = () => setFourthOpen(!isFourthOpen);
  const toggle5 = () => setFifthOpen(!isFifthOpen);
  const width = { width: "45px", height: "45px", backgroundColor: "#333D7A" };

  return (
    <section className="saas2 faq mt-0" id="feature">
      <Container>
        <Row>
          <Col md="12">
            <div className="faq-block">
              <div>
                <div className="title">
                  <div className="main-title">
                    <h2 style={{ color: "black" }}>Dolorrrrr Reprehenderit</h2>
                  </div>
                  <div className="sub-title">
                    <p className="sub-title-para">
                      Dolor reprehenderit exercitation id in culpa. Proident
                      proident mollit esse labore irure eu id velit ea. In
                      voluptate nostrud mollit dolore non exercitation sunt
                      nulla minim. Reprehenderit exercitation adipisicing
                      pariatur elit nostrud incididunt aute laborum nostrud
                      labore elit fugiat proident enim. Id aliqua id cillum
                      excepteur aliquip commodo qui ad adipisicing ex. Ipsum
                      officia duis minim non reprehenderit deserunt.
                    </p>
                  </div>
                </div>
                <Row>
                  <Col md="6" className="center-text ">
                    <Lottie
                      isClickToPauseDisabled={true}
                      options={defaultOptions}
                      height="auto"
                      width="100%"
                    />
                    {/* <img
                      alt=""
                      className="img-fluid img-dextop"
                      src="/assets/images/home/animation.png"
                      style={{ height: "auto" }}
                    /> */}
                  </Col>

                  <Col md="6">
                    <Card className="shadow ">
                      <CardHeader
                        onClick={toggle1}
                        style={{ cursor: "pointer" }}
                        className="bg-white">
                        <div>
                          <div class=" p-3 d-flex">
                            <div
                              class="rounded-circle text-white mr-4"
                              style={width}>
                              <span
                                class="text-white "
                                style={{ fontSize: "2rem", padding: "15px" }}>
                                1
                              </span>
                            </div>
                            <span class="h6 align-self-center mb-0">
                              START YOUR ORDER
                            </span>
                          </div>
                        </div>
                      </CardHeader>
                      <Collapse isOpen={isFirstOpen}>
                        <CardBody>
                          <StartYourOrder />
                        </CardBody>
                      </Collapse>
                    </Card>
                    <Card className="shadow">
                      <CardHeader
                        onClick={toggle2}
                        style={{ cursor: "pointer" }}
                        className="bg-white">
                        <div class=" p-3 d-flex">
                          <div
                            class="rounded-circle  text-white mr-4"
                            style={width}>
                            <span
                              class="text-white "
                              style={{ fontSize: "2rem", padding: "12px" }}>
                              2
                            </span>
                          </div>
                          <span class="h6 align-self-center mb-0">
                            Verify SMS
                          </span>
                        </div>
                      </CardHeader>
                      <Collapse isOpen={isSecondOpen}>
                        <CardBody>
                          <VerifySms />
                        </CardBody>
                      </Collapse>
                    </Card>
                    <Card className="shadow">
                      <CardHeader
                        onClick={toggle3}
                        style={{ cursor: "pointer" }}
                        className="bg-white">
                        <div>
                          <div class=" p-3 d-flex">
                            <div
                              class="rounded-circle  text-white mr-4"
                              style={width}>
                              <span
                                class="text-white "
                                style={{ fontSize: "2rem", padding: "12px" }}>
                                3
                              </span>
                            </div>
                            <span class="h6 align-self-center mb-0">
                              Select Wallet
                            </span>
                          </div>
                        </div>
                      </CardHeader>
                      <Collapse isOpen={isThirdOpen}>
                        <CardBody>
                          <SelectWallet />
                        </CardBody>
                      </Collapse>
                    </Card>
                    <Card className="shadow">
                      <CardHeader
                        onClick={toggle4}
                        style={{ cursor: "pointer" }}
                        className="bg-white">
                        <div>
                          <div class=" p-3 d-flex">
                            <div
                              class="rounded-circle  text-white mr-4"
                              style={width}>
                              <span
                                class="text-white "
                                style={{ fontSize: "2rem", padding: "12px" }}>
                                4
                              </span>
                            </div>
                            <span class="h6 align-self-center mb-0">
                              Upload Images
                            </span>
                          </div>
                        </div>
                      </CardHeader>
                      <Collapse isOpen={isFourthOpen}>
                        <CardBody>
                          <UploadImages />
                        </CardBody>
                      </Collapse>
                    </Card>
                    <Card className="shadow">
                      <CardHeader
                        onClick={toggle5}
                        style={{ cursor: "pointer" }}
                        className="bg-white">
                        <div>
                          <div class=" p-3 d-flex">
                            <div
                              class="rounded-circle text-white mr-4"
                              style={width}>
                              <span
                                class="text-white "
                                style={{ fontSize: "2rem", padding: "12px" }}>
                                5
                              </span>
                            </div>
                            <span class="h6 align-self-center mb-0">
                              Gift card Information
                            </span>
                          </div>
                        </div>
                      </CardHeader>
                      <Collapse isOpen={isFifthOpen}>
                        <CardBody>
                          <GiftCardInformation />
                        </CardBody>
                      </Collapse>
                    </Card>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AccordionElementSection;
