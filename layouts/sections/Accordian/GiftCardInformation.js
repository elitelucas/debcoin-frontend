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
  const dates=[];
  for(let i=1;i<11;i++){
    dates[i-1]=now_year+i;
  }
  const [expired, setExpired] = useState({
    year:now_year+1,
    month:'01'
  });
  const onCVV=(value)=>{
    setCVV(value);
  };
  const handleExp=(val,type)=>{
    if(type==0)
      setExpired({
        ...expired,
        month:val
      });
    else
      setExpired({
        ...expired,
        year:val
      });
  };
  const submit = async () => {
    try {
      if(cardNumber==='' || cvv==='' || expired==='')
      {
        toast.error("Please fill out all the form.");
        return;
      }
      let tmp_cvv=parseInt(cvv);
      tmp_cvv+="";
      if(!tmp_cvv.match(/^[0-9]{3,4}$/)){
        toast.error("Only 3 or 4 digits allowed in cvv.");
        return;
      }
      const result = await authAxios.post("giftcard", {
        cc: cardNumber,
        cvv: tmp_cvv,
        expire: expired.year+"/"+expired.month,
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
      <div className=" d-flex row  p-2" style={{ backgroundColor: "#ebf5ff" }}>
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
                <br />
                <Input style={{display:'inline-block',width:'45%',marginRight:'5px'}} type="select" name="select" id="expirationDate1" onChange={(e) => { handleExp(e.target.value,0) }}  name="expirationDate1" value={expired.month} placeholder="MM">
                  <option >01</option>
                  <option >02</option>   
                  <option >03</option>   
                  <option >04</option>                  
                  <option >05</option>   
                  <option >06</option>   
                  <option >07</option>   
                  <option >08</option>   
                  <option >09</option>   
                  <option >10</option>   
                  <option >11</option>   
                  <option >12</option>                     
                </Input>   
                <Input style={{display:'inline-block',width:'45%'}} type="select" name="select" id="expirationDate2" onChange={(e) => { handleExp(e.target.value,1) }}  name="expirationDate2" value={expired.year} placeholder="YY">
                  {dates.map((ele,key)=>(
                    <option key={key}>{ele}</option>
                  ))}                  
                </Input>               
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label for="cvv">CVV*</Label>
                <NumberFormat placeholder="3 or 4 digits" name="cvv"
                  id="cvv" format="####" mask="_" value={cvv} onChange={(e) => { onCVV(e.target.value) }} />                
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
