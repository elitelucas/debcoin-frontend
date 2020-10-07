import React from "react";
import { FormGroup, Input } from "reactstrap";
const selectWallet = (props) => {
  return (
    <div>
      <div class=" d-flex row  p-2" style={{ backgroundColor: "#ebf9f4" }}>
        <div class="col-12">
          <span class="text-left font-14-18">Giftcard Amount</span>
          <span class="float-right font-14-18">BTC Value</span>
          <br />
        </div>

        <div class="col-12">
          <span>$25</span>
          <span class="float-right">0.000183411 / $20.66</span>
        </div>
      </div>
      <div className=" d-flex row mt-2 ">
        <div
          className="col-6  p-3 text-center"
          style={{ backgroundColor: "#eaecf3 " }}>
          <FormGroup check className="float-right">
            <Input type="checkbox" />
          </FormGroup>
          <img src="/assets/images/home/btc.png" />
          <br />
          MYBTC
        </div>
      </div>
      <button
        className="btn primary-btn btn-default text-uppercase mt-3"
        onClick={(e) => {
          e.preventDefault();

          props.isClicked();
        }}>
        select
      </button>
    </div>
  );
};
export default selectWallet;
