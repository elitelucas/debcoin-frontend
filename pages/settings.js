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
  Container, Modal, Button, ModalBody, ModalFooter 
} from "reactstrap";
import { AuthContext } from '../utils/auth';
import classnames from "classnames";
import { FetchContext } from '../utils/authFetch';
import Router from "next/router";
import verifySms from "./layouts/sections/Accordian/VerifySms";
const settings = () => {
  const {authState,isAuthenticated,loading,logout}=useContext(AuthContext);
  
  const {authAxios}=useContext(FetchContext);
  const [userInfo,setUserInfo]=useState({});
  const [sms,setSMS]=useState('');
  const [smsModal,setSMSModal]=useState(false);
  const [tier2,setTier2]=useState(null);
  const [tier2Modal,setTier2Modal]=useState(false);
  const [tier3,setTier3]=useState(null);
  const [tier3Modal,setTier3Modal]=useState(false);

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
  }

  const tier2Toggle=()=>{
    setTier2Modal(!tier2Modal);
  }
  const selectTier2=(event)=>{
    setTier2(event.target.files[0])
  }
  const tier2Submit=async ()=>{
    try{
      const formData = new FormData();      
      // Update the formData object 
      formData.append( 
        "tier2", 
        tier2, 
        tier2.name 
      ); 
      
      // Details of the uploaded file 
      
      // Request made to the backend api 
      // Send formData object 
      await authAxios.post("tier2", formData); 
      
    }catch(error){

    }
    setTier2Modal(false);
  }
  const tier3Toggle=()=>{
    setTier3Modal(!tier3Modal);
  }
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
    
  }

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
  }
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
  }
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
                        <div className="overlay-team set-abs">
                          <img
                            alt=""
                            className="img-fluid wave"
                            src="/assets/images/app_landing2/team/hover-wave-black.png"
                          />
                        </div>
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
                <Profile submit={submitProfile} username={authState.userInfo? authState.userInfo.username : ''} email={userInfo.email} phoneNumber={userInfo.phoneNumber} />
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
        <ModalBody>
          <div className="typo-content">
            <form>
              <div className="form-row">
                <div className="col-12 mb-3">
                  <label htmlFor="name">Verify SMS</label>
                  <input
                    className="form-control"
                    id="name"
                    placeholder="SMS"
                    required=""
                    type="text"
                    value={sms}
                    onChange={(e)=>setSMS(e.target.value)}
                  />
                </div>                
              </div>
            </form>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={()=>verify(1)}>
            ReSend
          </Button>{" "}
          <Button color="success" onClick={verifySMS}>
            Verify
          </Button>{" "}
          <Button color="secondary" onClick={smsToggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      <Modal isOpen={tier2Modal} toggle={tier2Toggle}>        
        <ModalBody>
          <div className="typo-content">
            <form>
              <div className="form-row">
                <div className="col-12 mb-3">
                  <label htmlFor="name">Please select a image</label>
                  <br />
                  <input type="file" onChange={selectTier2} /> 
                </div>                
              </div>
            </form>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={tier2Submit}>
            OK
          </Button>{" "}
          <Button color="secondary" onClick={tier2Toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      <Modal isOpen={tier3Modal} toggle={tier3Toggle}>        
        <ModalBody>
          <div className="typo-content">
            <form>
              <div className="form-row">
                <div className="col-12 mb-3">
                  <label htmlFor="name">Please select a image</label>
                  <br />
                  <input type="file" onChange={selectTier3} /> 
                </div>                
              </div>
            </form>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={tier3Submit}>
            OK
          </Button>{" "}
          <Button color="secondary" onClick={tier3Toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default settings;
