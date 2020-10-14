import React, { useEffect, useState, useContext } from "react";
import Head from "next/head";
// import Custom Components
import Header from "./layouts/sections/Header/header";
// import Header from "../containers/common/header";
import BannerSection from "./layouts/sections/Banner/Banner";
import AccordianSection from "./layouts/sections/Accordian/accordian";
import FooterSection from "./layouts/sections/Footer/footer";
import { Accordion, AccordionItem } from "react-light-accordion";
import "react-light-accordion/demo/css/index.css";
import { Container, Row, Col } from "reactstrap";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { AuthContext } from '../utils/auth';
import { FetchContext } from '../utils/authFetch';
import {publicFetch} from '../utils/publicFetch';
const index = () => {
  const {authState,isAuthenticated}=useContext(AuthContext);
  
  const {authAxios}=useContext(FetchContext);
  useEffect(() => {
    document.body.style.setProperty("--primary", "#333D7A");
    document.body.style.setProperty("--secondary", "##FAEBEE");
    document.body.style.setProperty("--light", "#f3f1e8");
    document.body.style.setProperty("--dark", "#9647DB");
  });
  const [modal, setModal] = useState(false);
  const [username,setUsername]=useState('');
  const [email,setEmail]=useState('');
  const [help,setHelp]=useState('');
  const submit=async ()=>{
    if(isAuthenticated()){
      try {
        const { data } = await authAxios.post('contact',{help});
        
      } catch (error) {
        console.log(error);        
      }  
    }else{
      try {
        const { data } = await publicFetch.post('contact_anonym',{username, email, help});
      } catch (error) {
        console.log(error);        
      }  
    }
    toggle();
  }
  const toggle = () => setModal(!modal);
  return (
    <div>
      <Head>
        <title>DebCoins </title>
      </Head>
      <Header className="saas2" />
      <section className="saas1 faq mt-0">
        <Container style={{ marginTop: "10rem" }}>
          <Row>
            <Col md="12">
              <div className="faq-block">
                <div>
                  <div className="title title2 title-inner">
                    <div className="main-title">
                      <h2 className="  text-center main-text m-b-0">
                        <span className="font-secondary text-uppercase">
                          Frequently Asked Questions(FAQ)
                        </span>
                      </h2>
                    </div>
                  </div>
                  <Accordion atomic={true}>
                    <AccordionItem
                      className="card-header bg-primary"
                      title="General Questions">
                      aaa
                    </AccordionItem>
                    <AccordionItem
                      className="card-header bg-primary"
                      title="Fees">
                      bbb
                    </AccordionItem>
                    <AccordionItem
                      className="card-header bg-primary"
                      title="Order Questions">
                      3333
                    </AccordionItem>
                    <AccordionItem
                      className="card-header bg-primary"
                      title="Cryptocurrency Questions">
                      444
                    </AccordionItem>
                    <AccordionItem
                      className="card-header bg-primary"
                      title="Legal">
                      444
                    </AccordionItem>
                    <AccordionItem
                      className="card-header bg-primary"
                      title="Verification">
                      444
                    </AccordionItem>
                  </Accordion>
                  <h6 className="link">
                    Still have a question? Reach out to us: <a>demo@123.com</a>
                  </h6>
                </div>
              </div>
            </Col>
            <Col sm="12 ">
              <div className="main-title " style={{ marginTop: "8rem" }}>
                <h2 className=" borders text-center main-text m-b-0">
                  <span className="text-uppercase">Contact Us</span>
                </h2>
              </div>
              <div className="row mt-5">
                <Col md="6 " sm="12">
                  <div
                    className={`p-5 shadow-showcase text-center shadow`}
                    onClick={toggle}
                    style={{ cursor: "pointer" }}>
                    <h3 className="m-0 f-18 text-center shadow-font">
                      <div className=" mx-auto">
                        <i
                          className="fa fa-user text-warning"
                          style={{ fontSize: "30px" }}></i>
                      </div>
                    </h3>
                    <h3>Account Issues</h3>
                    <p>I have an issue with my account.</p>
                  </div>
                </Col>
                <Col md="6 " sm="12">
                  <div
                    className={`p-5 shadow-showcase text-center shadow`}
                    onClick={toggle}
                    style={{ cursor: "pointer" }}>
                    <h3 className="m-0 f-18 text-center shadow-font">
                      <div className=" mx-auto">
                        <i
                          className="fa fa-btc  text-warning"
                          style={{ fontSize: "30px" }}></i>
                      </div>
                    </h3>
                    <h3>Order Questions</h3>
                    <p>I have a question about my order or how orders work.</p>
                  </div>
                </Col>
                <Col md="6 " sm="12">
                  <div
                    className={`p-5 shadow-showcase text-center shadow`}
                    onClick={toggle}
                    style={{ cursor: "pointer" }}>
                    <h3 className="m-0 f-18 text-center shadow-font">
                      <div className=" mx-auto">
                        <i
                          className="fa fa-handshake-o text-warning"
                          style={{ fontSize: "30px" }}></i>
                      </div>
                    </h3>
                    <h3>Business Inquiry</h3>
                    <p>For any other questions or issues about our services.</p>
                  </div>
                </Col>
                <Col md="6 " sm="12">
                  <div
                    className={`p-5 shadow-showcase text-center shadow`}
                    onClick={toggle}
                    style={{ cursor: "pointer" }}>
                    <h3 className="m-0 f-18 text-center shadow-font">
                      <div className=" mx-auto">
                        <i
                          className="fa fa-info-circle text-warning"
                          style={{ fontSize: "30px" }}></i>
                      </div>
                    </h3>
                    <h3>Something Else</h3>
                    <p>I have something else to ask.</p>
                  </div>
                </Col>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <FooterSection />
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Contact Us</ModalHeader>
        <ModalBody>
          <div className="typo-content">
            <form>
              <div className="form-row">
                {
                  isAuthenticated() ? '' : (
                    <>
                      <div className="col-12 mb-3">
                        <label htmlFor="name">Your User Name *</label>
                        <input
                          className="form-control"
                          id="name"
                          placeholder="Enter Your name"
                          required=""
                          type="text"
                          value={username}
                          onChange={(e)=>setUsername(e.target.value)}
                        />
                      </div>
                      <div className="col-12 mb-3">
                        <label htmlFor="email">Email *</label>
                        <input
                          className="form-control"
                          id="email"
                          placeholder="Email"
                          required=""
                          type="text"
                          value={email}
                          onChange={(e)=>setEmail(e.target.value)}
                        />
                      </div>
                    </>
                  )
                }
                
                <div className="col-12 mb-3">
                  <label>How may we help you? *</label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    placeholder="Write Your Message"
                    value={help}
                    onChange={(e)=>setHelp(e.target.value)}
                    rows="5"></textarea>
                </div>
              </div>
              <Row></Row>
            </form>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={submit}>
            Send
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default index;
