import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";

import Header from "./layouts/sections/Header/header";

import BannerSection from "./layouts/sections/Banner/Banner";
import FooterSection from "./layouts/sections/Footer/footer";
import BeforeFooter from "./layouts/sections/BeforeFooter/BeforeFooter";
import License from "./layouts/sections/Licenses/Licenses";
import Guide from "./layouts/sections/Guide/Guide";
import Pricing from "./layouts/sections/Prices/Prices";
import { publicFetch } from '../utils/publicFetch';
import { AuthContext } from '../utils/auth';
import {FetchContext} from '../utils/authFetch';
import { SchemaMetaFieldDef } from "graphql";
const index = () => {
  const [rate,setRate]=useState('');
  const [allowed,setAllowed]=useState(500);
  const {authAxios}=useContext(FetchContext);
  const {authState,isAuthenticated,loading,logout,setAuthState}=useContext(AuthContext);
  const [amount,setAmount]=useState(0);
  useEffect(() => {
    document.body.style.setProperty("--primary", "#333D7A");
    document.body.style.setProperty("--secondary", "##FAEBEE");
    document.body.style.setProperty("--light", "#f3f1e8");
    document.body.style.setProperty("--dark", "#9647DB");
    getRate();
    setAmount(25);
  },[]);
  useEffect(()=>{ 
    if(!loading){
      if(isAuthenticated()){
        (async ()=>{          
          getAllowed();
        })();       
      }
    }
   
  },[loading]);


  const getRate=async ()=>{
    try{
      let tmp=await publicFetch('getRate').catch((err)=>{});
      setRate(tmp.data.rate);
    }catch(err){
      
    }
    
  }
  const getAllowed=async ()=>{
    if(isAuthenticated()){
      let {data}=await authAxios('allowed');
      setAllowed(data.total);
    }
    
  };
  const buying=(tmp)=>{
    window.scrollTo({top: 0, behavior: 'smooth'});
    setAmount(tmp);
  };
  const addWallet=async (title,address)=>{
    try {
      
      const { data } = await authAxios.post('wallet/',{
        title,address
      });
      setAuthState({
        ...authState,
        userInfo:{
          ...authState.userInfo,
          wallet:data.wallet
        }        
      });

    } catch (error) {
      console.log(error);
  
    }  
  }
  return (
    <div>
      <Head>
        <title>DebCoins </title>
      </Head>

      <Header className="saas2" isHome={true}/>

      <BannerSection addWallet={addWallet} amount={amount} userInfo={authState.userInfo} allowed={allowed} price={rate} getRate={getRate} />
      <Guide />
      {/* <AccordianSection /> */}
      <License />
      <Pricing price={rate} allowed={500} submit={buying} />
      <BeforeFooter />
      <FooterSection />
    </div>
  );
};

export default index;
