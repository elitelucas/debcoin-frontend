import React from "react";
import { Row, Col } from "reactstrap";

const account = () => {
  return (
    <Row className="mt-3 mb-3">
      <Col sm="12">
        <h4 className="text-dark">Account</h4>
        <div className={`p-5 shadow-showcase  shadow mt-2`}>
          <div className="typo-content">
            <h4 className="text-dark mb-3">change Password</h4>
            <form>
              <Row>
                <div className="col-sm-12 col-md-6 mb-3">
                  <label htmlFor="name">Current Password</label>
                  <input
                    className="form-control"
                    id="password"
                    placeholder="Current Password"
                    required=""
                    type="password"
                  />
                </div>
              </Row>
              <Row>
                <div className="col-sm-12 col-md-6 mb-3">
                  <label htmlFor="new password">New Password*</label>
                  <input
                    className="form-control"
                    placeholder="New Password"
                    required=""
                    type="Password"
                  />
                </div>
                <div className="col-sm-12 col-md-6 mb-3">
                  <label htmlFor="email">Confirm New Password*</label>
                  <input
                    className="form-control"
                    placeholder="Confirm Password"
                    required=""
                    type="password"
                  />
                </div>
                <p className="mt-2">
                  You will automatically be logged out on successful password
                  change.
                </p>
              </Row>
              <hr />
              <Row>
                <h4 className="text-dark">Close account</h4>
                <p class=" ">
                  Please contact us at{" "}
                  <a href="mailto:support@debcoins.com">support@debcoins.com</a>{" "}
                  to close your account. Your request should be sent from your
                  registered email.
                </p>
              </Row>
            </form>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default account;
