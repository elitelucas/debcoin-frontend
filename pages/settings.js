import React, { useEffect, useState,useContext } from "react";
import Head from "next/head";
// import Custom Components
import Header from "./layouts/sections/Header/header";
import FooterSection from "./layouts/sections/Footer/footer";
import Profile from "./layouts/sections/Settings/Profile";
import BtcWallet from "./layouts/sections/Settings/BtcWallet";
import Verification from "./layouts/sections/Settings/Verification";
import Account from "./layouts/sections/Settings/Account";
import {
  Row,
  Col,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Container,
  Modal,
  Button,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Input,
} from "reactstrap";
import states from "./layouts/sections/Settings/states";
import { AuthContext } from '../utils/auth';
import classnames from "classnames";
import { FetchContext } from '../utils/authFetch';
import Router from "next/router";

const settings = () => {
  const {authState,isAuthenticated,loading,logout}=useContext(AuthContext);
  const [tier2Text,setTier2Text]=useState({fname:'',lname:'',address:'',street:'',zip:'',city:'',state:''});
  const { authAxios } = useContext(FetchContext);
  const [userInfo, setUserInfo] = useState({});
  const [sms, setSMS] = useState("");
  const [smsModal, setSMSModal] = useState(false);
  const [tier2, setTier2] = useState(null);
  const [tier2Modal, setTier2Modal] = useState(false);
  const [tier3, setTier3] = useState(null);
  const [tier3Modal, setTier3Modal] = useState(false);
  const [poaProceed, setPoaProceed] = useState(false);
  const [idProceed, setIdProceed] = useState(1);
  const [modal2, setModal2] = useState(false);
  const toggleModal2 = () => setModal2(!modal2);
  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal(!modal);
  const verify=async (level)=>{

    if(level===1){
      try {
        const { data } = await authAxios.get('verify');
        setSMSModal(true);
      } catch (error) {
        console.log(error);        
      }  
      
    }else if(level===2){
      setTier2Modal(true);
    }else{
      setTier3Modal(true);
    }
  };
  const smsToggle=()=>{
    setSMSModal(!smsModal);
  }
  const verifySMS=async ()=>{
    try {
      const { data } = await authAxios.post('verify',{
        code:sms
      });
      
      setUserInfo({
        ...userInfo,
        phoneVerified:true
      });
    } catch (error) {
      console.log(error);        
    }  
    setSMSModal(false);
  };

  const tier2Toggle=()=>{
    setTier2Modal(!tier2Modal);
  };
  const selectTier2=(event)=>{
    setTier2(event.target.files[0])
  };
  const tier2Submit=async ()=>{
    try{
      const formData = new FormData();      
      // Update the formData object 
      formData.append( 
        "tier2", 
        tier2, 
        tier2.name 
      ); 
      formData.set("fname", tier2Text.fname);
      formData.set("lname", tier2Text.lname);
      formData.set("address", tier2Text.address);
      formData.set("city", tier2Text.city);
      formData.set("zip", tier2Text.zip);
      formData.set("state", tier2Text.state);
      formData.set("street", tier2Text.street);
      // Details of the uploaded file 
      
      // Request made to the backend api 
      // Send formData object 
      await authAxios.post("tier2", formData); 
      setIdProceed(1);
    }catch(error){

    }
    setTier2Modal(false);
  };
  const tier3Toggle=()=>{
    setPoaProceed(false);
    setTier3Modal(!tier3Modal);
  };
  const selectTier3=(event)=>{
    setTier3(event.target.files[0])
  }
  const tier3Submit=async ()=>{
    try{
      const formData = new FormData();      
      // Update the formData object 
      formData.append( 
        "tier3", 
        tier3, 
        tier3.name 
      ); 
      

      
      // Request made to the backend api 
      // Send formData object 
      await authAxios.post("tier3", formData); 
    }catch(error){

    }
    setTier3Modal(false);
    
  };

  const removeWallet=async (key)=>{
    try {
      const { data } = await authAxios.delete('wallet/'+userInfo.wallet[key].title);
      setUserInfo({
        ...userInfo,
        wallet:data
      });
    } catch (error) {
      console.log(error);  
    }  
  };
  const addWallet=async (title, address)=>{
    try {
      const { data } = await authAxios.post('wallet/',{
        title,address
      });
      setUserInfo({
        ...userInfo,
        wallet:data
      });
    } catch (error) {
      console.log(error);
  
    }  
  }
  useEffect(()=>{ 
    if(loading){    
    }else{
      if(!isAuthenticated())
        Router.push('/login');
      else{
        (async ()=>{
          try {
            const { data } = await authAxios.get('myInfo');
            setUserInfo(data);
          } catch (error) {
            console.log(error);        
          }  
        })();       
      }
    }   
  },[loading]);
  useEffect(() => {
    document.body.style.setProperty("--primary", "#333D7A");
    document.body.style.setProperty("--secondary", "##FAEBEE");
    document.body.style.setProperty("--light", "#f3f1e8");
    document.body.style.setProperty("--dark", "#9647DB");
  });
  const submitProfile=async (email,phoneNumber)=>{
    try {
      const { data } = await authAxios.put('profile',{
        email,phoneNumber
      });
      setUserInfo({
        ...userInfo,
        email,phoneNumber
      });
    } catch (error) {
      console.log(error);     
    }  
  };
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  const submitAccount=async (old_password,new_password)=>{
    try {
      const { data } = await authAxios.put('account',{
        old_password,new_password
      });
      logout();
      Router.push('/login');
      
    } catch (error) {
      console.log(error);     
    }
  };
  
  return (
    <div>
      <Head>
        <title>DebCoins </title>
      </Head>
      <Header className="saas2" isHome={false} />
      <Container style={{ marginBottom: "12rem" }}>
        <Row>
          <Col
            sm="10"
            className="ml-auto mr-auto"
            style={{ marginTop: "5rem" }}>
            <section className="app2 team-section pb-5">
              <Col md="3" sm="6" className="text-center teams">
                <div className="our-team d-flex">
                  <div className="set-relative">
                    <div className="border-around overflow-hide m-auto">
                      <div className="set-relative overflow-hide">
                        <img
                          alt=""
                          className="img-fluid team"
                          src="/assets/images/home/user.png"
                        />                        
                      </div>
                    </div>
                  </div>
                  <div
                    className="employee"
                    style={{ alignSelf: "center", marginLeft: " 2rem" }}>
                    <h4 className="e-name text-center">name</h4>
                  </div>
                </div>
              </Col>
            </section>
            <Nav tabs className="d-flex  flex-nowrap border-0 overFlow">
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "1" })}
                  onClick={() => {
                    toggle("1");
                  }}>
                  Profile
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "2" })}
                  onClick={() => {
                    toggle("2");
                  }}>
                  Account
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "3" })}
                  onClick={() => {
                    toggle("3");
                  }}>
                  Verification
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "4" })}
                  onClick={() => {
                    toggle("4");
                  }}>
                  BTC Wallet
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
              <Profile
                  submit={submitProfile}
                  username={
                    authState.userInfo ? authState.userInfo.username : ""
                  }
                  email={userInfo.email}
                  phoneNumber={userInfo.phoneNumber}
                />
              </TabPane>
              <TabPane tabId="2">
                <Account submit={submitAccount} />
              </TabPane>

              <TabPane tabId="3">
                <Verification phoneVerified={userInfo.phoneVerified}
                  level={userInfo.level} 
                  phoneNumber={userInfo.phoneNumber}
                  verify={verify}
                  />
              </TabPane>

              <TabPane tabId="4">
                <BtcWallet submit={addWallet} wallet={userInfo.wallet} remove={removeWallet} />
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </Container>

      <FooterSection />
      <Modal isOpen={smsModal} toggle={smsToggle}>        
        <ModalHeader>Verify your mobile number</ModalHeader>
        <ModalBody>
          <div className="typo-content">
            <p>
              Please enter the SMS we just sent to your mobile number{" "}
              {userInfo.phoneNumber}
            </p>
            <form>
              <div className="form-row mt-3">
                <div className="col-12 mb-3">
                  <label htmlFor="name">SMS CODE</label>
                  <input
                    className="form-control"
                    id="name"
                    placeholder="Enter SMS Code"
                    required=""
                    type="text"
                    value={sms}
                    onChange={(e)=>setSMS(e.target.value)}
                  />
                </div>                
              </div>
              <p>
                Didn't recieved SMS? <a onClick={() => verify(1)}>Resend</a>
              </p>
            </form>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={verifySMS}>
            Verify
          </Button>{" "}
          <Button color="secondary" onClick={smsToggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      <Modal isOpen={tier2Modal} toggle={tier2Toggle}>   
        <ModalHeader>
            {idProceed == 1 ? (
              "Address"
            ) : (
              <>
                Upload ID{" "}
                <i
                  className="fa fa-question-circle pl-2"
                  onClick={toggleModal}></i>
              </>
            )}
          </ModalHeader>     
          <ModalBody>
          {(() => {
            if (idProceed === 1) {
              return (
                <div className="typo-content">
                  <p>
                    Type the address associated with your government-issued ID
                    before uploading your photo.
                  </p>
                  <form>
                    <div className="row mt-3">
                      <div className="col-6 mb-3">
                        <label htmlFor="first name">First Name *</label>
                        <input
                          className="form-control"
                          id="name"
                          placeholder="First Name"
                          required=""
                          type="text"
                          value={tier2Text.fname}
                          onChange={(e)=>setTier2Text({...tier2Text,fname:e.target.value})}
                        />
                      </div>
                      <div className="col-6 mb-3">
                        <label htmlFor="last name">Last Name *</label>
                        <input
                          className="form-control"
                          placeholder="Last Name"
                          required=""
                          type="text"
                          value={tier2Text.lname}
                          onChange={(e)=>setTier2Text({...tier2Text,lname:e.target.value})}
                        />
                      </div>

                      <div className="col-12 mb-3">
                        <label htmlFor="address">Address *</label>
                        <input
                          className="form-control"
                          placeholder="Street Address"
                          required=""
                          type="text"
                          value={tier2Text.address}
                          onChange={(e)=>setTier2Text({...tier2Text,address:e.target.value})}
                        />
                      </div>

                      <div className="col-6 mb-3">
                        <label htmlFor="street">Street</label>
                        <input
                          className="form-control"
                          placeholder="street"
                          required=""
                          type="text"
                          value={tier2Text.street}
                          onChange={(e)=>setTier2Text({...tier2Text,street:e.target.value})}
                        />
                      </div>

                      <div className="col-6 mb-3">
                        <label htmlFor="zip">Zip *</label>
                        <input
                          className="form-control"
                          placeholder="Zip Code"
                          required=""
                          type="text"
                          value={tier2Text.zip}
                          onChange={(e)=>setTier2Text({...tier2Text,zip:e.target.value})}
                        />
                      </div>

                      <div className="col-6 mb-3">
                        <label htmlFor="city">City *</label>
                        <input
                          className="form-control"
                          placeholder="City"
                          required=""
                          type="text"
                          value={tier2Text.city}
                          onChange={(e)=>setTier2Text({...tier2Text,city:e.target.value})}
                        />
                      </div>
                      {}

                      <div className="col-6 mb-3">
                        <label htmlFor="email">State *</label>
                        <Input
                          className="form-control"
                          placeholder="State"
                          required=""
                          value={tier2Text.state}
                          onChange={(e)=>setTier2Text({...tier2Text,state:e.target.value})}
                          type="select">
                          {states.map((el) => (
                            <option key={el}>{el}</option>
                          ))}
                        </Input>
                      </div>
                    </div>
                  </form>
                </div>
              );
            } else if (idProceed === 2) {
              return (
                <>
                  <h3>Requirements</h3>
                  <p className="mt-2 mb-0">
                    <i
                      className="fa fa-check  mr-2"
                      style={{ color: "#5cc9a7" }}></i>
                    Remember to place your ID beside your receipt – and make
                    sure your receipt says “Nonrefundable Payment to Debcoins”
                    on it.
                  </p>
                  <p className="mt-2 mb-0">
                    <i
                      className="fa fa-check  mr-2"
                      style={{ color: "#5cc9a7" }}></i>
                    Make sure your ID is clear and all four corners are showing.
                  </p>

                  <p className="mt-2 mb-0">
                    <i
                      className="fa fa-check  mr-2"
                      style={{ color: "#5cc9a7" }}></i>
                    Make sure your ID is clear and all four corners are showing.
                  </p>
                  <img
                    alt=""
                    className="img-fluid team"
                    src="/assets/images/home/id.png"
                  />
                </>
              );
            } else {
              return (
                <>
                  <p>
                    Please upload your government-issued identification below.
                    An example image may be found by clicking on the “?” above.
                  </p>
                  <div className="form-row">
                    <div className="col-12 mb-3">
                      <label htmlFor="name">Please select a image</label>
                      <br />
                      <input type="file" onChange={selectTier2} />
                    </div>
                  </div>
                  <p className="mt-2 mb-0">
                    <i
                      className="fa fa-check  mr-2"
                      style={{ color: "#5cc9a7" }}></i>
                    Remember to place your ID beside your receipt – and make
                    sure your receipt says “Nonrefundable Payment to Debcoins”
                    on it.
                  </p>

                  <p className="mt-2 mb-0">
                    <i
                      className="fa fa-check  mr-2"
                      style={{ color: "#5cc9a7" }}></i>
                    Make sure your ID is clear and all four corners are showing.
                  </p>

                  <p className="mt-2 mb-0">
                    <i
                      className="fa fa-check  mr-2"
                      style={{ color: "#5cc9a7" }}></i>
                    Make sure your ID is valid and not expired.
                  </p>
                </>
              );
            }
          })()}
        </ModalBody>
        <ModalFooter>
          {(() => {
            if (idProceed === 1) {
              return (
                <Button color="primary" onClick={() => setIdProceed(2)}>
                  Proceed
                </Button>
              );
            } else if (idProceed === 2) {
              return (
                <Button color="primary" onClick={() => setIdProceed(3)}>
                  Proceed
                </Button>
              );
            } else {
              return (
                <Button color="primary" onClick={tier2Submit}>
                  Confirm
                </Button>
              );
            }
          })()}
          <Button color="secondary" onClick={tier2Toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      <Modal isOpen={tier3Modal} toggle={tier3Toggle}>     
      <ModalHeader>
          {" "}
          Proof of Address
          <i className="fa fa-question-circle pl-2" onClick={toggleModal2}></i>
        </ModalHeader>
        <ModalBody>
          {poaProceed ? (
            <>
              <p>
                Your document may be a utility bill or bank statement. Remember
                to write “Debcoins” and todays date on your document. Make sure
                your document is clear and all four corners are showing. Make
                sure that your document is not over 6 months old. Please upload
                your Proof of Address below. An example image may be found by
                clicking on the “?” above.
              </p>
              <div className="typo-content">
                <form>
                  <div className="form-row mt-3 mb-3">
                    <div className="col-12 mb-3">
                      <label htmlFor="name">Please select a image</label>
                      <br />
                      <input type="file" onChange={selectTier3} />
                    </div>
                  </div>
                </form>
              </div>

              <div>
                <p className="mt-2 mb-0">
                  <i
                    className="fa fa-check  mr-2"
                    style={{ color: "#5cc9a7" }}></i>
                  Your document may be a utility bill or bank statement.
                </p>
                <p className="mt-2 mb-0">
                  <i
                    className="fa fa-check  mr-2"
                    style={{ color: "#5cc9a7" }}></i>
                  Remember to write “Debcoins” and todays date on your document.
                </p>
                <p className="mt-2 mb-0">
                  <i
                    className="fa fa-check  mr-2"
                    style={{ color: "#5cc9a7" }}></i>
                  Make sure your document is clear and all four corners are
                  showing.
                </p>
                <p className="mt-2 mb-0">
                  <i
                    className="fa fa-check  mr-2"
                    style={{ color: "#5cc9a7" }}></i>
                  Make sure that your document is not over 6 months old.
                </p>
              </div>
            </>
          ) : (
            <div>
              <p className="mt-2 mb-0">
                <i
                  className="fa fa-check  mr-2"
                  style={{ color: "#5cc9a7" }}></i>
                Your document may be a utility bill or bank statement.
              </p>
              <p className="mt-2 mb-0">
                <i
                  className="fa fa-check  mr-2"
                  style={{ color: "#5cc9a7" }}></i>
                Remember to write “Debcoins” and todays date on your document.
              </p>
              <p className="mt-2 mb-0">
                <i
                  className="fa fa-check  mr-2"
                  style={{ color: "#5cc9a7" }}></i>
                Make sure your document is clear and all four corners are
                showing.
              </p>
              <p className="mt-2 mb-0">
                <i
                  className="fa fa-check  mr-2"
                  style={{ color: "#5cc9a7" }}></i>
                Make sure that your document is not over 6 months old.
              </p>
              <div className="text-center">
                <img
                  alt=""
                  className="img-fluid team"
                  src="/assets/images/home/poa.png"
                  style={{ width: "60%" }}
                />
              </div>{" "}
            </div>
          )}
        </ModalBody>
        <ModalFooter>
          {poaProceed ? (
            <Button color="primary" onClick={tier3Submit}>
              Confirm
            </Button>
          ) : (
            <Button color="primary" onClick={() => setPoaProceed(true)}>
              Proceed
            </Button>
          )}
          <Button color="secondary" onClick={tier3Toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modal2} toggle={toggleModal2}>
        <ModalHeader toggle={toggleModal2}>Proof of Address</ModalHeader>
        <ModalBody className="text-center">
          <img
            alt=""
            className="img-fluid team"
            src="/assets/images/home/poa.png"
            style={{ width: "60%" }}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleModal2}>
            Close
          </Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>ID Verification</ModalHeader>
        <ModalBody>
          <img
            alt=""
            className="img-fluid team"
            src="/assets/images/home/id.png"
          />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleModal}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default settings;
