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
const index = () => {
  const [rate,setRate]=useState('');
  useEffect(() => {
    document.body.style.setProperty("--primary", "#333D7A");
    document.body.style.setProperty("--secondary", "##FAEBEE");
    document.body.style.setProperty("--light", "#f3f1e8");
    document.body.style.setProperty("--dark", "#9647DB");
  },[]);
  const getRate=async ()=>{
    let tmp=await publicFetch('getRate');
    setRate(tmp.data.rate);
  }
  return (
    <div>
      <Head>
        <title>DebCoins </title>
      </Head>

      <Header className="saas2" isHome={true}/>

      <BannerSection price={rate} getRate={getRate} />
      <Guide />
      {/* <AccordianSection /> */}
      <License />
      <Pricing />
      <BeforeFooter />
      <FooterSection />
    </div>
  );
};

export default index;
