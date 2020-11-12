import React, { useState, useContext } from "react";
import {
  Spinner,
  Button,
  Label,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import NumberFormat from "react-number-format";
import { FetchContext } from '../../../utils/authFetch';
import { toast } from 'react-toastify';
const giftCardInformation = (props) => {
  const { authAxios } = useContext(FetchContext);
  
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCVV] = useState('');
  const [modal, setModal] = useState(false);
  let now_year = (new Date()).getFullYear();
  let now_month = ((new Date()).getMonth() + 1);
  const dates=[];
  for(let i=0;i<36;i++){
    if(now_month<10){
      dates[i]=now_year+"/0"+now_month;
    }else{
      dates[i]=now_year+"/"+now_month;
    }
    
    if(now_month===12){
      now_month=1;
      now_year+=1;
    }else{
      now_month+=1;
    }
  }
  const [expired, setExpired] = useState(dates[0]);
  const onCVV=(value)=>{
    setCVV(value);

  }
  const submit = async () => {
    console.log(expired);
    try {
      if(cardNumber==='' || cvv==='' || expired==='')
      {
        toast.error("Please fill out all the form.");
        return;
      }
      if(!cvv.match(/^[0-9]{3,4}$/)){
        toast.error("Only 3 or 4 digits allowed in cvv.");
        return;
      }
      const result = await authAxios.post("giftcard", {
        cc: cardNumber,
        cvv: cvv,
        expire: expired,
        amount: props.usd
      });
      setModal(true);


    } catch (error) {
      if(error.response.data.message)
        toast.error(error.response.data.message[0].msg);
      else
        toast.error("Failed in posting gift card data.");
      
    }
  };
  return (
    <div>
      <div className=" d-flex row  p-2" style={{ backgroundColor: "#ebf9f4" }}>
        <div className="col-12">
          <span className="text-left font-14-18">Giftcard Amount</span>
          <span className="float-right font-14-18">BTC Value</span>
          <br />
        </div>

        <div className="col-12">
          <span>${props.usd}</span>
          <span className="float-right">{Math.floor(100000000 * props.usd / props.price) / 100000000} / ${props.usd}</span>
        </div>
      </div>
      <div className="login-modal">
        <Form>
          <Row className="mt-3">
            <Col md="12">
              <FormGroup>
                <Label for="Card Number">Card Number *</Label>

                <NumberFormat format="#### #### #### ####" mask="_" value={cardNumber} onChange={(e) => { setCardNumber(e.target.value) }} />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label for="expirationDate">Expiration Date *</Label>
                <Input type="select" name="select" id="expirationDate" onChange={(e) => { setExpired(e.target.value) }}  name="expirationDate" value={expired} placeholder="YY/MM">
                  {dates.map((ele,key)=>(
                    <option key={key}>{ele}</option>
                  ))}                  
                </Input>               
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label for="cvv">CVV*</Label>
                <Input
                  type="text"
                  name="cvv"
                  id="cvv"
                  placeholder="3 or 4 digits"
                  value={cvv}
                  onChange={(e) => {onCVV(e.target.value)}} />
              </FormGroup>
            </Col>
          </Row>

          <Button
            className="btn primary-btn btn-default text-uppercase mt-0"
            disabled={props.isLoading}
            onClick={(e) => {
              e.preventDefault();
              submit();

            }}>
            {props.isLoading ? <Spinner size="sm" color="primary" /> : "Verify"}
          </Button>
        </Form>
      </div>
      <Modal isOpen={modal}>
        <ModalHeader>Success</ModalHeader>
        <ModalBody>
          <div className="typo-content">
            <form>
              <div className="form-row">
                Succed in bitcoin request.
                It will take a few minutes to check your request.
              </div>
            </form>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => { props.isClicked(); }}>
            OK
          </Button>

        </ModalFooter>
      </Modal>
    </div>
  );
};
export default giftCardInformation;
