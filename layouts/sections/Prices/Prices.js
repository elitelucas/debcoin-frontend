import React, { Fragment } from "react";
import Slider from "react-slick";
import { Container, Row, Col } from "reactstrap";
var settings = {
  infinite: true,
  speed: 500,
  arrows: false,
  autoplay: true,
  centerMode: true,
  swipeToSlide: true,
  centerPadding: "0px",
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        centerPadding: "160px",
        padding: "20px",
        slidesToScroll: 1,
        centerMode: false,
        autoplay: false,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
      },
    },
  ],
};

const Pricing = (props) => {
  return (
    <section className="saas1 pricing pricing-6">
      <Container>
        <Fragment>
          <Container>
            <div className="wrapper-full">
              <h3 className="text-center" style={{ fontSize: "28px" }}>
                Choose one of our packages
              </h3>
              <Row>
                <Col lg="12" md="12" sm="12" xs="12" className="text-center">
                  <Slider
                    className="owl-carousel owl-theme pricing-slider plan-box"
                    {...settings}>
                    {props.allowed>=50 ? (
                      <div className="item ">
                        <div
                          className="price-box shadow"
                          style={{ opacity: "1" }}>
                          <h6 className="">Pay</h6>

                          <h4
                            className="no-weight"
                            style={{ fontSize: "25px", marginTop: "0rem" }}>
                            <span style={{ fontSize: "25px" }}>50 USD</span>
                          </h4>

                          <h6 className="">Get</h6>
                          <h4
                            className="no-weight"
                            style={{ fontSize: "25px", marginTop: "0rem" }}>
                            <span style={{ fontSize: "25px" }}>{Math.floor(100000000*50/parseFloat(props.price))/100000000} BTC</span>
                          </h4>

                          <a
                            className="btn primary-btn btn-default "
                            onClick={()=>props.submit(50)}>
                            Buy
                          </a>
                        </div>
                      </div>
                    ) : ''}
                    
                    {props.allowed>=100 ? (
                      <div className="item ">
                        <div
                          className="price-box shadow"
                          style={{ opacity: "1" }}>
                          <h6 className="">Pay</h6>

                          <h4
                            className="no-weight"
                            style={{ fontSize: "25px", marginTop: "0rem" }}>
                            <span style={{ fontSize: "25px" }}>100 USD</span>
                          </h4>

                          <h6 className="">Get</h6>
                          <h4
                            className="no-weight"
                            style={{ fontSize: "25px", marginTop: "0rem" }}>
                            <span style={{ fontSize: "25px" }}>{Math.floor(10000000000/parseFloat(props.price))/100000000} BTC</span>
                          </h4>

                          <a className="btn primary-btn btn-default " onClick={()=>props.submit(100)}>Buy</a>
                        </div>
                      </div>
                    ) : ''}
                    
                    {props.allowed>=200 ? (
                      <div className="item ">
                        <div
                          className="price-box shadow"
                          style={{ opacity: "1" }}>
                          <h6 className="">Pay</h6>

                          <h4
                            className="no-weight"
                            style={{ fontSize: "25px", marginTop: "0rem" }}>
                            <span style={{ fontSize: "25px" }}>200 USD</span>
                          </h4>

                          <h6 className="">Get</h6>
                          <h4 className="no-weight" style={{ marginTop: "0rem" }}>
                            <span style={{ fontSize: "25px" }}>{Math.floor(20000000000/parseFloat(props.price))/100000000} BTC</span>
                          </h4>

                          <a className="btn primary-btn btn-default " onClick={()=>props.submit(200)}>Buy</a>
                        </div>
                      </div>
                    ) : ''}
                    
                    {props.allowed>=500 ? (
                      <div className="item ">
                        <div
                          className="price-box shadow"
                          style={{ opacity: "1" }}>
                          <h6 className="">Pay</h6>

                          <h4
                            className="no-weight"
                            style={{ fontSize: "25px", marginTop: "0rem" }}>
                            <span style={{ fontSize: "25px" }}>500 USD</span>
                          </h4>

                          <h6 className="">Get</h6>
                          <h4
                            className="no-weight"
                            style={{ fontSize: "25px", marginTop: "0rem" }}>
                            <span style={{ fontSize: "25px" }}>{Math.floor(50000000000/parseFloat(props.price))/100000000} BTC</span>
                          </h4>

                          <a className="btn primary-btn btn-default " onClick={()=>props.submit(500)}>Buy</a>
                        </div>
                      </div>
                    ) : ''}
                    
                  </Slider>
                </Col>
              </Row>
            </div>
          </Container>
        </Fragment>
      </Container>
    </section>
  );
};

export default Pricing;
