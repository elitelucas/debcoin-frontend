import React from "react";
import { Label, Form, FormGroup, Input, Button, Spinner } from "reactstrap";
const verifySms = (props) => {
  const [sms,setSMS]=React.useState('');
  
  return (
    <div className="col-12 mt-3">
      <p>
        A one-time SMS has been sent to your registered mobile number.{" "}
  <span className="text-dark">+{props.phoneNumber}</span>
      </p>
      <div className="login-modal">
        <Form onSubmit={(e)=>{e.preventDefault();}}>
          <div className="form-row">
          {/* <Button color="success" onClick={props.verifyReq}>ReSend OTP</Button> */}
          </div>

          <div className="form-row">
            <FormGroup className="col-md-12">
              <Label for="inputEmail">SMS</Label>
              <Input
                className="form-control"
                id="SMS"
                placeholder="SMS"
                type="text"
                value={sms}
                onChange={(e)=>setSMS(e.target.value)}
              />
            </FormGroup>
          </div>

          <Button
          type="button"
            className="btn primary-btn btn-default text-uppercase mt-0"
            disabled={props.isLoading}
            onClick={(e) => {
              e.preventDefault();

              props.isClicked(sms);
            }}>
            {props.isLoading ? <Spinner size="sm" color="primary" /> : "Verify"}
          </Button>
        </Form>
      </div>
    </div>
  );
};
export default verifySms;
