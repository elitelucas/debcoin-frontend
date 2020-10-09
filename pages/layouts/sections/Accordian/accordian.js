import React, { useState, useCallback } from "react";
import StartYourOrder from "./StartYourOrder";
import VerifySms from "./VerifySms";
import SelectWallet from "./selectWallet";
import UploadImages from "./uploadImages";
import GiftCardInformation from "./GiftCardInformation";
import "react-light-accordion/demo/css/index.css";

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

const AccordionElementSection = (props) => {
  const [condition, setCondition] = useState("1st");

  const width = { width: "45px", height: "45px", backgroundColor: "#333D7A" };
  const [isLoading, setIsLoading] = useState(false);

  let cardToShow = "";

  if (condition === "1st") {
    cardToShow = (
      <>
        <CardHeader className="bg-white">
          <div>
            <div class=" p-3 d-flex">
              <div class="rounded-circle text-white mr-4" style={width}>
                <span
                  class="text-white "
                  style={{ fontSize: "2rem", padding: "15px" }}>
                  1
                </span>
              </div>
              <span class="h6 align-self-center mb-0">START YOUR ORDER</span>
            </div>
          </div>
        </CardHeader>
        <Collapse isOpen={true}>
          <CardBody className="w-100">
            <StartYourOrder
              price={props.price}
              getRate={props.getRate}
              isClicked={() => {
                setIsLoading(true);
                setTimeout(() => {
                  setCondition("2nd"), setIsLoading(false);
                }, 1500);
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
            <div class=" p-3 d-flex">
              <div class="rounded-circle  text-white mr-4" style={width}>
                <span
                  class="text-white "
                  style={{ fontSize: "2rem", padding: "12px" }}>
                  2
                </span>
              </div>
              <span class="h6 align-self-center mb-0">Verify SMS</span>
            </div>
          </div>
        </CardHeader>
        <Collapse isOpen={true}>
          <CardBody>
            <VerifySms
              isClicked={() => {
                setIsLoading(true);
                setTimeout(() => {
                  setCondition("3rd"), setIsLoading(false);
                }, 1500);
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
            <div class=" p-3 d-flex">
              <div class="rounded-circle  text-white mr-4" style={width}>
                <span
                  class="text-white "
                  style={{ fontSize: "2rem", padding: "12px" }}>
                  3
                </span>
              </div>
              <span class="h6 align-self-center mb-0">Select Wallet</span>
            </div>
          </div>
        </CardHeader>
        <Collapse isOpen={true}>
          <CardBody>
            <SelectWallet
              isClicked={() => {
                setIsLoading(true);
                setTimeout(() => {
                  setCondition("4th"), setIsLoading(false);
                }, 1500);
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
            <div class=" p-3 d-flex">
              <div class="rounded-circle  text-white mr-4" style={width}>
                <span
                  class="text-white "
                  style={{ fontSize: "2rem", padding: "12px" }}>
                  4
                </span>
              </div>
              <span class="h6 align-self-center mb-0">Upload Images</span>
            </div>
          </div>
        </CardHeader>
        <Collapse isOpen={true}>
          <CardBody>
            <UploadImages
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
            <div class=" p-3 d-flex">
              <div class="rounded-circle text-white mr-4" style={width}>
                <span
                  class="text-white "
                  style={{ fontSize: "2rem", padding: "12px" }}>
                  5
                </span>
              </div>
              <span class="h6 align-self-center mb-0">
                Gift card Information
              </span>
            </div>
          </div>
        </CardHeader>
        <Collapse isOpen={true}>
          <CardBody>
            <GiftCardInformation
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
        style={{ width: "95%", zIndex: "999" }}>
        {cardToShow}
      </Card>
    </div>
  );
};

export default AccordionElementSection;
