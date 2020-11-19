import React,{useState,useEffect,useContext} from "react";
import {AuthContext} from '../../../utils/auth';
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
import { toast } from 'react-toastify';
const startYourOrder = (props) => {
  console.log(props.seconds);
  const [count,setCount]=useState((30-Math.floor(parseInt(props.seconds)/1000)));
  const [btc,setBtc]=useState(0);
  const [usd,setUsd]=useState(0);
  let timer1;
  const calc_btc=(e)=>{
    setUsd(e.target.value);
    setBtc(Math.floor(100000000*parseFloat(e.target.value)/parseFloat(props.price))/100000000);
  }
  const calc_usd=(e)=>{
    setBtc(e.target.value);
    setUsd(Math.floor(100*parseFloat(e.target.value)*parseFloat(props.price))/100);
  }
  useEffect(() => {
    props.getRate();
 
  },[]);
  useEffect(() => {
    setUsd(props.amount);
    setBtc(Math.floor(100000000*parseFloat(props.amount)/parseFloat(props.price))/100000000);
  },[props.amount,props.price]);
  useEffect(() => {
    timer1=setInterval(async ()=>{
      if(count-1<=0){
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
        className=" d-flex row  p-2 w-100"
        style={{ backgroundColor: "#ebf5ff", marginLeft: '0', marginRight: '0' }}>
        <div className="col-12 ">
          <span className="text-left font-14-18" style={{}}>
            <i className="fa fa-btc pr-2"></i>Bitcoins
          </span>
  <span className="float-right font-14-18">1BTC = ${props.price}USD</span>
          <br />
        </div>

        <div className="col-12">
          <span>Bitcoin price has all Conversion Rate fees included</span>
          <span className="float-right">{count}s</span>
        </div>
      </div>
      <div className="col-12 mt-3">
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
                  <Input type="number" style={{backgroundColor:'white'}} min={25} value={usd} name="usd" id="usd" placeholder="USD" onChange={calc_btc} />
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
                  <Input type="number" disabled value={btc} name="BTC" id="BTC" placeholder="BTC" />
                </InputGroup>
              </Col>
            </FormGroup>
            <Button
              className="btn primary-btn btn-default text-uppercase mt-0"
              disabled={props.isLoading}
              onClick={(e) => {
                e.preventDefault();
                if(isAuthenticated()){
                  if(usd<25 || usd>props.allowed)
                  {
                    toast.error("Only 25$ ~ "+props.allowed+"$ allowed at a time!");
                    return;
                  }
                  props.isClicked(usd);
                }else
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
