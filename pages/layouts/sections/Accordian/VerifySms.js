import React from "react";
import { Label, Form, FormGroup, Input } from "reactstrap";
const verifySms = (props) => {
  return (
    <div class="col-12 mt-3">
      <p>
        A one-time SMS has been sent to your registered mobile number.{" "}
        <span className="text-dark">+19165810509</span>
      </p>
      <div className="login-modal">
        <Form>
          <div className="form-row">
            <FormGroup className="col-md-12">
              <Label for="inputEmail">SMS</Label>
              <Input
                className="form-control"
                id="SMS"
                placeholder="SMS"
                type="text"
              />
            </FormGroup>
          </div>
          <button
            className="btn primary-btn btn-default text-uppercase mt-0"
            onClick={(e) => {
              e.preventDefault();

              props.isClicked();
            }}>
            Verify
          </button>
        </Form>
      </div>
    </div>
  );
};
export default verifySms;
