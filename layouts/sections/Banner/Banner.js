import React from "react";
import { Container, Row, Col } from "reactstrap";
import Lottie from "react-lottie";
import Accordian from "../Accordian/accordian";
import animationData from "../../../public/assets/animation/animation.json";
const Banner = (props) => {
  const scrollToRef = (val) => {
    document.querySelector(`#${val}`).scrollIntoView({ behavior: "smooth" });
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <section className="saas2 header" id="home">
      <div className="saas2-content ">
        <div className="bg saas2-bg">
          <Container style={{ paddingBottom: "13rem" }}>
            <Row
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <Col lg="6" className=" order-2 order-lg-1">
                <Accordian seconds={props.seconds} addWallet={props.addWallet} userInfo={props.userInfo} amount={props.amount} price={props.price} getRate={props.getRate} allowed={props.allowed} />
              </Col>
              <Col lg="6" className="order-1 order-lg-2">
                <div className="center-text bannerHomePadding ">
                  <div>
                    <div className="header-text">
                      <h1 style={{ fontFamily: "Graphik_Semibold" }}>
                        {" "}
                        Buy Bitcoin with Visa, Mastercard & Amex Gift Cards
                      </h1>
                    </div>

                    <div className="header-sub-text">
                      <p className="sub-para text-white">
                        Get your Bitcoin instantly using our service - no more
                        "temporary holds" on your Bitcoin that traditional
                        exchanges have in place. Exchange your nonreloadable
                        prepaid gift card today!
                      </p>
                    </div>
                    <Lottie
                      options={defaultOptions}
                      isClickToPauseDisabled={true}
                      height="auto"
                      width={"100%"}
                    />
                    {/* <a
                      className="btn btn-default primary-btn transparent"
                      onClick={() => scrollToRef("feature")}>
                      start now
                    </a> */}
                  </div>
                </div>
              </Col>
            </Row>
          </Container>

          <img
            alt=""
            className="img-fluid set-abs background-animate"
            src="/assets/images/background2.png"
            style={{ pointerEvents: "none" }}
          />

          {/* <div className="set-abs round move-right-left">
            <div className="set-abs inner-circle">
              <img
                alt=""
                className="img-fluid img9"
                src="/assets/images/8.png"
              />
            </div>
          </div> */}
          <div className="center-content set-abs bottom-content">
            <div className="bottom">
              <a className="down" onClick={() => scrollToRef("feature")}>
                <img
                  alt=""
                  className="img-fluid"
                  src="/assets/images/down.png"
                />
              </a>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
};
export default Banner;
