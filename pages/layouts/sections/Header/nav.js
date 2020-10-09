import React, { useEffect, useState } from "react";
import Link from "next/link";
const Nav = (props) => {
  const [sidebar, setSidebar] = useState(false);

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
        <li className="mega-menu">
          <Link href="/support" className="active">
            Support
          </Link>
        </li>
        <li className="mega-menu">
          <Link href="/term-of-use" className="active">
            Term of Use
          </Link>
        </li>
        <li className="mega-menu">
          <Link href="/privacy-policy" className="active">
            Privacy Policy
          </Link>
        </li>
        <li className="mega-menu">
          <Link href="/limits-and-compliance" className="active">
            Limits & Compliance
          </Link>
        </li>
        {/* <li className="mega-menu">
          <Link href="/fraud-notice" className="active">
            Fraud Notice
          </Link>
        </li> */}
        {props.isAuth===false ? (
          <>
            <li className="mega-menu">
              <Link href="/login" className="active">
                <a
                  className="btn btn-default primary-btn "
                  style={{ padding: "10px 20px", marginRight: "5px" }}>
                  Login
                </a>
              </Link>
            </li>
            <li className="mega-menu">
              <Link href="/signup" className="active">
                <a
                  className="btn btn-default primary-btn transparent"
                  style={{ padding: "10px 20px" }}>
                  Sign Up
                </a>
              </Link>
            </li>
          </>
        ) : ''}
        
      </ul>
    </div>
  );
};

export default Nav;
