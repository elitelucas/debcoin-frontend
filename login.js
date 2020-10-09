import React, { useEffect,useState,useContext } from "react";
import Head from "next/head";
import { useRouter } from 'next/router';
// import Custom Components
import Header from "./layouts/sections/Header/header";
import { publicFetch } from '../utils/publicFetch';
import { AuthContext } from '../utils/auth';
import FooterSection from "./layouts/sections/Footer/footer";
import {
  Row,
  Col,
  Form,
  FormGroup,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
  Label,
} from "reactstrap";

const index = () => {
  const router = useRouter();
  const [username,setUsername]=useState(''); 
  const [password,setPassword]=useState('');
  const { setAuthState } = useContext(AuthContext);
  const submit=async (e)=>{
    e.preventDefault();
    if(username!=''&& password!='')
    {
      try {
        const { data } = await publicFetch.post('authenticate', {username,
          password});
        const { token, expiresAt, userInfo,message } = data;
        var today = new Date();
        today.setHours(today.getHours() + parseFloat(expiresAt));
        setAuthState({ token, expiresAt:today.getTime()/1000, userInfo,message });
        router.push('/', undefined, { shallow: true });
       
        
       
      } catch (error) {
        console.log(error)
      }  
    }
  };
  useEffect(() => {
    document.body.style.setProperty("--primary", "#333D7A");
    document.body.style.setProperty("--secondary", "##FAEBEE");
    document.body.style.setProperty("--light", "#f3f1e8");
    document.body.style.setProperty("--dark", "#9647DB");
  });

  return (
    <div>
      <Head>
        <title>DebCoins </title>
      </Head>
      <Header className="saas2" isHome={false} />
      <Row className="mb-5">
        <Col
          sm="12"
          md="4"
          className="ml-auto mr-auto"
          style={{ marginTop: "10rem" }}>
          <div className={`p-5 shadow-showcase  shadow`}>
            <div className="login-modal">
              <div className="text-center ">
                <h2 className=" text-dark  mb-3">Login</h2>
                <p>Sign in to your account to continue.</p>
                <hr />
              </div>
              <Form>
                <FormGroup row>
                  <Col sm={12} className="m-auto">
                    <Label for="Email address">Email address or Username</Label>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText
                          style={{
                            borderTopLeftRadius: "20px",
                            borderBottomLeftRadius: "20px",
                            border: "0",
                          }}>
                          <i className="fa fa-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        name="usd"
                        id="usd"
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}
                        placeholder="Email & Username"
                      />
                    </InputGroup>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col sm={12}>
                    <Label
                      for="Password">
                      Password
                    </Label>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText
                          style={{
                            borderTopLeftRadius: "20px",
                            borderBottomLeftRadius: "20px",
                            border: "0",
                          }}>
                          <i className="fa fa-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                      />
                    </InputGroup>
                  </Col>
                </FormGroup>
                <button className="btn primary-btn btn-default  mt-0" onClick={submit}>
                  Sign in
                </button>
              </Form>
              <hr />
              <p>
                Not registered? <a href="signup"> Create account</a>
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <FooterSection />
    </div>
  );
};

export default index;
