import React,{useState,useEffect,useContext} from "react";
import {AuthContext} from '../../../../utils/auth';
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Spinner,
} from "reactstrap";
import Router  from 'next/router';
const startYourOrder = (props) => {
  const [count,setCount]=useState(30);
  const [btc,setBtc]=useState(0);
  const [usd,setUsd]=useState(0);
  let timer1;
  const calc_btc=(e)=>{
    setUsd(e.target.value);
    setBtc(Math.floor(100000000*parseFloat(e.target.value)/parseFloat(props.price))/100000000);
  }
  const calc_usd=(e)=>{
    setBtc(e.target.value);
    setUsd(Math.floor(100000000*parseFloat(e.target.value)*parseFloat(props.price))/100000000);
  }
  useEffect(() => {
    props.getRate();
 
  },[]);
  useEffect(() => {
    timer1=setInterval(async ()=>{
      if(count-1<=0){
        console.log(count);
        props.getRate();
        setCount(30);
      }else{
        let aa=count-1;
        setCount(aa);
      }
     
    },1000);
    
    
    return ()=>{
      clearInterval(timer1);
    };
  });
  const {isAuthenticated}=useContext(AuthContext);
  return (
    <div>
      <div
        class=" d-flex row  p-2 w-100"
        style={{ backgroundColor: "#ebf9f4" }}>
        <div class="col-12 ">
          <span class="text-left font-14-18" style={{}}>
            <i class="fab fa-btc pr-2"></i>Bitcoins
          </span>
  <span class="float-right font-14-18">1BTC = ${props.price}USD</span>
          <br />
        </div>

        <div class="col-12">
          <span>Bitcoin price has all Conversion Rate fees included</span>
          <span class="float-right">{count}s</span>
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
                  <Input type="number" min={25} value={usd} name="usd" id="usd" placeholder="USD" onChange={calc_btc} />
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
                  <Input type="number" value={btc} name="BTC" id="BTC" placeholder="BTC" onChange={calc_usd} />
                </InputGroup>
              </Col>
            </FormGroup>
            <Button
              className="btn primary-btn btn-default text-uppercase mt-0"
              disabled={props.isLoading}
              onClick={(e) => {
                e.preventDefault();
                if(isAuthenticated())
                  props.isClicked();
                else
                  Router.push('/login');
              }}>
              {props.isLoading ? (
                <Spinner size="sm" color="primary" />
              ) : (
                "Buy Bitcoins"
              )}
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default startYourOrder;
