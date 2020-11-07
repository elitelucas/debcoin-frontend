import React, { useEffect, useState, useContext } from "react";
import Head from "next/head";
// import Custom Components
import Header from "../layouts/sections/Header/header";
import FooterSection from "../layouts/sections/Footer/footer";
import "react-light-accordion/demo/css/index.css";
import { Container, Row, Col } from "reactstrap";
import { Progress } from "reactstrap";
import { AuthContext } from '../utils/auth';
import Router from "next/router";
import { FetchContext } from '../utils/authFetch';

const index = () => {
  const { isAuthenticated, loading, authState } = useContext(AuthContext);
  const { authAxios } = useContext(FetchContext);
  const [list, setList] = useState([]);
  const [total, setTotal] = useState('');
  useEffect(() => {
    document.body.style.setProperty("--primary", "#333D7A");
    document.body.style.setProperty("--secondary", "##FAEBEE");
    document.body.style.setProperty("--light", "#f3f1e8");
    document.body.style.setProperty("--dark", "#9647DB");
  });
  useEffect(() => {
    if (!loading) {
      if (!isAuthenticated()) {
        Router.push('/login');
      } else {
        (async () => {
          try {
            let { data } = await authAxios.get('listExchange');
            setList(data.exchange);
            setTotal(data.week_total);

          } catch (error) {
            console.log(error);

          }
        })();
      }
    }

  }, [loading]);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <div>
      <Head>
        <title>DebCoins </title>
      </Head>
      <Header className="saas2" />
      <section className="saas1 ">
        {!loading ? (
          <Container style={{ marginTop: "8rem" }}>
            <div className={`p-5 shadow-showcase  shadow mt-2`}>
              <Row>
                <Col
                  md="3"
                  xs="6"
                  className="shadow-sm"
                  style={{ alignSelf: "center" }}>
                  <h4>Limit Left</h4>
                  <p>{
                    authState.userInfo.level <= 1 ? "$" + (499 - total) : (
                      authState.userInfo.level <= 2 ? "$" + (1999 - total) :
                        'Not Limited'
                    )
                  }</p>
                </Col>
                <Col style={{ alignSelf: "center", textAlign: "right" }}>
                  {" "}
                  {
                    authState.userInfo.level === 3 ? (
                      <Progress color="success" value="0" />
                    ) : (authState.userInfo.level === 2 ? (
                      <Progress color="success" value={100 * total / 1999} />

                    ) : (
                        <Progress color="success" value={100 * total / 499} />
                      ))
                  }
                  <small>
                    You have traded ${total} of your {authState.userInfo.level <= 1 ? "$499" : (authState.userInfo.level <= 2 ? "$1999" : 'Not Limited')} weekly limit.
                </small>
                </Col>
              </Row>{" "}
            </div>
            <Row>
              <Col sm="12">
                <div className="mb-5 mt-5">
                  <div className="d-flex align-items-center mb-4">
                    <div className="d-flex">
                      <div className="pr-3">
                        <span className="h5 mb-0">
                          <i className="fa fa-history" />
                        </span>
                      </div>
                      <div className>
                        <h3 className="h5 mb-0">Orders History</h3>
                      </div>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-cards align-items-center">
                      <thead>
                        <tr>
                          <th scope="col" style={{ minWidth: "240px" }}>
                            Order #{" "}
                          </th>
                          <th scope="col">Giftcard Amount </th>
                          <th scope="col">BTC Value</th>
                          <th scope="col">USD Value </th>
                          <th scope="col">Wallet</th>
                          <th scope="col">Order Date </th>
                          <th scope="col">Status </th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          list.map((ele, key) => (
                            <tr>
                              <th scope="row">
                                <a href="">{ele._id}</a>
                              </th>
                              <td>${ele.amount} </td>
                              <td>{Math.floor(100000000 * parseFloat(ele.amount) * parseFloat(ele.rate)) / 100000000} </td>
                              <td>${ele.amount}  </td>
                              <td>{ele.wallet_name}  </td>
                              <td>{ele.createdAt} </td>
                              <td>
                                {
                                  ele.status == 1 ? (
                                    <span className="badge badge-success">Succeed</span>
                                  ) : (ele.status == 0 ? (
                                    <span className="badge badge-info">Waiting</span>
                                  ) : (
                                      <span className="badge badge-danger">Cancelled</span>
                                    ))
                                }

                              </td>
                            </tr>
                          ))
                        }
                      </tbody>
                    </table>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        ) : ""}

      </section>
      <FooterSection />
    </div>
  );
};

export default index;
