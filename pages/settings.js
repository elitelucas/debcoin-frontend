import React, { useEffect, useState } from "react";
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
} from "reactstrap";

import classnames from "classnames";

const settings = () => {
  useEffect(() => {
    document.body.style.setProperty("--primary", "#333D7A");
    document.body.style.setProperty("--secondary", "##FAEBEE");
    document.body.style.setProperty("--light", "#f3f1e8");
    document.body.style.setProperty("--dark", "#9647DB");
  });

  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
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
                <Profile />
              </TabPane>
              <TabPane tabId="2">
                <Account />
              </TabPane>

              <TabPane tabId="3">
                <Verification />
              </TabPane>

              <TabPane tabId="4">
                <BtcWallet />
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </Container>

      <FooterSection />
    </div>
  );
};

export default settings;
