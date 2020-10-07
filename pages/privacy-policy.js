import React, { useEffect, useState } from "react";
import Head from "next/head";
// import Custom Components
import Header from "./layouts/sections/Header/header";
import FooterSection from "./layouts/sections/Footer/footer";
import "react-light-accordion/demo/css/index.css";
import { Container, Row, Col } from "reactstrap";

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
      <Header className="saas2" />
      <section className="saas1 faq mt-0">
        <Container style={{ marginTop: "10rem" }}>
          <Row className="tos_row">
            <Col md="12">
              <div className="faq-block">
                <div>
                  <div className="title title2 title-inner">
                    <div className="main-title">
                      <h2 className="  text-center main-text m-b-0">
                        <span className="font-secondary text-uppercase">
                          Privacy Policy
                        </span>
                      </h2>
                      <p>Last updated: Aug 29th, 2020</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <hr />
            <Col>
              <h5 className="mb-3">Introduction</h5>
              <p>
                DebCoins (the “Company,” DebCoins,” “we,” “us,” and “our”)
                respects your privacy and is committed to protecting it through
                our compliance with this Privacy Policy (this “Policy”).
              </p>
              <p>
                This Policy describes the types of information we may collect
                from you or that you may provide when you access the website any
                of its subdomains, and any other content, functionality,
                products or services provided by us (collectively the
                “Services”). It also explains our practices for collecting,
                using, maintaining, protecting, and disclosing that information.
              </p>
              <p>
                This Policy describes the types of information we may collect
                from you or that you may provide when you access the website any
                of its subdomains, and any other content, functionality,
                products or services provided by us (collectively the
                “Services”). It also explains our practices for collecting,
                using, maintaining, protecting, and disclosing that information.
              </p>
              <p>
                This Policy applies to information we collect: Through the
                Services. Via email, text or other electronic messaging or
                communication service or app. When you interact with our
                advertising and applications on third-party websites and
                services, if those applications or advertising include links to
                this Policy.
              </p>
              <p>
                This Policy does not apply to information collected by: Any
                third party, including through any application or content
                (including advertising) that may link to or be accessible on or
                via the Services.
              </p>
              <h5 className="mb-3 mt-5"> Acceptance of Privacy Policy</h5>
              <p>
                Please read this Policy carefully to understand how we collect,
                use, disclose, and process your information. If you do not agree
                with or you are not comfortable with any aspect of this Policy,
                you should immediately discontinue access or use of the
                Services. By accessing or using the Services, you agree to this
                Policy. This Policy may change from time to time (see Changes to
                This Policy). Your continued use of the Services after we make
                changes is deemed to be acceptance of those changes, so please
                check this Policy periodically for updates.
              </p>

              <h5 className="mb-3 mt-5">
                What Information We Collect and How We Collect It
              </h5>
              <p>
                We collect several types of information from and about users of
                the Services, including information: By which you may be
                personally identified, such as name, postal address, email
                address, telephone number, or any other identifier by which you
                may be contacted online or offline (“Personal Information”).
                That is about you but individually does not identify you, such
                as basic analytics and log-in information when you use the
                Services, some of which may be collected from third-party
                providers like Facebook or Google Analytics. About your Internet
                connection, the equipment you use to access the Services,
                language information and usage details. Publicly available
                information from the blockchain ("Blockchain Information").
                Blockchain Information may include public addresses, transaction
                history, account numbers, decentralized application usage
                history, and any other data that is inserted onto a public
                chain. Blockchain Information may be pseudonymous, meaning that
                it cannot be related to any particular individual or party by
                itself, but may be so when combined with certain other
                information.
              </p>
              <p>
                We collect this information: Directly from you when you provide
                it to us. Automatically as you navigate through the site, which
                may include usage details, IP addresses, and information
                collected through cookies, web beacons, and other tracking
                technologies. From third parties, such as our business partners.
                From a blockchain node instance, which is either processed
                locally or at a remote location.
              </p>

              <h5 className="mb-3 mt-5">Information You Provide to Us</h5>
              <p>
                The information we collect on or through the Services may
                include: Information that you provide by filling in forms hosted
                through the Services, including information provided at the time
                of registering to use the Services, subscribing to our services,
                posting material, entering a contest or promotion sponsored by
                us, or requesting support. Records and copies of your
                correspondence (including email addresses), if you contact us.
                Your responses to surveys that we might ask you to complete for
                research purposes. Details of transactions you carry out through
                the Services (which may include financial information that we
                collect as needed to process any orders you place through the
                Services). Your search queries on the Services.
              </p>
              <h5 className="mb-3 mt-5">
                Information We Collect Through Automatic Data Collection
                Technologies
              </h5>
              <p>
                As you navigate through and interact with the Services, we may
                use automatic data collection technologies to collect certain
                information about your equipment, browsing actions, and
                patterns, including: Details of your visits to the Services,
                including traffic data, location data, logs, and other
                communication data and the resources that you access and use on
                the Services. Information about your computer and Internet
                connection, including your IP address, operating system, and
                browser type.
              </p>
              <p>
                The information we collect automatically may include Personal
                Information or we may maintain it or associate it with Personal
                Information we collect in other ways or receive from third
                parties. It helps us to improve the Services and to deliver a
                better and more personalized service, including by enabling us
                to: Estimate our audience size and usage patterns. Store
                information about your preferences, allowing us to customize the
                Services according to your individual interests. Recognize you
                when you return to the Services.
              </p>
              <p>
                The technologies we use for this automatic data collection may
                include: Cookies (or browser cookies). A cookie is a small file
                placed on the hard drive of your computer. You may refuse to
                accept browser cookies by activating the appropriate setting on
                your browser. However, if you select this setting you may be
                unable to access certain parts of the Services. Unless you have
                adjusted your browser setting so that it will refuse cookies,
                our system will issue cookies when you direct your browser to
                the Services. Flash Cookies. Certain features of the Services
                may use local stored objects (or Flash cookies) to collect and
                store information about your preferences and navigation to,
                from, and on the Services. Flash cookies are not managed by the
                same browser settings as are used for browser cookies. Web
                Beacons. Pages of the Services and our emails may contain small
                electronic files known as web beacons (also referred to as clear
                gifs, pixel tags, and single-pixel gifs) that permit the
                Company, for example, to count users who have visited those
                pages or opened an email and for other related website
                statistics (for example, recording the popularity of certain
                website content and verifying system and server integrity).
              </p>
              <h5 className="mb-3 mt-5">
                Third-Party Use of Cookies and Other Tracking Technologies
              </h5>
              <p>
                Some content or applications, including advertisements, on the
                Services are served by third parties, including advertisers, ad
                networks and servers, content providers, and application
                providers. These third parties may use cookies alone or in
                conjunction with web beacons or other tracking technologies to
                collect information about you when you use the Services. The
                information they collect may be associated with your Personal
                Information or they may collect information, including Personal
                Information, about your online activities over time and across
                different websites and other online services. They may use this
                information to provide you with interest-based (behavioral)
                advertising or other targeted content.
              </p>
              <p>
                We do not control these third parties’ tracking technologies or
                how they may be used. If you have any questions about an
                advertisement or other targeted content, you should contact the
                responsible provider directly. For information about how you can
                opt out of receiving targeted advertising from many providers,
                see Choices About How We Use and Disclose Your Information.
              </p>
              <h5 className="mb-3 mt-5">Anyone Under the Age of 18</h5>
              <p>
                The Services are not intended for anyone under 18 years of age.
                We do not knowingly collect Personal Information from children
                under 18. If you are under 18, do not use or provide any
                information using the Services. If we learn we have collected or
                received Personal Information from a child under 18, we will
                delete that information. If you believe we might have any
                information from or about a child under 18, please contact us
                at: legal@debcoins.com
              </p>
              <h5 className="mb-3 mt-5">
                Why We Collect and How We Use Your Information
              </h5>
              <p>
                We use information that we collect about you or that you provide
                to us, including any Personal Information, in order to do the
                following: Present the Services and its contents to you. Provide
                you with information, products, or services that you request
                from us. Provide you with notices about your account, including
                expiration and renewal notices. Carry out our obligations and
                enforce our rights arising from any contracts entered into
                between you and us, including for billing and collection. Notify
                you about changes to the Services or any products or services we
                offer or provide though it. Allow you to participate in
                interactive features on the Services. Fulfill any other specific
                purpose for which you provide the information with your consent.
              </p>
              <p>
                We may also use your information to contact you about our own
                and third parties’ goods and services that may be of interest to
                you. If you do not want your information used in this way,
                please adjust any account-related settings on the Services or
                with any relevant third-party services provider.
              </p>
              <p>
                We may use the information we have collected from you to enable
                us to display advertisements to our advertisers’ target
                audiences. Even though we do not disclose your Personal
                Information for these purposes without your consent, if you
                click on or otherwise interact with an advertisement, the
                advertiser may assume that you meet its target criteria.
              </p>
              <h5 className="mb-3 mt-5">Disclosure of Your Information</h5>
              <p>
                We may disclose aggregated information about our users, and
                information that does not identify any individual (such as
                anonymous usage data, referring/exit pages and URLs, platform
                types, number of clicks, etc.), without restriction.
              </p>
              <p>
                We may disclose Personal Information that we collect, or you
                provide, as described in this Policy: To our subsidiaries and
                affiliates. To contractors, service providers, and other third
                parties we use to support our business. To a buyer or other
                successor in the event of a merger, divestiture, restructuring,
                reorganization, dissolution, or other sale or transfer of some
                or all of Company’s assets, whether as a going concern or as
                part of bankruptcy, liquidation, or similar proceeding, in which
                Personal Information held by Company about the Services users is
                among the assets transferred. To fulfill the purpose for which
                you provide it. For any other purpose disclosed by us when you
                provide the information. With your consent.
              </p>
              <h5 className="mb-3 mt-5">
                Legal Basis for Using and Disclosing Your Information
              </h5>
              <p>
                We may also disclose your Personal Information: To comply with
                any court order, law, or legal process, including to respond to
                any government or regulatory request. To enforce or apply our
                terms of use and other agreements, including for billing and
                collection purposes. To investigate, and deter against
                fraudulent, unauthorized, or illegal activity. To protect the
                rights, property, or safety of Company, our customers, or
                others. For the purposes of compliance, fraud protection and
                credit risk reduction.
              </p>
              <h5 className="mb-3 mt-5">
                Your Information May Be Stored and Processed Anywhere in the
                World
              </h5>
              <p>
                The Company maintains (and requires its service providers to
                maintain) appropriate physical, technical and administrative
                safeguards to protect the security and confidentiality of the
                Personal Information you entrust to us. This information may be
                stored and processed in the United States, Europe, Africa, or
                anywhere else in the world in which the Company or its
                subsidiaries, affiliates or service providers maintain
                facilities. You acknowledge that, as part of making the Services
                available to you, we may transfer your information to or
                maintain your information on computers located outside of your
                state, province, country, or other governmental jurisdiction,
                where the privacy laws may not be as protective as those in your
                jurisdiction. You agree that we have the right to transfer your
                information to any jurisdiction in the world in which the
                Company or its subsidiaries, affiliates or service providers
                maintain facilities and by using the Services, or by otherwise
                providing any information to us, you consent to the processing
                and transfer of that information in any jurisdiction.
              </p>
              <p>
                In those cases where we aggregate information about our users
                (so that it cannot be associated with you or any other
                individual), and collect information that does not identify any
                individual (such as anonymous usage data, referring/exit pages
                and URLs, platform types, number of clicks, etc.) we may store
                and use this information indefinitely without further notice to
                you.
              </p>
              <h5 className="mb-3 mt-5">
                Important Privacy-Related Information Regarding Blockchain
                Technology
              </h5>
              <p>
                In addition to any information that is stored on computers which
                the Company or its subsidiaries, affiliates or service providers
                maintain, the Services may also record data on various
                distributed public blockchain networks which are replicated over
                tens of thousands of computer systems across the globe. Given
                the nature of blockchain technology, once a transaction has been
                added to the blockchain ledger and verified, it is impossible
                for you, us, or anyone to delete or modify that data, and it
                will remain on the blockchain ledger forever. In using the
                Services, you acknowledge that you understand and accept the
                fact that your data may be permanently recorded on one or more
                public blockchains and that it will not be possible to modify or
                delete that data even though the privacy laws of your
                jurisdiction might otherwise require such data to be modified or
                deleted.
              </p>
              <h5 className="mb-3 mt-5">
                How We Protect and Secure Your Information
              </h5>
              <p>
                We take safeguarding your information seriously. We will take
                reasonable administrative, physical, and electronic measures to
                help protect your information from loss, theft, misuse,
                unauthorized access, disclosure, alteration or destruction. All
                that said, no method of transmitting or storing information over
                the Internet is completely secure. With that in mind, we cannot
                guarantee the absolute security of your information. We are not
                responsible for any interception or interruption of any
                communications through the internet or for changes to or losses
                of data. Users of the Services are responsible for maintaining
                the security of any password, user ID or other form of
                authentication involved in obtaining access to password
                protected or secure areas of any of our digital services.
              </p>
              <p>
                We retain information we collect as long as it is necessary and
                relevant to fulfill the purposes outlined in this Policy. In
                addition, we retain Personal Information to comply with
                applicable law where required, prevent fraud, resolve disputes,
                troubleshoot problems, assist with any investigation, enforce
                our Terms of Use, and other actions permitted by law. To
                determine the appropriate retention period for Personal
                Information, we consider the amount, nature, and sensitivity of
                the Personal Information, the potential risk of harm from
                unauthorized use or disclosure of your Personal Information, the
                purposes for which we process your Personal Information and
                whether we can achieve those purposes through other means, and
                the applicable legal requirements.
              </p>
              <h5 className="mb-3 mt-5">Limitation on Liability</h5>
              <p>
                We take safeguarding your information seriously. We will take
                reasonable administrative, physical, and electronic measures to
                help protect your information from loss, theft, misuse,
                unauthorized access, disclosure, alteration or destruction. All
                that said, no method of transmitting or storing information over
                the Internet is completely secure. With that in mind, we cannot
                guarantee the absolute security of your information. We are not
                responsible for any interception or interruption of any
                communications through the internet or for changes to or losses
                of data. Users of the Services are responsible for maintaining
                the security of any password, user ID or other form of
                authentication involved in obtaining access to password
                protected or secure areas of any of our digital services.
              </p>
              <p>
                We retain information we collect as long as it is necessary and
                relevant to fulfill the purposes outlined in this Policy. In
                addition, we retain Personal Information to comply with
                applicable law where required, prevent fraud, resolve disputes,
                troubleshoot problems, assist with any investigation, enforce
                our Terms of Use, and other actions permitted by law. To
                determine the appropriate retention period for Personal
                Information, we consider the amount, nature, and sensitivity of
                the Personal Information, the potential risk of harm from
                unauthorized use or disclosure of your Personal Information, the
                purposes for which we process your Personal Information and
                whether we can achieve those purposes through other means, and
                the applicable legal requirements.
              </p>
              <p>
                In those cases where we aggregate information about our users
                (so that it cannot be associated with you or any other
                individual), and collect information that does not identify any
                individual (such as anonymous usage data, referring/exit pages
                and URLs, platform types, number of clicks, etc.) we may store
                and use this information indefinitely without further notice to
                you.
              </p>
              <h5 className="mb-3 mt-5">Changes to This Policy</h5>
              <p>
                We reserve the right to modify this Policy at any time and will
                post any changes we make on this page with a notice that the
                Policy has been updated. The date the privacy policy was last
                revised is identified at the top of this page. You are
                responsible for ensuring we have an up-to-date active and
                deliverable email address for you, and for periodically visiting
                the Services and this Policy to check for any changes.
              </p>
              <h5 className="mb-3 mt-5">Contact Information</h5>
              <p>
                To ask questions or comment about this privacy policy and our
                privacy practices, contact us at: legal@debcoins.com
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <FooterSection />
    </div>
  );
};

export default index;
