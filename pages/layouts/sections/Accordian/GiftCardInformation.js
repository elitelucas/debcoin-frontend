import React, { useState } from "react";
import {
  Spinner,
  Button,
  Label,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
} from "reactstrap";
import NumberFormat from "react-number-format";

const giftCardInformation = (props) => {
  return (
    <div>
      <div className=" d-flex row  p-2" style={{ backgroundColor: "#ebf9f4" }}>
        <div className="col-12">
          <span className="text-left font-14-18">Giftcard Amount</span>
          <span className="float-right font-14-18">BTC Value</span>
          <br />
        </div>

        <div className="col-12">
          <span>$25</span>
          <span className="float-right">0.000183411 / $20.66</span>
        </div>
      </div>
      <div className="login-modal">
        <Form>
          <Row className="mt-3">
            <Col md="12">
              <FormGroup>
                <Label for="Card Number">Card Number *</Label>

                <NumberFormat format="#### #### #### ####" mask="_" />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label for="examplePassword">Expiration Date *</Label>
                <Input
                  type="text"
                  name="expirationDate"
                  id="expirationDate"
                  placeholder="MM/YY"
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label for="examplePassword">CVV*</Label>
                <Input
                  type="text"
                  name="cvv"
                  id="cvv"
                  placeholder="3 or 4 digits"
                />
              </FormGroup>
            </Col>
          </Row>

          <Button
            className="btn primary-btn btn-default text-uppercase mt-0"
            disabled={props.isLoading}
            onClick={(e) => {
              e.preventDefault();

              props.isClicked();
            }}>
            {props.isLoading ? <Spinner size="sm" color="primary" /> : "Verify"}
          </Button>
        </Form>
      </div>
    </div>
  );
};
export default giftCardInformation;
