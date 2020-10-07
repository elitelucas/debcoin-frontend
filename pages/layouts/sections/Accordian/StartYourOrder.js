import React from "react";

import {
  Collapse,
  Button,
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
  FormText,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";
const startYourOrder = (props) => {
  return (
    <div>
      <div
        class=" d-flex row  p-2 w-100"
        style={{ backgroundColor: "#ebf9f4" }}>
        <div class="col-12 ">
          <span class="text-left font-14-18" style={{}}>
            <i class="fab fa-btc pr-2"></i>Bitcoins
          </span>
          <span class="float-right font-14-18">1BTC = $13922.53USD</span>
          <br />
        </div>

        <div class="col-12">
          <span>Bitcoin price has all Conversion Rate fees included</span>
          <span class="float-right">12s</span>
        </div>
      </div>
      <div class="col-12 mt-3">
        <div className="login-modal">
          <Form>
            <FormGroup row>
              <Col sm={12}>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText
                      style={{
                        borderTopLeftRadius: "20px",
                        borderBottomLeftRadius: "20px",
                        border: "0",
                      }}>
                      USD
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input type="number" name="usd" id="usd" placeholder="USD" />
                </InputGroup>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm={12}>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText
                      style={{
                        borderTopLeftRadius: "20px",
                        borderBottomLeftRadius: "20px",
                        border: "0",
                      }}>
                      BTC
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input type="number" name="BTC" id="BTC" placeholder="BTC" />
                </InputGroup>
              </Col>
            </FormGroup>
            <button
              className="btn primary-btn btn-default text-uppercase mt-0"
              onClick={(e) => {
                e.preventDefault();

                props.isClicked();
              }}>
              Buy Bitcoins
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default startYourOrder;
