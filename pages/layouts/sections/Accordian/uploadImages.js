import React, { useState, useCallback,useContext } from "react";
import { useDropzone } from "react-dropzone";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Spinner,
} from "reactstrap";
import {FetchContext} from '../../../../utils/authFetch';
const uploadImages = (props) => {
  const maxSize = 10485760;
  const [images,setImages]=useState(null);
  const {authAxios}=useContext(FetchContext);
  const onDrop = useCallback(acceptedFiles => {
    // console.log(acceptedFiles);
    setImages(acceptedFiles);
  }, []);

  const { isDragActive, getRootProps, getInputProps, isDragReject, acceptedFiles, rejectedFiles } = useDropzone({
    onDrop,
    accept: 'image/png, image/jpg, image/jpeg',
    minSize: 0,
    maxSize,
  });

  const isFileTooLarge = rejectedFiles && rejectedFiles.length > 0 && rejectedFiles[0].size > maxSize;
  
  const [modalFor, setModalFor] = useState(false);
  const [modalFogc, setModalFogc] = useState(false);
  const [modalBogc, setModalBogc] = useState(false);
  const toggleFor = () => setModalFor(!modalFor);
  const toggleFogc = () => setModalFogc(!modalFogc);
  const toggleBogc = () => setModalBogc(!modalBogc);
  const submit=async ()=>{
    try{
      console.log('here');
      const formData = new FormData();      
      // Update the formData object 
      for(let i=0;i<3;i++){
        formData.append( 
          "image", 
          images[i] 
        );
      }
      
     
      // formData.set("usd", props.usd);
      // formData.set("wallet", props.wallet.address);      
      
      const result=await authAxios.post("receipt", formData); 
      props.isClicked();

    }catch(error){
      console.log(error);
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
          <span className="float-right">{Math.floor(100000000*props.usd/props.price)/100000000} / ${props.usd}</span>
        </div>
      </div>
      <hr />
      <p className="text-left ">
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
      <p className="text-left ">
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
      <p className="text-left ">
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
      <div>
        <div className="container text-center mt-5">
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {!isDragActive && 'Click here or drop a file to upload!'}
            {isDragActive && !isDragReject && "Drop it like it's hot!"}
            {isDragReject && "File type not accepted, sorry!"}
            {isFileTooLarge && (
              <div className="text-danger mt-2">
                File is too large.
              </div>
            )}
          </div>
        </div>
        <ul className="list-group mt-2">
          {acceptedFiles.length > 0 && acceptedFiles.map(acceptedFile => (
            <li className="list-group-item list-group-item-success">
              {acceptedFile.name}
            </li>
          ))}
        </ul>
      </div>
      <Button
        className="btn primary-btn btn-default text-uppercase mt-3"
        disabled={props.isLoading}
        onClick={(e) => {
          e.preventDefault();
          submit();
          
        }}>
        {props.isLoading ? <Spinner size="sm" color="primary" /> : "Upload"}
      </Button>
    </div>
  );
};
export default uploadImages;
