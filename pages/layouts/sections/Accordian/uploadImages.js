import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Spinner,
} from "reactstrap";

const uploadImages = (props) => {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const [modalFor, setModalFor] = useState(false);
  const [modalFogc, setModalFogc] = useState(false);
  const [modalBogc, setModalBogc] = useState(false);

  const toggleFor = () => setModalFor(!modalFor);
  const toggleFogc = () => setModalFogc(!modalFogc);
  const toggleBogc = () => setModalBogc(!modalBogc);
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
      <hr />
      <p class="text-left ">
        Front of reciept
        <i
          onClick={toggleFor}
          className="fa fa-question-circle pl-3 mb-3 font-14-18"
          style={{
            cursor: "pointer",
          }}></i>
      </p>
      <Modal isOpen={modalFor} toggle={toggleFor}>
        <ModalHeader toggle={toggleFor}>Front of Receipt</ModalHeader>
        <ModalBody className="text-center">
          <img
            src="/assets/images/home/receipt.jpg"
            style={{ maxHeight: "350px" }}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleFor}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      <p class="text-left ">
        Front of Gift Card beside Reciept
        <i
          onClick={toggleFogc}
          className="fa fa-question-circle pl-3 mb-3 font-14-18"
          style={{
            cursor: "pointer",
          }}></i>
      </p>
      <Modal isOpen={modalFogc} toggle={toggleFogc}>
        <ModalHeader toggle={toggleFogc}>
          Front of Gift Card beside Reciept
        </ModalHeader>
        <ModalBody>
          <img
            src="/assets/images/home/card-front.png"
            style={{ maxHeight: "350px" }}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleFogc}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      <p class="text-left ">
        Back of Gift Card beside Receipt
        <i
          onClick={toggleBogc}
          className="fa fa-question-circle pl-3 mb-3 font-14-18"
          aria-hidden="true"
          style={{
            cursor: "pointer",
          }}></i>
      </p>
      <Modal isOpen={modalBogc} toggle={toggleBogc}>
        <ModalHeader toggle={toggleBogc}>
          Back of Gift Card beside Receipt
        </ModalHeader>
        <ModalBody>
          <img
            src="/assets/images/home/card-back.png"
            style={{ maxHeight: "350px" }}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleBogc}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      <small>
        Upload a picture of the back side of your prepaid gift card beside the
        written reeipt.
      </small>
      <div
        {...getRootProps()}
        className="p-5 mt-2 text-center"
        style={{
          border: "1px dotted #aaaaaa",
          cursor: "pointer",
        }}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Tap to add a photo.</p>
        )}
      </div>
      <Button
        className="btn primary-btn btn-default text-uppercase mt-3"
        disabled={props.isLoading}
        onClick={(e) => {
          e.preventDefault();

          props.isClicked();
        }}>
        {props.isLoading ? <Spinner size="sm" color="primary" /> : "Upload"}
      </Button>
    </div>
  );
};
export default uploadImages;
