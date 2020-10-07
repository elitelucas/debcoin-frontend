import React, { useEffect } from "react";
import Head from "next/head";

import Header from "./layouts/sections/Header/header";

import BannerSection from "./layouts/sections/Banner/Banner";
import AccordianSection from "./layouts/sections/Accordian/accordianold";
import FooterSection from "./layouts/sections/Footer/footer";
import BeforeFooter from "./layouts/sections/BeforeFooter/BeforeFooter";
import License from "./layouts/sections/Licenses/Licenses";
import Guide from "./layouts/sections/Guide/Guide";
const index = () => {
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

      <Header className="saas2" isHome={true} />

      <BannerSection />
      <Guide />
      {/* <AccordianSection /> */}
      <License />

      <BeforeFooter />
      <FooterSection />
    </div>
  );
};

export default index;
