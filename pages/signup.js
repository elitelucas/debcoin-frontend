import React, { useEffect } from "react";
import Head from "next/head";
// import Custom Components
import Header from "./layouts/sections/Header/header";
// import Header from "../containers/common/header";
import BannerSection from "./layouts/sections/Banner/Banner";
import AccordianSection from "./layouts/sections/Accordian/accordian";
import FooterSection from "./layouts/sections/Footer/footer";
import {
  Row,
  Col,
  Form,
  FormGroup,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
  Label,
} from "reactstrap";
import ReCAPTCHA from "react-google-recaptcha";

const index = () => {
  useEffect(() => {
    document.body.style.setProperty("--primary", "#333D7A");
    document.body.style.setProperty("--secondary", "##FAEBEE");
    document.body.style.setProperty("--light", "#f3f1e8");
    document.body.style.setProperty("--dark", "#9647DB");
  });
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  return (
    <div>
      <Head>
        <title>DebCoins </title>
      </Head>
      <Header className="saas2" isHome={false} />
      <Row className="mb-5">
        <Col
          sm="12"
          md="4"
          className="ml-auto mr-auto"
          style={{ marginTop: "10rem" }}>
          <div className={`p-5 shadow-showcase  shadow`}>
            <div className="login-modal">
              <div className="text-center ">
                <h2 className=" text-dark  mb-3">Sign Up</h2>
                <p>Create your account to continue.</p>
                <hr />
              </div>
              <Form>
                <FormGroup row>
                  <Col sm={12} className="m-auto">
                    <Label for="Email address">Username *</Label>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText
                          
                          style={{
                            borderTopLeftRadius: "20px",
                            borderBottomLeftRadius: "20px",
                            border: "0",
                          }}>
                          <i className="fa fa-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        name="usd"
                        id="usd"
                        placeholder="Username"
                      />
                    </InputGroup>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col sm={12}>
                    <Label for="Mobile Number">Mobile Number *</Label>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText
                          style={{
                            borderTopLeftRadius: "20px",
                            borderBottomLeftRadius: "20px",
                            border: "0",
                          }}>
                          +1
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        name="number"
                        id="number"
                        placeholder="xxx-xxx-xxxx"
                      />
                    </InputGroup>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col sm={12}>
                    <Label for="Email">Email *</Label>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText
                          style={{
                            borderTopLeftRadius: "20px",
                            borderBottomLeftRadius: "20px",
                            border: "0",
                          }}>
                          <i className="fa fa-envelope"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="name@example.com"
                      />
                    </InputGroup>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col sm={12}>
                    <Label for="Password">Password *</Label>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText
                          style={{
                            borderTopLeftRadius: "20px",
                            borderBottomLeftRadius: "20px",
                            border: "0",
                          }}>
                          <i className="fa fa-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                      />
                    </InputGroup>
                  </Col>
                  <Col sm={12}>
                    <FormGroup check className="mt-3">
                      <Input type="checkbox" style={{ width: "unset" }} />{" "}
                      <Label>
                        I've read and accept the
                        <a
                          href="/term-of-use"
                          style={{
                            textDecoration: "underline",
                            paddingLeft: "5px",
                          }}>
                          Terms of service
                        </a>
                      </Label>
                    </FormGroup>
                  </Col>
                  <Col sm={12}>
                    <FormGroup check className="mt-2">
                      <Label check>
                        <Input type="checkbox" style={{ width: "unset" }} />{" "}
                        I've read and accept the{" "}
                        <a
                          href="/term-of-use"
                          style={{
                            textDecoration: "underline",
                            paddingLeft: "5px",
                          }}>
                          Privacy policy
                        </a>
                      </Label>
                    </FormGroup>
                  </Col>

                  <Col sm={12} className="mt-3">
                    <ReCAPTCHA
                      sitekey="6LcGYNEZAAAAAJcbNy-gij3qs1zGNo-ajvNOiR0t"
                      onChange={onChange}
                    />
                  </Col>
                </FormGroup>
                <button className="btn primary-btn btn-default  mt-0">
                  Sign Up
                </button>
              </Form>
              <hr />
              <p>
                Already have an account?? <a href="/login">Login</a>
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <FooterSection />
    </div>
  );
};

export default index;
