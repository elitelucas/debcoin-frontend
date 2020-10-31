import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Router } from "next/router";
const Nav = (props) => {
  const [sidebar, setSidebar] = useState(false);
  const [show, setShow] = useState(false);
  function closeSidebar() {
    setSidebar(!sidebar);
    document.querySelector(".navbar").classList.remove("openSidebar");
  }

  return (
    <div className={`navbar`} id="togglebtn">
      <div className="responsive-btn">
        <a className="btn-back" onClick={closeSidebar}>
          <h5>back</h5>
        </a>
      </div>
      <ul className="main-menu">
        {props.isAuth === true ? (
          <li className="mega-menu">
            <Link href="/orders">
              <a>Orders</a>
            </Link>
          </li>
        ) : (
          ""
        )}
        <li className="mega-menu">
          <Link href="/support">
            <a>Support</a>
          </Link>
        </li>
        <li className="mega-menu">
          <Link href="/term-of-use">
            <a>Term of Use</a>
          </Link>
        </li>
        <li className="mega-menu">
          <Link href="/privacy-policy">
            <a>Privacy Policy</a>
          </Link>
        </li>
        <li className="mega-menu">
          <Link href="/limits-and-compliance">
            <a>Limits & Compliance</a>
          </Link>
        </li>
        {/* <li className="mega-menu">
          <Link href="/fraud-notice" className="active">
            Fraud Notice
          </Link>
        </li> */}
        {props.isAuth === false ? (
          <>
            <li className="mega-menu">
              <Link href="/login">
                <a
                  className="btn btn-default primary-btn "
                  style={{ padding: "10px 20px", marginRight: "5px" }}>
                  Login
                </a>
              </Link>
            </li>
            <li className="mega-menu">
              <Link href="/signup">
                <a
                  className="btn btn-default primary-btn "
                  style={{ padding: "10px 20px" }}>
                  Sign Up
                </a>
              </Link>
            </li>
          </>
        ) : (
          <li className="mega-menu">
            <a className="menu-icon-color">
              <i className="icon-user"></i>
            </a>
            <ul className={` openSubChildMenu`}>
              <a
                onClick={() => {
                  props.logout();
                }}>
                Logout
              </a>
              <Link href={"/settings"}>
                <a>Profile</a>
              </Link>
            </ul>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Nav;
