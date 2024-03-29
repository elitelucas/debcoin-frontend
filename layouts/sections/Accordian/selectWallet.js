import React, { useState } from "react";
import { FormGroup, Input, Spinner, Button } from "reactstrap";
import AddWallet from "../Settings/AddWallet";
import { toast } from 'react-toastify';
const selectWallet = (props) => {
  const [modal4, setModal4] = useState(false);
  const toggleModal4 = () => setModal4(!modal4);
  const [wallet, setWallet] = useState("");
  return (
    <div>
      <div className=" d-flex row  p-2" style={{ backgroundColor: "#ebf5ff" }}>
        <div className="col-12">
          <span className="text-left font-14-18">Giftcard Amount</span>
          <span className="float-right font-14-18">BTC Value</span>
          <br />
        </div>

        <div className="col-12">
          <span>${props.usd}</span>
          <span className="float-right">
            {Math.floor((100000000 * props.usd) / props.price) / 100000000} / $
            {props.usd}
          </span>
        </div>
      </div>
      <div className=" d-flex row mt-2 ">
        {props.wallet.length > 0 ? (
          props.wallet.map((ele, key) => (
            <div
              key={key}
              onClick={() => setWallet(key)}
              className="col-6  p-3 text-center"
              style={{ backgroundColor: "#eaecf3 " }}>
              <FormGroup check className="float-right">
                <Input
                  type="checkbox"
                  checked={key === wallet}
                  onChange={(e) => setWallet(key)}
                />
              </FormGroup>
              <img src="/assets/images/home/btc.png" />
              <br />
              {ele.title}
            </div>
          ))
        ) : (
          <>
            <p style={{ color: "black", display: "block" }}>
              No wallet has been registered with your account.
            </p>
            <br />
            <p style={{ color: "black" }}>
              <a onClick={toggleModal4}>Add a wallet now</a>
            </p>

            <AddWallet
              submit={props.addWallet}
              toggle={() => {
                toggleModal4();
              }}
              isOpen={modal4}
            />
          </>
        )}
      </div>
      {/* <div
        className="alert alert-danger dark  fade show text-left"
        role="alert">
        Please select a wallet.
      </div> */}
      <Button
        className="btn primary-btn btn-default text-uppercase mt-3"
        disabled={props.isLoading}
        onClick={(e) => {
          e.preventDefault();
          if (wallet !== "" && props.wallet[wallet])
            props.isClicked(props.wallet[wallet]);
          else
            toast.error("Please select a wallet.")
        }}>
        {props.isLoading ? <Spinner size="sm" color="primary" /> : "Select"}
      </Button>
    </div>
  );
};
export default selectWallet;
