import React, { useState,useContext } from "react";
import Nav from "./nav";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import { AuthContext } from '../../../utils/auth';

const Header = (props) => {
  const {isAuthenticated,logout}=useContext(AuthContext);

  const [sidebar, setSidebar] = useState(false);
  const [search, setSearch] = useState(false);

  const clickSidebar = () => {
    setSidebar(!sidebar);
    document.querySelector(".navbar").classList.add("openSidebar");
  };

  return (
    <header
      className={`${
        props.className || "app2"
      } loding-header nav-abs custom-scroll  `}
      style={{
        padding: "1rem",
        backgroundColor: props.isHome ? "" : "#333D7A",
      }}>
      <Container>
        <Row>
          <Col>
            <nav>
              <a className="m-r-auto" href="/">
                <img
                  alt=""
                  className="img-fluid"
                  src="/assets/images/home/logo.png"
                  style={{ maxWidth: "200px" }}
                />
              </a>
              <div className="responsive-btn">
                <a className="toggle-nav" onClick={clickSidebar}>
                  <i aria-hidden="true" className="fa fa-bars text-white"></i>
                </a>
              </div>
              <Nav isAuth={isAuthenticated()} logout={()=>logout()} />
              
            </nav>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
