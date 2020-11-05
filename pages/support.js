import React, { useEffect, useState, useContext } from "react";
import Head from "next/head";
// import Custom Components
import Header from "./layouts/sections/Header/header";
// import Header from "../containers/common/header";
import BannerSection from "./layouts/sections/Banner/Banner";
import AccordianSection from "./layouts/sections/Accordian/accordian";
import FooterSection from "./layouts/sections/Footer/footer";
import { Accordion, AccordionItem } from "react-light-accordion";
import "react-light-accordion/demo/css/index.css";
import { Container, Row, Col } from "reactstrap";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  UncontrolledCollapse,
  CardBody,
  Card,
  CardHeader,
} from "reactstrap";
import { AuthContext } from "../utils/auth";
import { FetchContext } from "../utils/authFetch";
import { publicFetch } from "../utils/publicFetch";
const index = () => {
  const {authState,isAuthenticated}=useContext(AuthContext);
  
  const {authAxios}=useContext(FetchContext);
  useEffect(() => {
    document.body.style.setProperty("--primary", "#333D7A");
    document.body.style.setProperty("--secondary", "##FAEBEE");
    document.body.style.setProperty("--light", "#f3f1e8");
    document.body.style.setProperty("--dark", "#9647DB");
  });
  const [modal, setModal] = useState(false);
  const [username,setUsername]=useState('');
  const [email,setEmail]=useState('');
  const [help,setHelp]=useState('');
  const [title,setTitle]=useState('');
  const submit=async ()=>{
    if(isAuthenticated()){
      try {
        const { data } = await authAxios.post('contact',{help,title});
        
      } catch (error) {
        console.log(error);        
      }  
    }else{
      try {
        const { data } = await publicFetch.post('contact_anonym',{username, email, help,title});
      } catch (error) {
        console.log(error);        
      }  
    }
    toggle()();
  };
  const toggle = (content)=>() =>{ 
    if(modal){
      
      setTitle('');
     
      setModal(!modal);
    }else{
      setUsername('');
      setTitle(content);
      setEmail('');
      setHelp('');
      setModal(!modal);
    }
  };
  
  const GeneralQuestions = () => {
    return (
      <div className="faq-block container">
        <Accordion>
          <AccordionItem
            className="card-header bg-primary"
            title="Do you accept gift cards for specific retailers (e.g. Amazon, iTunes, etc.)?">
            No, we only accept Visa, Mastercard, and American Express branded
            non-reloadable prepaid gift cards for now.
          </AccordionItem>

          <AccordionItem
            className="card-header bg-primary"
            title="Do you accept reloadable prepaid gift cards?">
            No, we only accept non-reloadable Visa, Mastercard, and American
            Express branded prepaid gift cards.
          </AccordionItem>

          <AccordionItem
            className="card-header bg-primary"
            title="Do you accept gift cards received via rebate or employee reward programs?">
            No, we only accept non-reloadable prepaid gift cards purchased in
            stores. Make sure to keep your receipt.
          </AccordionItem>

          <AccordionItem
            className="card-header bg-primary"
            title="Do you accept credit or debit cards?">
            No, however some locations may allow you to purchase non-reloadable
            prepaid gift cards with your credit or debit card. Ask the cashier
            or a store employee for assistance.
          </AccordionItem>

          <AccordionItem
            className="card-header bg-primary"
            title="Where may I buy the non-reloadable prepaid gift cards that are accepted on Debcoins?">
            Most major retailers (e.g. gas stations, supermarkets, pharmacies,
            convenience stores and big-box stores) have a gift card section
            where you can find non-reloadable prepaid gift cards!
          </AccordionItem>

          <AccordionItem
            className="card-header bg-primary"
            title="How may I make sure I buy a non-reloadable prepaid gift card that you accept?">
            The best way is to look for the magic word, GIFT on the packaging
            along with Visa, MasterCard, or American Express branding.
          </AccordionItem>

          <AccordionItem
            className="card-header bg-primary"
            title="How may I contact support?">
            If you have any questions, please contact us via the forms below.
            Alternatively, our support email is: support@debcoins.co
          </AccordionItem>

          <AccordionItem
            className="card-header bg-primary"
            title="Can I sell cryptocurrency to Debcoins?">
            Not yet - currently we only sell cryptocurrencies to users, we don’t
            buy them.
          </AccordionItem>

          <AccordionItem
            className="card-header bg-primary"
            title="Can I buy gift cards with cryptocurrency from Debcoins?">
            Not yet - we plan to roll out this feature along with several others
            very soon.
          </AccordionItem>

          <AccordionItem
            className="card-header bg-primary"
            title="How long do orders take?">
            Orders are usually instant; although, there are some retailers that
            take up to 1 hour for the card to be activated after purchase.
          </AccordionItem>
        </Accordion>
      </div>
    );
  };

  const Fees = () => {
    return (
      <div className="faq-block container pl-3">
        <Accordion>
          <AccordionItem
            className="card-header bg-primary"
            title="What fees does Debcoins charge?">
            Debcoins's fees are dynamic and included in the cryptocurrency
            prices displayed on the website at all times throughout your order.
          </AccordionItem>

          <AccordionItem
            className="card-header bg-primary"
            title="My wallet says I received a smaller USD amount of cryptocurrency than the amount I ordered from Debcoins. Where’s the rest?">
            Sorry for the confusion! You received the USD amount of your order
            with our fees deducted. The exact amount of cryptocurrency you
            receive is displayed on the website at all times throughout your
            order.
          </AccordionItem>

          <AccordionItem
            className="card-header bg-primary"
            title="The USD amount of cryptocurrency I ordered from Debcoins is more than what my wallet says I received. Why did I receive less than what I ordered?">
            The reason why it appears that way is because Debcoins charges a fee
            which is included in the exchange rate displayed, so you receive the
            USD amount you ordered minus our fees. You will always receive the
            exact amount of cryptocurrency you order, but fluctuating markets
            may cause the USD value to change. The exact amount of
            cryptocurrency you will receive is displayed on the website at all
            times throughout your order.
          </AccordionItem>

          <AccordionItem
            className="card-header bg-primary"
            title="The price of the cryptocurrency in my order keeps changing, why?">
            The price and amount of cryptocurrency you will receive is dynamic
            as the market fluctuates every minute. Don't worry, we display the
            amount of Bitcoin and the USD value of the Bitcoin you will recieve
            throughout your whole order.
          </AccordionItem>
        </Accordion>
      </div>
    );
  };

  const OrderQuestions = () => {
    return (
      <div className="faq-block container pl-3">
        <Accordion>
          <AccordionItem
            className="card-header bg-primary"
            title="How long does it take to receive my cryptocurrency?">
            If you submit your images correctly you can receive cryptocurrency
            in as little as 5 minutes! During peak times it could take up to one
            hour for images to be reviewed.
          </AccordionItem>

          <AccordionItem
            className="card-header bg-primary"
            title="What information is required to complete an order?">
            We need a valid US phone number, cryptocurrency address, images of
            the card, and the receipts you received when the card was purchased
            and activated. You will be required to write a handwritten note on
            the receipt. Please note that users who go beyond certain trading
            limits will be required to do additional verification.
          </AccordionItem>

          <AccordionItem
            className="card-header bg-primary"
            title="How much cryptocurrency can I purchase?">
            You can purchase between $25-$500 in one order.
          </AccordionItem>

          <AccordionItem
            className="card-header bg-primary"
            title="Can I charge multiple cards in one order?">
            No, but you can have multiple orders open at the same time!
          </AccordionItem>

          <AccordionItem
            className="card-header bg-primary"
            title="What type of phone number can I use for my order?">
            You need a valid US telephone number that can receive text messages.
          </AccordionItem>

          <AccordionItem
            className="card-header bg-primary"
            title="I did not receive the SMS verification code for my order. What should I do?">
            Please make sure the number is correct and try again. If you still
            don’t receive it, please use our contact form and let us know!
          </AccordionItem>

          <AccordionItem
            className="card-header bg-primary"
            title="What should I know before I begin my order?">
            Please check your card balance to make sure you have sufficient
            funds for your order. Non-reloadable prepaid gift cards purchased at
            certain locations may have 1-2 hour activation delays which are
            completely out of our control. You should avoid these locations!
            Some non-reloadable prepaid gift cards require activation by phone
            or online registration after purchase. American Express branded gift
            cards sold at many locations tend to have activation delays. If
            you’re certain your card is active and has sufficient balance for
            your order, please contact the card issuer.
          </AccordionItem>

          <AccordionItem
            className="card-header bg-primary"
            title="How can I make sure a non-reloadable prepaid gift card will be activated immediately after purchase?">
            Great question! Unfortunately this can sometimes be difficult to do.
            You can start by trying to speak with a manager at the location
            where the gift cards are sold. You could also try calling the gift
            card company and asking about the location you’re interested in.
            Make sure to be polite and courteous when asking for assistance with
            prepaid gift cards.
          </AccordionItem>

          <AccordionItem
            className="card-header bg-primary"
            title="I didn’t save my receipt, can I still complete my order?">
            Oh no! You must have the gift card receipt to complete your order
            with Debcoins. Many locations where prepaid gift cards are sold will
            reprint your purchase and activation receipts for you if you return
            with your card and politely ask a manager.
          </AccordionItem>

          <AccordionItem
            className="card-header bg-primary"
            title="I don’t have a writing utensil, can I complete my order?">
            No, you must follow the directions to write on your receipt or your
            order will not be completed.
          </AccordionItem>

          <AccordionItem
            className="card-header bg-primary"
            title="I don’t have a camera to upload images. Can I still complete an order?">
            No. Without clearly legible images we will be unable to process your
            order.
          </AccordionItem>

          <AccordionItem
            className="card-header bg-primary"
            title="Can I use a scanner to upload my images?">
            No! Only high quality color camera photos are accepted.
          </AccordionItem>

          <AccordionItem
            className="card-header bg-primary"
            title="I got an email saying my order was cancelled and that one or more of my images weren't accepted. Why?">
            We cannot send your Bitcoin until you have successfully uploaded the
            required images. If the images you uploaded are too blurry,
            incomplete or otherwise incorrect, we will give you a detailed
            reason why in the rejection message.
          </AccordionItem>

          <AccordionItem
            className="card-header bg-primary"
            title="I want my money back, how long does it take?">
            Refunds to non-reloadable prepaid gift cards can take some issuers
            up to 10 days.
          </AccordionItem>
        </Accordion>
      </div>
    );
  };

  const CryptocurrencyQuestions = () => {
    return (
      <div className="faq-block container pl-3">
        <Accordion>
          <AccordionItem
            className="card-header bg-primary"
            title="You don’t sell the kind of cryptocurrency I want!">
            Sorry about that! Please let us know what cryptocurrency you want in
            the contact form.
          </AccordionItem>

          <AccordionItem
            className="card-header bg-primary"
            title="Do I have to purchase a full Bitcoin?">
            No, you can purchase a fraction of a Bitcoin! You can purchase any
            amount of Bitcoin within your trading volume limits.
          </AccordionItem>

          <AccordionItem
            className="card-header bg-primary"
            title="Can you send my cryptocurrency to multiple addresses and/or multiple cryptocurrencies?">
            No, you can only specify a single cryptocurrency and withdrawal
            address per order. But you can have as many orders as you want all
            at the same time!
          </AccordionItem>

          <AccordionItem
            className="card-header bg-primary"
            title="Why hasn’t the transaction you sent me confirmed?">
            Public cryptocurrency networks do not have guaranteed transaction
            times. Your transaction may require multiple hours to confirm
            depending on how busy the network is. If your wallet supports
            sending unconfirmed transactions you can spend the payout
            transaction to another address before it has confirmed.
          </AccordionItem>

          <AccordionItem
            className="card-header bg-primary"
            title="Debcoins says my order is complete but I didn’t get the transaction!">
            You can view your transaction on the public network by clicking the
            link we provided on your completed order page and email. Try
            restarting your wallet if it does not display the incoming
            transaction.
          </AccordionItem>

          <AccordionItem
            className="card-header bg-primary"
            title="I sent the cryptocurrency to the wrong address, can I get it back?">
            Uh oh! Cryptocurrency transactions are irreversible.
          </AccordionItem>
        </Accordion>
      </div>
    );
  };

  const Legal = () => {
    return (
      <div className="faq-block container pl-3">
        <Accordion>
          <AccordionItem
            className="card-header bg-primary"
            title="I am located outside the United States, can I use Debcoins's services?">
            Our services are only available to customers in select states within
            the United States.
          </AccordionItem>

          <AccordionItem
            className="card-header bg-primary"
            title="How much cryptocurrency can I purchase from Debcoins?">
            You can purchase $25-500 worth of cryptocurrency in a single order;
            multiple orders are allowed. You can purchase a maximum of $5000 per
            week. Please note several tiers of verification have to be completed
            to reach this high of a limit. Please refer to the Verification tab
            in your account settings to see the trade volume tiers.
          </AccordionItem>

          <AccordionItem
            className="card-header bg-primary"
            title="I reside in a state that is prohibited, may I still buy Bitcoin?">
            Yes! If you live in a state that is prohibited, but you are
            traveling to another state where we provide our services, you may
            purchase non-reloadable prepaid cards in that accepted state and we
            will gladly accept your order.
          </AccordionItem>
        </Accordion>
      </div>
    );
  };

  const Verification = () => {
    return (
      <div className="faq-block container pl-3">
        <Accordion>
          <AccordionItem
            className="card-header bg-primary"
            title="How do I get verified on Debcoins?">
            The verification process can be found in your account settings under
            the "Verification" tab. There are three tiers of verification, each
            one having their own designated trade volume limit. Completing all
            your verification tiers will get you the highest limit available.
          </AccordionItem>

          <AccordionItem
            className="card-header bg-primary"
            title="My verification documents were declined! Why?">
            Your verification documents must meet our guidelines outlined in our
            Limits & Compliance page. Make sure your documents are clear and in
            date.
          </AccordionItem>

          <AccordionItem
            className="card-header bg-primary"
            title="Is my personal information safe?">
            Absolutely. Debcoins takes extreme caution when dealing with
            customer information. All files uploaded to our server are
            encrypted; we also make sure to delete your information from our
            servers whenever we don't need it anymore!
          </AccordionItem>
        </Accordion>
      </div>
    );
  };

  return (
    <div>
      <Head>
        <title>DebCoins </title>
      </Head>
      <Header className="saas2" />
      <section className="saas1 faq mt-0">
        <Container style={{ marginTop: "10rem" }}>
          <Row>
            <Col md="12">
              <div className="">
                <div>
                  <div className="title title2 title-inner">
                    <div className="main-title">
                      <h2 className="  text-center main-text m-b-0">
                        <span className="font-secondary text-uppercase">
                          Frequently Asked Questions(FAQ)
                        </span>
                      </h2>
                    </div>
                  </div>
                  <CardHeader
                    color="primary"
                    id="GeneralQuestions"
                    style={{ marginBottom: "1rem", fontSize: "18px" }}>
                    General Questions
                  </CardHeader>
                  <UncontrolledCollapse toggler="#GeneralQuestions">
                    <GeneralQuestions />
                  </UncontrolledCollapse>

                  <CardHeader
                    color="primary"
                    id="Fees"
                    style={{ marginBottom: "1rem", fontSize: "18px" }}>
                    Fees
                  </CardHeader>
                  <UncontrolledCollapse toggler="#Fees">
                    <Fees />
                  </UncontrolledCollapse>

                  <CardHeader
                    color="primary"
                    id="orderQuestions"
                    style={{ marginBottom: "1rem", fontSize: "18px" }}>
                    Order Questions
                  </CardHeader>
                  <UncontrolledCollapse toggler="#orderQuestions">
                    <OrderQuestions />
                  </UncontrolledCollapse>

                  <CardHeader
                    color="primary"
                    id="CryptocurrencyQuestions"
                    style={{ marginBottom: "1rem", fontSize: "18px" }}>
                    Cryptocurrency Questions
                  </CardHeader>
                  <UncontrolledCollapse toggler="#CryptocurrencyQuestions">
                    <CryptocurrencyQuestions />
                  </UncontrolledCollapse>

                  <CardHeader
                    color="primary"
                    id="Legal"
                    style={{ marginBottom: "1rem", fontSize: "18px" }}>
                    Legal
                  </CardHeader>
                  <UncontrolledCollapse toggler="#Legal">
                    <Legal />
                  </UncontrolledCollapse>

                  <CardHeader
                    color="primary"
                    id="Verification"
                    style={{ marginBottom: "1rem", fontSize: "18px" }}>
                    Verification
                  </CardHeader>
                  <UncontrolledCollapse toggler="#Verification">
                    <Verification />
                  </UncontrolledCollapse>

                  <h6 className="link mt-3">
                    Still have a question? Reach out to us: <a>demo@123.com</a>
                  </h6>
                </div>
              </div>
            </Col>
            <Col sm="12 ">
              <div className="main-title " style={{ marginTop: "8rem" }}>
                <h2 className=" borders text-center main-text m-b-0">
                  <span className="text-uppercase">Contact Us</span>
                </h2>
              </div>
              <div className="row mt-5">
                <Col md="6 " sm="12">
                  <div
                    className={`p-5 shadow-showcase text-center shadow`}
                    onClick={toggle("I have an issue with my account.")}
                    style={{ cursor: "pointer" }}>
                    <h3 className="m-0 f-18 text-center shadow-font">
                      <div className=" mx-auto">
                        <i
                          className="fa fa-user text-warning"
                          style={{ fontSize: "30px" }}></i>
                      </div>
                    </h3>
                    <h3>Account Issues</h3>
                    <p>I have an issue with my account.</p>
                  </div>
                </Col>
                <Col md="6 " sm="12">
                  <div
                    className={`p-5 shadow-showcase text-center shadow`}
                    onClick={toggle("I have a question about my order or how orders work.")}
                    style={{ cursor: "pointer" }}>
                    <h3 className="m-0 f-18 text-center shadow-font">
                      <div className=" mx-auto">
                        <i
                          className="fa fa-btc  text-warning"
                          style={{ fontSize: "30px" }}></i>
                      </div>
                    </h3>
                    <h3>Order Questions</h3>
                    <p>I have a question about my order or how orders work.</p>
                  </div>
                </Col>
                <Col md="6 " sm="12">
                  <div
                    className={`p-5 shadow-showcase text-center shadow`}
                    onClick={toggle("For any other questions or issues about our services.")}
                    style={{ cursor: "pointer" }}>
                    <h3 className="m-0 f-18 text-center shadow-font">
                      <div className=" mx-auto">
                        <i
                          className="fa fa-handshake-o text-warning"
                          style={{ fontSize: "30px" }}></i>
                      </div>
                    </h3>
                    <h3>Business Inquiry</h3>
                    <p>For any other questions or issues about our services.</p>
                  </div>
                </Col>
                <Col md="6 " sm="12">
                  <div
                    className={`p-5 shadow-showcase text-center shadow`}
                    onClick={toggle("I have something else to ask.")}
                    style={{ cursor: "pointer" }}>
                    <h3 className="m-0 f-18 text-center shadow-font">
                      <div className=" mx-auto">
                        <i
                          className="fa fa-info-circle text-warning"
                          style={{ fontSize: "30px" }}></i>
                      </div>
                    </h3>
                    <h3>Something Else</h3>
                    <p>I have something else to ask.</p>
                  </div>
                </Col>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <FooterSection />
      <Modal isOpen={modal} toggle={toggle()}>
        <ModalHeader toggle={toggle()}>Contact Us</ModalHeader>
        <ModalBody>
          <div className="typo-content">
            <form>
              <div className="form-row">
                {
                  isAuthenticated() ? '' : (
                    <>
                      <div className="col-12 mb-3">
                        <label htmlFor="name">Your User Name *</label>
                        <input
                          className="form-control"
                          id="name"
                          placeholder="Enter Your name"
                          required=""
                          type="text"
                          value={username}
                          onChange={(e)=>setUsername(e.target.value)}
                        />
                      </div>
                      <div className="col-12 mb-3">
                        <label htmlFor="email">Email *</label>
                        <input
                          className="form-control"
                          id="email"
                          placeholder="Email"
                          required=""
                          type="text"
                          value={email}
                          onChange={(e)=>setEmail(e.target.value)}
                        />
                      </div>
                    </>
                  )
                }
                
                <div className="col-12 mb-3">
                  <label>How may we help you? *</label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    placeholder="Write Your Message"
                    value={help}
                    onChange={(e)=>setHelp(e.target.value)}
                    rows="5"></textarea>
                </div>
              </div>
              <Row></Row>
            </form>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={submit}>
            Send
          </Button>{" "}
          <Button color="secondary" onClick={toggle()}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default index;
