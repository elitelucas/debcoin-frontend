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

const AccordionElementSection = () => {
  const [condition, setCondition] = useState("1st");
  const [isFirstOpen, setFirstOpen] = useState(false);
  const [isSecondOpen, setSecondOpen] = useState(false);
  const [isThirdOpen, setThirdOpen] = useState(false);
  const [isFourthOpen, setFourthOpen] = useState(false);
  const [isFifthOpen, setFifthOpen] = useState(false);

  const toggle1 = () => setFirstOpen(!isFirstOpen);
  const toggle2 = () => setSecondOpen(!isSecondOpen);
  const toggle3 = () => setThirdOpen(!isThirdOpen);
  const toggle4 = () => setFourthOpen(!isFourthOpen);
  const toggle5 = () => setFifthOpen(!isFifthOpen);
  const width = { width: "45px", height: "45px", backgroundColor: "#333D7A" };
  const clicked = () => [console.log("clicked")];
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
            <StartYourOrder isClicked={() => setCondition("2nd")} />
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
            <VerifySms isClicked={() => setCondition("3rd")} />
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
            <SelectWallet isClicked={() => setCondition("4th")} />
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
            <UploadImages isClicked={() => setCondition("5th")} />
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
            <GiftCardInformation isClicked={() => setCondition("1st")} />
          </CardBody>
        </Collapse>
      </>
    );
  }

  return (
    <div className="w-100 h-50 mt-sm">
      <Card
        className="shadow  w-95 m-auto"
        style={{ width: "95%", zIndex: "9999" }}>
        {cardToShow}
      </Card>
    </div>
  );
};

export default AccordionElementSection;
