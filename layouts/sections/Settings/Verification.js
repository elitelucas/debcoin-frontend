import React, { useState } from "react";
import {
  Row,
  Col,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

const verification = (props) => {
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);

  const toggleModal = () => setModal(!modal);
  const toggleModal2 = () => setModal2(!modal2);
  const colorWarning = "#ffbe3d";
  const colorDanger = "#f25767";
  const colorSuccess = "#5cc9a7";
  const colorDangerBanner = {
    backgroundColor: colorDanger,
    borderRadius: "50%",
    display: "inline-flex",
    width: "3.125rem",
    height: "3.125rem",
  };
  const colorWarningBanner = {
    backgroundColor: colorWarning,
    borderRadius: "50%",
    display: "inline-flex",
    width: "3.125rem",
    height: "3.125rem",
  };
  const colorSuccessBanner = {
    backgroundColor: colorSuccess,
    borderRadius: "50%",
    display: "inline-flex",
    width: "3.125rem",
    height: "3.125rem",
  };

  const [isSmsVerified, setIsSmsVerified] = useState("verified");

  return (
    <Container>
      <h4 className="text-dark mb-2 mt-2">Verification</h4>
      <Row className="mt-3">
        <Col md="12" lg="4">
          <div
            className={`p-4 shadow-showcase text-center shadow`}
            style={{ minHeight: "27rem" }}>
            <div
              style={{
                backgroundColor: colorSuccess,
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
            <h5 className="h3 font-weight-bolder mb-1 mt-3">0$ - $499</h5>
            <br></br>
            <div className="  text-white rounded-circle" style={colorSuccessBanner}>
              <i
                className="fa fa-mobile"
                style={{
                  fontSize: "2rem",
                  padding: "9px 16px",
                }}></i>
            </div>
            <p className="mt-2 mb-0">
              <i
                className="fa fa-check  mr-2"
                style={{ color: colorSuccess }}></i>
              SMS verification required
            </p>
          </div>
        </Col>
        <Col md="12" lg="4">
          <div
            className={`p-4 shadow-showcase text-center shadow`}
            style={{ minHeight: "27rem" }}>
            <div
              style={{
                backgroundColor: colorWarning,
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
            <h5 className="h3 font-weight-bolder mb-1 mt-3">$500 - $1999</h5>
            <br></br>
            <div className="  text-white rounded-circle" style={colorWarningBanner}>
              <i
                className="fa fa-id-card"
                style={{
                  fontSize: "20px",
                  padding: "15px 13px",
                }}></i>
            </div>
            <p className="mt-2 mb-0">
              <i
                className="fa fa-check  mr-2"
                style={{ color: colorWarning }}></i>
              SMS verification required
            </p>
            <p className="mt-2 mb-0">
              <i
                className="fa fa-check  mr-2"
                style={{ color: colorWarning }}></i>
              Government issued ID required
            </p>
            <p className="mt-2 mb-0 invisible">
              <i
                className="fa fa-check  mr-2"
                style={{ color: colorWarning }}></i>
            </p>
          </div>
        </Col>
        <Col md="12" lg="4">
          <div
            className={`p-4 shadow-showcase text-center shadow`}
            style={{ minHeight: "27rem" }}>
            <div
              style={{
                backgroundColor: colorDanger,
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
            <h5 className="h3 font-weight-bolder mb-1 mt-3">$2000+</h5>
            <br></br>
            <div className="  text-white rounded-circle" style={colorDangerBanner}>
              <i
                className="fa fa-file"
                style={{
                  fontSize: "20px",
                  padding: "15px 15px",
                }}></i>
            </div>
            <p className="mt-2 mb-0">
              <i
                className="fa fa-check  mr-2"
                style={{ color: colorDanger }}></i>
              SMS verification required
            </p>
            <p className="mt-2 mb-0">
              <i
                className="fa fa-check  mr-2"
                style={{ color: colorDanger }}></i>
              Government issued ID required
            </p>
            <p className="mt-2 mb-0">
              <i
                className="fa fa-check  mr-2"
                style={{ color: colorDanger }}></i>
              Proof of Address required
            </p>
          </div>
        </Col>
      </Row>
      <h4 className="mt-5 text-dark">Submit your Verification Documents</h4>
      <div className={`p-4  shadow-sm`}>
        <Row className="mt-3 ml-0">
          <Col sm="12" md="2">
            <div className="  text-white rounded-circle" style={colorSuccessBanner}>
              <i
                className="fa fa-mobile"
                style={{
                  fontSize: "2rem",
                  padding: "9px 16px",
                }}></i>
            </div>
          </Col>
          {
            props.phoneVerified===true ? (
              <>
              <Col sm="12" md="7">
                <h5 className="mb-2"> SMS Verification</h5>
                <p>
                  Your mobile number {props.phoneNumber} is successfully verified via SMS.
                </p>
              </Col>
              <Col sm="12" md="3" className="mt-3 text-sm-center text-md-right">
                <Button
                  style={{
                    backgroundColor: colorSuccess,
                  }}
                  disabled>
                  Verified
                </Button>
              </Col>
              </>
            ) : (
              <>
              <Col sm="12" md="7">
                <h5 className="mb-2"> SMS Verification</h5>
                <p>
                  Your mobile number {props.phoneNumber} is not verified.
                </p>
              </Col>
              <Col sm="12" md="3" className="mt-3 text-sm-center text-md-right">
                <Button
                  style={{
                    backgroundColor: colorWarning,
                  }}
                  onClick={()=>props.verify(1)}
                  >
                  start
                </Button>
              </Col>
              </>
            )
          }
          
        </Row>
      </div>

      <div className={`p-4  shadow-sm`}>
        <Row className="mt-3 ml-0">
          <Col sm="12" md="2">
            {" "}
            <div className="  text-white rounded-circle" style={colorWarningBanner}>
              <i
                className="fa fa-id-card"
                style={{
                  fontSize: "20px",
                  padding: "15px 13px",
                }}></i>
            </div>
          </Col>
          {props.level===2 ? (
            <>
              <Col sm="12" md="6">
                {" "}
                <h5 className="mb-2">
                  ID Verification{" "}
                  <i
                    className="fa fa-question-circle pl-2"
                    onClick={toggleModal}></i>
                </h5>
                <p>
                  Your mobile number {props.phoneNumber} is successfully verified via SMS.
                </p>
              </Col>
              <Col sm="12" md="4" className="mt-3 text-sm-center text-md-right">
                {" "}
                <Button
                  style={{
                    backgroundColor: colorSuccess,
                  }}
                  disabled
                  >
                  Verified
                </Button>
              </Col>
            </>
          ) : ( props.tier2 ? (
            <>
              <Col sm="12" md="6">
                {" "}
                <h5 className="mb-2">
                  ID Verification{" "}
                  <i
                    className="fa fa-question-circle pl-2"
                    onClick={toggleModal}></i>
                </h5>
                <p>
                  Your mobile number {props.phoneNumber} is successfully verified via SMS.
                </p>
              </Col>
              <Col sm="12" md="4" className="mt-3 text-sm-center text-md-right">
                {" "}
                <Button
                  style={{
                    backgroundColor: colorWarning,
                  }}
                  onClick={()=>props.verify(2)}
                  >
                  Start
                </Button>
              </Col>
            </>
          ) : ( 
            <>
              <Col sm="12" md="6">
                {" "}
                <h5 className="mb-2">
                  ID Verification{" "}
                  <i
                    className="fa fa-question-circle pl-2"
                    onClick={toggleModal}></i>
                </h5>
                <p>
                  Your mobile number {props.phoneNumber} is successfully verified via SMS.
                </p>
              </Col>
              <Col sm="12" md="4" className="mt-3 text-sm-center text-md-right">
                {" "}
                <Button
                  style={{
                    backgroundColor: colorSuccess,
                  }}
                  disabled
                  >
                  uploaded
                </Button>
              </Col>
            </>
          ))}
          
        </Row>
      </div>

      <div className={`p-4  shadow-sm`}>
        <Row className="mt-3 ml-0">
          <Col sm="12" md="2">
            {" "}
            <div className="  text-white rounded-circle" style={colorDangerBanner}>
              <i
                className="fa fa-file"
                style={{
                  fontSize: "20px",
                  padding: "15px 15px",
                }}></i>
            </div>
          </Col>
          {props.level===3 ? (
            <>
              <Col sm="12" md="6">
                <h5 className="mb-2">
                  Proof of Address
                  <i
                    className="fa fa-question-circle pl-2"
                    onClick={toggleModal2}></i>
                </h5>
                <p>
                  A utility bill is required to unlock Tier 3 limit. Make sure this
                  includes your name and the address associated with your ID.
                  Acceptable forms of Proof of Address include, but are not limited
                  to:
                </p>
                <ul style={{ listStyleType: "disc" }} className="mt-3">
                  <li>Electric Bill</li>
                  <li>Water Bill</li>
                  <li>Insurance Bill</li>
                  <li>Insurance Bill</li>

                  <li>Bank Statement</li>
                </ul>
              </Col>
              <Col sm="12" md="4" className="mt-3 text-sm-center text-md-right">
                <Button
                  style={{
                    backgroundColor: colorSuccess,
                  }}
                  disabled
                  >
                  Verified
                </Button>
              </Col>
            </>
          ) : (props.tier3 ? (
            <>
              <Col sm="12" md="6">
                <h5 className="mb-2">
                  Proof of Address
                  <i
                    className="fa fa-question-circle pl-2"
                    onClick={toggleModal2}></i>
                </h5>
                <p>
                  A utility bill is required to unlock Tier 3 limit. Make sure this
                  includes your name and the address associated with your ID.
                  Acceptable forms of Proof of Address include, but are not limited
                  to:
                </p>
                <ul style={{ listStyleType: "disc" }} className="mt-3">
                  <li>Electric Bill</li>
                  <li>Water Bill</li>
                  <li>Insurance Bill</li>
                  <li>Insurance Bill</li>

                  <li>Bank Statement</li>
                </ul>
              </Col>
              <Col sm="12" md="4" className="mt-3 text-sm-center text-md-right">
                <Button
                  style={{
                    backgroundColor: colorWarning,
                  }}
                  onClick={()=>props.verify(3)}
                  >
                  Start
                </Button>
              </Col>
            </>
          ) : (
            <>
            <Col sm="12" md="6">
              <h5 className="mb-2">
                Proof of Address
                <i
                  className="fa fa-question-circle pl-2"
                  onClick={toggleModal2}></i>
              </h5>
              <p>
                A utility bill is required to unlock Tier 3 limit. Make sure this
                includes your name and the address associated with your ID.
                Acceptable forms of Proof of Address include, but are not limited
                to:
              </p>
              <ul style={{ listStyleType: "disc" }} className="mt-3">
                <li>Electric Bill</li>
                <li>Water Bill</li>
                <li>Insurance Bill</li>
                <li>Insurance Bill</li>

                <li>Bank Statement</li>
              </ul>
            </Col>
            <Col sm="12" md="4" className="mt-3 text-sm-center text-md-right">
              <Button
                style={{
                  backgroundColor: colorSuccess,
                }}
                disabled
                >
                uploaded
              </Button>
            </Col>
          </>
          ))}
        </Row>
      </div>
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>ID Verification</ModalHeader>
        <ModalBody>
          <img
            alt=""
            className="img-fluid team"
            src="/assets/images/home/id.png"
          />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleModal}>
            Close
          </Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modal2} toggle={toggleModal2}>
        <ModalHeader toggle={toggleModal2}>Proof of Address</ModalHeader>
        <ModalBody>
          <img
            alt=""
            className="img-fluid team"
            src="/assets/images/home/poa.png"
          />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleModal2}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
};

export default verification;
