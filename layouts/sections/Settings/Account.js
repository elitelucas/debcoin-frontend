import React from "react";
import { Row, Col, Button } from "reactstrap";

const account = ({ submit }) => {
  const [prevPWD, setPrevPWD] = React.useState("");

  const [newPWD, setNewPWD] = React.useState("");
  const [confirmPWD, setConfirmPWD] = React.useState("");

  const [prevPwdMsg, setPrevPwdMsg] = React.useState(false);
  const [confirmPwdMsg, setConfirmPwdMsg] = React.useState(false);
  const [pwdFillMsg, setPwdFillMsg] = React.useState(false);

  const validate = () => {
    prevPWD === "" ? setPrevPwdMsg(true) : setPrevPwdMsg(false);

    newPWD === "" ? setPwdFillMsg(true) : setPwdFillMsg(false);
    newPWD !== confirmPWD ? setConfirmPwdMsg(true) : setConfirmPwdMsg(false);
  };
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
                    value={prevPWD}
                    onChange={(e) => setPrevPWD(e.target.value)}
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
                    value={newPWD}
                    onChange={(e) => setNewPWD(e.target.value)}
                  />
                </div>
                <div className="col-sm-12 col-md-6 mb-3">
                  <label htmlFor="email">Confirm New Password*</label>
                  <input
                    className="form-control"
                    placeholder="Confirm Password"
                    required=""
                    type="password"
                    value={confirmPWD}
                    onChange={(e) => setConfirmPWD(e.target.value)}
                  />
                </div>
                {prevPwdMsg ? (
                  <div className="col-sm-12 col-md-6 mb-3">
                    <div
                      className="alert alert-danger dark alert-dismissible fade show"
                      role="alert">
                      {" "}
                      Current Password field is empty
                      <button
                        aria-label="Close"
                        className="close"
                        data-dismiss="alert"
                        type="button">
                        <span
                          aria-hidden="true"
                          onClick={() => setPrevPwdMsg(false)}>
                          ×
                        </span>
                      </button>
                    </div>
                  </div>
                ) : (
                  ""
                )}

                {confirmPwdMsg ? (
                  <div className="col-sm-12 col-md-6 mb-3">
                    <div
                      className="alert alert-danger dark alert-dismissible fade show"
                      role="alert">
                      {" "}
                      Passwords don't match.
                      <button
                        aria-label="Close"
                        className="close"
                        data-dismiss="alert"
                        type="button">
                        <span
                          aria-hidden="true"
                          onClick={() => setConfirmPwdMsg(false)}>
                          ×
                        </span>
                      </button>
                    </div>
                  </div>
                ) : (
                  ""
                )}

                {pwdFillMsg ? (
                  <div className="col-sm-12 col-md-6 mb-3">
                    <div
                      className="alert alert-danger dark alert-dismissible fade show"
                      role="alert">
                      {" "}
                      New Passwords field is empty.
                      <button
                        aria-label="Close"
                        className="close"
                        data-dismiss="alert"
                        type="button">
                        <span
                          aria-hidden="true"
                          onClick={() => setPwdFillMsg(false)}>
                          ×
                        </span>
                      </button>
                    </div>
                  </div>
                ) : (
                  ""
                )}

                <div className="col-sm-12  mb-3">
                  <Button
                    size="sm"
                    className="btn primary-btn btn-default  mt-0"
                    onClick={() => {
                      validate();
                      if (newPWD !== "" && confirmPWD === newPWD) {
                        submit(prevPWD, newPWD);
                      }
                    }}>
                    <i className="fa fa-pencil pr-2"></i> Change Password
                  </Button>
                </div>
                <br />
                <div>
                  <p className="mt-2">
                    You will automatically be logged out on successful password
                    change.
                  </p>
                </div>
              </Row>
              <hr />
              <Row>
                <h4 className="text-dark">Close account</h4>
                <p>
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
