import React, { useState, useEffect } from "react";
import Router from "next/router";
import Head from "next/head";
import NProgress from "nprogress";
import getConfig from "next/config";
import { ToastContainer } from "react-toastify";
import CookieConsent, { Cookies } from "react-cookie-consent";
import { AuthProvider } from '../utils/auth';
import { FetchProvider } from '../utils/authFetch'
import "bootstrap-scss";
import "../public/assets/scss/flaticon.scss";
import "../public/assets/scss/font-awesome.scss";
import "../public/assets/scss/color-1.scss";
import "../public/assets/scss/themify.scss";
import "../public/assets/scss/slick.scss";
import "../public/assets/scss/slick-theme.scss";
import 'react-toastify/dist/ReactToastify.css';
const { publicRuntimeConfig = {} } = getConfig() || {};

NProgress.configure({ showSpinner: publicRuntimeConfig.NProgressShowSpinner });

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

function MyFunctionComponent({ children }) {
  const [loader, setLoader] = useState(true);
  const [goingUp, setGoingUp] = useState(false);

  useEffect(() => {
    // Page Loader
    setTimeout(() => {
      setLoader(false);
    }, 1500);
    
    // Tap to Top Scroll
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 500) setGoingUp(true);
      else setGoingUp(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);

  const tapToTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  return (
    <>
      <Head>
        <title>DebCoins</title>
      </Head>
      {loader && (
        <div className="loader-wrapper">
          <div className="loader">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
      <>{children}</>
      <div
        className="tap-top"
        style={
          goingUp
            ? { display: "block", backgroundColor: "#333D79" }
            : { display: "none" }
        }
        onClick={tapToTop}>
        <div>
          <i className="fa fa-angle-double-up"></i>
        </div>
      </div>
    </>
  );
}

export default function MyApp({ Component, pageProps, graphql }) {
  return (
    <AuthProvider>
      <FetchProvider>
        <MyFunctionComponent>
          <Component {...pageProps} />
          <CookieConsent style={{ textAlign: "center" }}>
            This website uses cookies to enhance the user experience.
            <a
              href="/privacy-policy"
              style={{ paddingLeft: "5px", textDecoration: "underline" }}>
              Learn More
            </a>
          </CookieConsent>
        </MyFunctionComponent>
        <ToastContainer />
      </FetchProvider>
    </AuthProvider>
  );
}
