import React, { useState, useContext, useEffect } from "react";
import StartYourOrder from "./StartYourOrder";
import VerifySms from "./VerifySms";
import SelectWallet from "./selectWallet";
import UploadImages from "./uploadImages";
import GiftCardInformation from "./GiftCardInformation";
import "react-light-accordion/demo/css/index.css";
import { AuthContext } from '../../../utils/auth';
import {
  Collapse,
  CardBody,
  Card,
  CardHeader,
  Label,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
} from "reactstrap";
import { FetchContext } from '../../../utils/authFetch';
import { toast } from 'react-toastify';
const AccordionElementSection = (props) => {
  const [condition, setCondition] = useState("1st");
  const [usd, setUSD] = useState(props.amount);
  const width = { width: "45px", height: "45px", backgroundColor: "#333D7A" };
  const [isLoading, setIsLoading] = useState(false);
  const { loading } = useContext(AuthContext);
  const { authAxios } = useContext(FetchContext);
  const [wallet, setWallet] = useState('');
  const [id, setID] = useState(null);
  let cardToShow = "";
  const submitAmount = async (amount) => {
    try {
      const { data } = await authAxios.post('amount', { amount });
      setID(data);
      setCondition("3rd");
      setIsLoading(false);
      // setTimeout(() => {

      //   verifyReq();
      //   setCondition("2nd");

      //   setIsLoading(false);
      // }, 500);
    } catch (error) {
      console.log(error);
      toast.error("Failed in submition.")
      setCondition("1st");
    }
    setIsLoading(false);
  }
  const verifyReq = async () => {
    try {
      const { data } = await authAxios.get('smsVerify');
    } catch (error) {
      toast.error("Failed in OTP verification.");
      setCondition("1st");
    }
  }
  const verifyResult = async (sms) => {
    try {
      const { data } = await authAxios.post('smsVerify', {
        id: id,
        code: sms
      });


      setCondition("3rd");
      setIsLoading(false);
    } catch (error) {
      toast.error("OTP failed");
      setIsLoading(false);
      setCondition("1st");
    }
  }
  const submitWallet =async (wallet) => {

    try {
      const { data } = await authAxios.post('selectWallet', {
        wallet_name: wallet.title,
        wallet_address: wallet.address
      });
      setWallet(wallet);
      setTimeout(() => {
        setCondition("4th"), setIsLoading(false);
      }, 1500);

    } catch (error) {
      toast.error("Failed in selecting a wallet.")
      setCondition("1st");
    }
  }

  if (condition === "1st") {
    cardToShow = (
      <>
        <CardHeader className="bg-white">
          <div>
            <div className=" p-3 d-flex">
              <div className="rounded-circle text-white mr-4" style={width}>
                <span
                  className="text-white "
                  style={{ fontSize: "2rem", padding: "15px" }}>
                  1
                </span>
              </div>
              <span className="h6 align-self-center mb-0">START YOUR ORDER</span>
            </div>
          </div>
        </CardHeader>
        <Collapse isOpen={true}>
          <CardBody className="w-100">
            <StartYourOrder
              amount={props.amount}
              allowed={props.allowed}
              price={props.price}
              getRate={props.getRate}
              isClicked={(param) => {
                setUSD(param);
                setIsLoading(true);
                submitAmount(param);

              }}
              isLoading={isLoading}
            />
          </CardBody>
        </Collapse>
      </>
    );
  } else if (condition === "2nd") {
    cardToShow = (
      <>
        <CardHeader className="bg-white">
          <div>
            <div className=" p-3 d-flex">
              <div className="rounded-circle  text-white mr-4" style={width}>
                <span
                  className="text-white "
                  style={{ fontSize: "2rem", padding: "12px" }}>
                  2
                </span>
              </div>
              <span className="h6 align-self-center mb-0">Verify SMS</span>
            </div>
          </div>
        </CardHeader>
        <Collapse isOpen={true}>
          <CardBody>
            <VerifySms phoneNumber={props.userInfo.phoneNumber}
              isClicked={(sms) => {
                setIsLoading(true);
                verifyResult(sms);
              }}
              isLoading={isLoading}
            />
          </CardBody>
        </Collapse>
      </>
    );
  } else if (condition === "3rd") {
    cardToShow = (
      <>
        <CardHeader className="bg-white">
          <div>
            <div className=" p-3 d-flex">
              <div className="rounded-circle  text-white mr-4" style={width}>
                <span
                  className="text-white "
                  style={{ fontSize: "2rem", padding: "12px" }}>
                  3
                </span>
              </div>
              <span className="h6 align-self-center mb-0">Select Wallet</span>
            </div>
          </div>
        </CardHeader>
        <Collapse isOpen={true}>
          <CardBody>
            <SelectWallet
              addWallet={props.addWallet}
              price={props.price}
              usd={usd}
              wallet={props.userInfo.wallet}
              isClicked={(wallet) => {
                setIsLoading(true);
                submitWallet(wallet);

              }}
              isLoading={isLoading}
            />
          </CardBody>
        </Collapse>
      </>
    );
  } else if (condition === "4th") {
    cardToShow = (
      <>
        <CardHeader className="bg-white">
          <div>
            <div className=" p-3 d-flex">
              <div className="rounded-circle  text-white mr-4" style={width}>
                <span
                  className="text-white "
                  style={{ fontSize: "2rem", padding: "12px" }}>
                  4
                </span>
              </div>
              <span className="h6 align-self-center mb-0">Upload Images</span>
            </div>
          </div>
        </CardHeader>
        <Collapse isOpen={true}>
          <CardBody>
            <UploadImages
              price={props.price}
              usd={usd}
              wallet={props.userInfo.wallet[wallet]}
              isClicked={() => {
                setIsLoading(true);
                setTimeout(() => {
                  setCondition("5th"), setIsLoading(false);
                }, 1500);
              }}
              isLoading={isLoading}
            />
          </CardBody>
        </Collapse>
      </>
    );
  } else if (condition == "5th") {
    cardToShow = (
      <>
        <CardHeader className="bg-white">
          <div>
            <div className=" p-3 d-flex">
              <div className="rounded-circle text-white mr-4" style={width}>
                <span
                  className="text-white "
                  style={{ fontSize: "2rem", padding: "12px" }}>
                  5
                </span>
              </div>
              <span className="h6 align-self-center mb-0">
                Gift card Information
              </span>
            </div>
          </div>
        </CardHeader>
        <Collapse isOpen={true}>
          <CardBody>
            <GiftCardInformation
              price={props.price}
              usd={usd}
              isClicked={() => {
                setIsLoading(true);
                setTimeout(() => {
                  setCondition("1st"), setIsLoading(false);
                }, 1500);
              }}
              isLoading={isLoading}
            />
          </CardBody>
        </Collapse>
      </>
    );
  }

  return (
    <div className="w-100 h-50 mt-sm">
      <Card
        className="shadow  w-95 m-auto"
        style={{ width: "95%", zIndex: "100" }}>
        {cardToShow}
      </Card>
    </div>
  );
};

export default AccordionElementSection;
