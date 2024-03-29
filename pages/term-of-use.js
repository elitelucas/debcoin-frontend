import React, { useEffect, useState } from "react";
import Head from "next/head";
// import Custom Components
import Header from "../layouts/sections/Header/header";
import FooterSection from "../layouts/sections/Footer/footer";
import "react-light-accordion/demo/css/index.css";
import { Container, Row, Col } from "reactstrap";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const index = () => {
  useEffect(() => {
    document.body.style.setProperty("--primary", "#333D7A");
    document.body.style.setProperty("--secondary", "##FAEBEE");
    document.body.style.setProperty("--light", "#f3f1e8");
    document.body.style.setProperty("--dark", "#9647DB");
  });
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
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
                          Terms of Use
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
              <h5 className="mb-3">Acceptance of the Terms of Use</h5>
              <p>
                The following terms and conditions, together with any documents
                they expressly incorporate by reference (collectively, the
                “Terms of Use”), are entered into by and between you (the “End
                User,” “Licensee,” or “you”) and https://debcoins.com (the
                “Website,” “debcoins,” “we”, “us” “our” “Company” ). These Terms
                of Use govern your access to and use our website, any of its
                subdomains,, and any other content, functionality, products or
                services provided by us (collectively the “Services”), whether
                as a guest or a registered user. Please read the Terms of Use
                carefully before you start to use the Services. By using the
                Services or by clicking to accept or agree to the Terms of Use
                when this option is made available to you, you accept and agree
                to be bound and abide by these Terms of Use and our Privacy
                Policy incorporated herein by reference. If you do not want to
                agree to these Terms of Use or the Privacy Policy, you must not
                access or use the Services. The Services are offered and
                available to users who are 18 years of age or older and reside
                in selected portions of the United States. By using the
                Services, you represent and warrant that you are of legal age to
                form a binding contract with us and meet all the foregoing
                eligibility requirements. If you are accepting these Terms of
                Use and using the Services on behalf of a company, organization,
                government, or other legal entity, you represent and warrant
                that you are authorized to do so and have the authority to bind
                such entity to this these Terms of Use. By accessing our
                Services, you agree that you have read, understood and accepted
                these Terms of Use. If you do not meet all of these
                requirements, you must not access or use the Services.
              </p>
              <h5 className="mb-3 mt-5"> Changes to the Terms of Use</h5>
              <p>
                We may revise and update these Terms of Use from time to time in
                our sole discretion. All changes are effective immediately when
                we post them and apply to all access to and use of the Services
                thereafter. However, any changes to the dispute resolution
                provisions set out in Governing Law and Jurisdiction will not
                apply to any disputes for which the parties have actual notice
                before the change is posted by us.
              </p>
              <p>
                Your continued use of the Services following the posting of
                revised Terms of Use means that you accept and agree to the
                changes. You are expected to check this page from time to time
                so you are aware of any changes, as they are binding on you.
              </p>
              <h5 className="mb-3 mt-5">
                Accessing the Services and Account Security
              </h5>
              <p>
                We reserve the right to shut down or modify the Services, and
                any service or material we provide via the Services, in our sole
                discretion without notice. We will not be liable if for any
                reason all or any of the Services are unavailable at any time or
                for any period. From time to time, we may restrict access to
                some of the Services, or all of them, to users, including
                registered users.
              </p>
              <p>
                You are responsible for: Making all arrangements necessary for
                you to have access to the Services. Ensuring that all persons
                who access the Services through your Internet connection are
                aware of these Terms of Use and comply with them.
              </p>
              <p>
                To access the Services or any of the resources they offer, you
                may be asked to provide certain personal information as required
                by law. It is a condition of your use of the Services that all
                the information you provide to us is correct, current, and
                complete. You agree that all information you provide to register
                with the Services or otherwise, including but not limited to
                through the use of any interactive features available as part of
                the Services, is governed by our Privacy Policy, and you consent
                to all actions we take with respect to your information
                consistent with our Privacy Policy.
              </p>
              <p>
                We have the right to disable any user name, password or other
                identifier, whether chosen by you or provided by us, at any time
                in our sole discretion for any or no reason, including if, in
                our opinion, you have violated any provision of these Terms of
                Use.
              </p>
              <h5 className="mb-3 mt-5">Cryptocurrency Usage</h5>
              <ul className="tos_list">
                <li>
                  <p>No Solicitation or Advice</p>
                  <p>
                    None of the information contained on the Website constitutes
                    a recommendation, solicitation or offer to buy or sell any
                    securities, options or other financial instruments or other
                    assets or provide any investment advice or service.
                  </p>
                  <p>
                    You acknowledge that you are not relying on the Company or
                    any of its affiliates, officers, directors, partners, agents
                    or employees in making an investment decision. Always
                    consider seeking the advice of a qualified professional
                    before making decisions regarding your business and/or
                    investments. The Company does not endorse any investments
                    and shall not be responsible in any way for any transactions
                    you enter into with other Users. You agree that the Company
                    and its affiliates, officers, directors, partners, agents or
                    employees will not be liable for any loss or damages of any
                    sort incurred as a result of any interactions between you
                    and other users.
                  </p>
                </li>
                <li>
                  Conversion Services
                  <p>
                    Eligible users in certain jurisdictions may buy or sell
                    supported cryptocurrency through the Conversion Services.
                    The Conversion Services are subject to the Company
                    "Conversion Rate" for the given transaction. "Conversion
                    Rate" means the price of a given supported cryptocurrency
                    amount in terms of Fiat Currency or other cryptocurrency as
                    quoted on the Website. The Conversion Rate is stated either
                    as a "Buy Price" or as a "Sell Price," which is the price in
                    terms of Fiat Currency or cryptocurrency at which you may
                    buy or sell supported cryptocurrency to Company.
                  </p>
                  <p>
                    You acknowledge that the quoted Buy Price Conversion Rate
                    may not be the same as the Sell Price Conversion Rate at any
                    given time, and that Company may add a margin or “spread” to
                    the quoted Conversion Rate. You agree, as a condition of
                    using any Company Conversion Services, to accept the
                    Conversion Rate as the sole conversion metric. Company
                    reserves the right to delay any Conversion Service
                    transaction if it perceives a risk of fraud or illegal
                    activity. Company does not guarantee the availability of its
                    Conversion Service, and the act of purchasing supported
                    cryptocurrency from Company does not result in a guarantee
                    that you may sell your supported cryptocurrency to Company
                  </p>
                </li>
                <li>Account and Private Keys</li>
                <p>
                  When you use our Services and we provide you with
                  cryptocurrency. We do not store passwords or private keys for
                  you. We never have access to your private keys and do not
                  maintain custody of any private keys on your behalf, and
                  therefore, assume no responsibility for the management of the
                  private keys tied to your use of the services. You are solely
                  responsible for maintaining the security of your private keys.
                  You must keep your private key access information secure.
                  Failure to do so may result in the complete loss of
                  cryptocurrency related to your use of our services.
                </p>
                <li>Transactions</li>
                <p>
                  All cryptocurrency transactions must be confirmed and recorded
                  in the blockchain via a distributed consensus network (a
                  peer-to-peer network), which is not owned, controlled, or
                  operated by us. The Bitcoin blockchain is operated by a
                  decentralized network of independent third parties. We have no
                  control over the Bitcoin blockchain and therefore cannot and
                  will not ensure that any transaction details you submit will
                  be confirmed on the Bitcoin blockchain. You acknowledge and
                  agree that the transaction details you submit may not be
                  completed, or may be substantially delayed, by the Bitcoin
                  blockchain.
                </p>
                <li>No Cancellations or Modifications</li>
                <p>
                  Once transaction details have been submitted to the Bitcoin
                  blockchain, there is no way to cancel or otherwise modify your
                  transaction details. We have no control over the Bitcoin
                  blockchain and do not have the ability to facilitate any
                  cancellation or modification requests.
                </p>
              </ul>
              <p></p>
              <h5 className="mb-3 mt-5">Taxes</h5>
              <p>
                It is your responsibility to determine what, if any, taxes apply
                to the transactions for which you have submitted transaction
                details, and it is your responsibility to report and remit the
                correct tax to the appropriate tax authority. You agree that the
                we are not responsible for determining whether taxes apply to
                your Bitcoin transactions or for collecting, reporting,
                withholding, or remitting any taxes arising from any use of our
                services.
              </p>
              <h5 className="mb-3 mt-5">Trademarks</h5>
              <p>
                The debcoins name, the term “debcoins,” the debcoins logo, and
                all related names, logos, product and service names, designs and
                slogans are trademarks of the Company or its affiliates or
                licensors. You must not use such marks without the prior written
                permission of the debcoins. All other names, logos, product and
                service names, designs and slogans appearing on the Services are
                the trademarks of their respective owners. Reference to any
                products, services, processes or other information by name,
                trademark, manufacturer, supplier or otherwise appearing on the
                Services does not constitute or imply endorsement, sponsorship,
                or recommendation by us unless explicitly stated otherwise. We
                encourage third-party developers to reach out to
                legal@debcoins.com for all branding and licensing questions.
              </p>
              <h5 className="mb-3 mt-5">Prohibited Uses</h5>
              <p>
                You may use the Services only for lawful purposes and in
                accordance with these Terms of Use. You agree not to use the
                Services: In any way that violates any applicable federal,
                state, local or international law or regulation (including,
                without limitation, any laws regarding the export of data or
                software to and from the US or other countries). To exploit,
                harm or attempt to exploit or harm minors in any way by exposing
                them to inappropriate content, asking for personally
                identifiable information or otherwise. To knowingly assist,
                support, or facilitate advertising activities that violate any
                federal, state, local or international sex trafficking law. To
                engage in any other conduct that restricts or inhibits anyone’s
                use or enjoyment of the Services, or which, as determined by us,
                may harm the Company or users of the Services, or expose them to
                liability.
              </p>
              <p>
                Additionally, you agree not to: Use the Services in any manner
                that could disable, overburden, damage, or impair any part of
                the Services or interfere with any other party’s use of the
                Services, including their ability to engage in real time
                activities through the Services. Use any robot, spider or other
                automatic device, process or means to access the Services for
                any purpose, including monitoring or copying any of the material
                on the Services. Use any manual process to monitor or copy any
                of the material on the Services or for any other unauthorized
                purpose without our prior written consent. Use any device,
                software or routine that interferes with the proper working of
                the Services. Introduce any viruses, trojan horses, worms, logic
                bombs or other material to the Services which is malicious or
                technologically harmful. Attempt to gain unauthorized access to,
                interfere with, damage or disrupt any parts of the Services, any
                user accounts on the Services, the server on which the Services
                are stored, or any server, computer or database connected to the
                Services. Attack the Services via a denial-of-service attack or
                a distributed denial-of-service attack. Otherwise attempt to
                interfere with the proper working of the Services. Encourage or
                induce any third-party to engage in any of the activities
                prohibited above.
              </p>
              <h5 className="mb-3 mt-5">Reliance on Information Posted</h5>
              <p>
                The information presented on or through the Services is made
                available solely for general information purposes. We do not
                warrant the accuracy, completeness or usefulness of this
                information. Any reliance you place on such information is
                strictly at your own risk. We disclaim all liability and
                responsibility arising from any reliance placed on such
                materials by you or any other visitor to the Services, or by
                anyone who may be informed of any of its contents.
              </p>
              <p>
                The Services may include content provided by third parties,
                including materials provided by other users, bloggers and
                third-party licensors, syndicators, aggregators and/or reporting
                services. All statements and/or opinions expressed in these
                materials, and all articles and responses to questions and other
                content, other than the content provided by the Company, are
                solely the opinions and the responsibility of the person or
                entity providing those materials. These materials do not
                necessarily reflect the opinion of the Company. We are not
                responsible, or liable to you or any third party, for the
                content or accuracy of any materials provided by any third
                parties.
              </p>
              <h5 className="mb-3 mt-5">Changes to the Services</h5>
              <p>
                We may update the content on the Services from time to time, but
                its content is not necessarily complete or up-to-date. Any of
                the material on the Services may be out of date at any given
                time, and we are under no obligation to update such material.
              </p>
              <h5 className="mb-3 mt-5">
                Information About You and Your Use of the Services
              </h5>
              <p>
                All information we collect via the Services are subject to our
                Privacy Policy. By using the Services, you consent to all
                actions taken by us with respect to your information in
                compliance with Privacy Policy.
              </p>
              <h5 className="mb-3 mt-5">
                Linking to the Services and Social Media Features
              </h5>
              <p>
                You may link to our Services, provided you do so in a way that
                is fair and legal and does not damage our reputation or take
                advantage of it, but you must not establish a link in such a way
                as to suggest any form of association, approval or endorsement
                on our part without our express written consent.
              </p>
              <p>
                You may use these features solely as they are provided by us,
                solely with respect to the content they are displayed with and
                otherwise in accordance with any additional terms and conditions
                we provide with respect to such features. Subject to the
                foregoing, you must not: Establish a link from any website or
                online service that is not owned by you. Cause the Services or
                portions of it to be displayed, or appear to be displayed by,
                for example, framing, deep linking or in-line linking, on any
                other site. Otherwise take any action with respect to the
                materials available on the Services that is inconsistent with
                any other provision of these Terms of Use.
              </p>
              <p>
                You agree to cooperate with us in causing any unauthorized
                framing or linking immediately to cease. We reserve the right to
                withdraw linking permission without notice.
              </p>
              <p>
                We may disable all or any social media features and any links at
                any time without notice in our discretion.
              </p>
              <h5 className="mb-3 mt-5">Links from the Services</h5>
              <p>
                If the Services contains links to other sites and resources
                provided by third parties, these links are provided for your
                convenience only. This includes links contained in
                advertisements, including banner advertisements and sponsored
                links. We have no control over the contents of those sites or
                resources and accept no responsibility for them or for any loss
                or damage that may arise from your use of them. If you decide to
                access any of the third-party websites linked to the Services,
                you do so entirely at your own risk and subject to the terms and
                conditions of use for such websites.
              </p>
              <h5 className="mb-3 mt-5">Disclaimer of Warranties</h5>
              <p>
                You understand that we cannot and do not guarantee or warrant
                that files available for downloading from the Internet or the
                Services will be free of viruses or other destructive code. You
                are responsible for implementing sufficient procedures and
                checkpoints to satisfy your particular requirements for
                anti-virus protection and accuracy of data input and output, and
                for maintaining a means external to our site for any
                reconstruction of any lost data. WE WILL NOT BE LIABLE FOR ANY
                LOSS OR DAMAGE CAUSED BY A DISTRIBUTED DENIAL-OF-SERVICE ATTACK,
                VIRUSES OR OTHER TECHNOLOGICALLY HARMFUL MATERIAL THAT MAY
                INFECT YOUR COMPUTER EQUIPMENT, COMPUTER PROGRAMS, DATA OR OTHER
                PROPRIETARY MATERIAL DUE TO YOUR USE OF THE SERVICES OR ANY
                SERVICES OR ITEMS OBTAINED THROUGH THEM OR TO YOUR DOWNLOADING
                OF ANY MATERIAL POSTED ON IT, OR ON ANY WEBSITE LINKED TO IT.
              </p>
              <p>
                WE WILL ALSO NOT BE LIABLE FOR ANY LOSS OR DAMAGE CAUSED BY
                UNAUTHORIZED ACCESS BY A THIRD PARTY TO YOUR PRIVATE KEYS.
              </p>
              <p>
                YOUR USE OF THE SERVICES, ITS CONTENT AND ANYTHING OBTAINED
                THROUGH THE SERVICES IS AT YOUR OWN RISK. THE SERVICES, ITS
                CONTENT AND ANYTHING OBTAINED THROUGH THE SERVICES ARE PROVIDED
                ON AN “AS IS” AND “AS AVAILABLE” BASIS, WITHOUT ANY WARRANTIES
                OF ANY KIND, EITHER EXPRESS OR IMPLIED. NEITHER THE COMPANY NOR
                ANY PERSON ASSOCIATED WITH THE COMPANY MAKES ANY WARRANTY OR
                REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY,
                RELIABILITY, QUALITY, ACCURACY OR AVAILABILITY OF THE SERVICES.
                WITHOUT LIMITING THE FOREGOING, NEITHER THE COMPANY NOR ANYONE
                ASSOCIATED WITH THE COMPANY REPRESENTS OR WARRANTS THAT THE
                SERVICES, THEIR CONTENT OR ANYTHING OBTAINED THROUGH THE
                SERVICES WILL BE ACCURATE, RELIABLE, ERROR-FREE OR
                UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT OUR SITE OR
                THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER
                HARMFUL COMPONENTS OR THAT THE SERVICES OR ANYTHING OBTAINED
                THROUGH THE SERVICES WILL OTHERWISE MEET YOUR NEEDS OR
                EXPECTATIONS.
              </p>
              <p>
                THE COMPANY HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER
                EXPRESS OR IMPLIED, STATUTORY OR OTHERWISE, INCLUDING BUT NOT
                LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT
                AND FITNESS FOR PARTICULAR PURPOSE.
              </p>
              <p>
                THE FOREGOING DOES NOT AFFECT ANY WARRANTIES WHICH CANNOT BE
                EXCLUDED OR LIMITED UNDER APPLICABLE LAW.
              </p>
              <h5 className="mb-3 mt-5">Limitation on Liability</h5>
              <p>
                YOU ACCEPT AND ACKNOWLEDGE THAT THERE ARE RISKS ASSOCIATED WITH
                UTILIZING INTERNET-BASED BLOCKCHAIN ACCOUNT SERVICES INCLUDING,
                BUT NOT LIMITED TO, THE RISK OF FAILURE OF HARDWARE, SOFTWARE
                AND INTERNET CONNECTIONS, THE RISK OF MALICIOUS SOFTWARE
                INTRODUCTION, AND THE RISK THAT THIRD-PARTIES MAY OBTAIN
                UNAUTHORIZED ACCESS TO INFORMATION STORED WITHIN OR ASSOCIATED
                WITH YOUR ACCOUNT, INCLUDING, BUT NOT LIMITED TO YOUR PRIVATE
                KEY(S) (“PRIVATE KEY”). YOU ACCEPT AND ACKNOWLEDGE THAT WE WILL
                NOT BE RESPONSIBLE FOR ANY COMMUNICATION FAILURES, DISRUPTIONS,
                ERRORS, DISTORTIONS, OR DELAYS YOU MAY EXPERIENCE WHEN USING THE
                SERVICES, HOWEVER CAUSED.
              </p>
              <p>
                IN NO EVENT WILL THE COMPANY, ITS AFFILIATES OR THEIR LICENSORS,
                SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS OR DIRECTORS BE
                LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING
                OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE
                SERVICES, ANY WEBSITES LINKED TO THEM, ANY CONTENT ON THE
                SERVICES OR SUCH OTHER WEBSITES OR ANY SERVICES OR ITEMS
                OBTAINED THROUGH THE SERVICES OR SUCH OTHER WEBSITES, INCLUDING
                ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL OR
                PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO, PERSONAL INJURY,
                PAIN AND SUFFERING, EMOTIONAL DISTRESS, LOSS OF REVENUE, LOSS OF
                PROFITS, LOSS OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE,
                LOSS OF GOODWILL, LOSS OF DATA, AND WHETHER CAUSED BY TORT
                (INCLUDING NEGLIGENCE), BREACH OF CONTRACT OR OTHERWISE, EVEN IF
                FORESEEABLE.
              </p>
              <p>
                THE FOREGOING DOES NOT AFFECT ANY LIABILITY WHICH CANNOT BE
                EXCLUDED OR LIMITED UNDER APPLICABLE LAW.
              </p>
              <h5 className="mb-3 mt-5">Indemnification</h5>
              <p>
                You agree to defend, indemnify and hold harmless the Company,
                its affiliates, licensors and service providers, and its and
                their respective officers, directors, employees, contractors,
                agents, licensors, suppliers, successors and assigns from and
                against any claims, liabilities, damages, judgments, awards,
                losses, costs, expenses or fees (including reasonable attorneys’
                fees) arising out of or relating to your violation of these
                Terms of Use or your use of the Services, including, but not
                limited to, your User Contributions, any use of the Services’
                content, services and products other than as expressly
                authorized in these Terms of Use or your use of any information
                obtained from the Services.
              </p>
              <h5 className="mb-3 mt-5">Governing Law and Jurisdiction</h5>
              <p>
                These Terms of Use are governed by and construed in accordance
                with the internal laws of Tennessee without giving effect to any
                choice or conflict of law provision or rule. Any legal suit,
                action, or proceeding arising out of or related to these Terms
                of Use or the Services shall be instituted exclusively in the
                federal courts of Tennessee. You waive any and all objections to
                the exercise of jurisdiction over you by such courts and to
                venue in such courts.
              </p>
              <h5 className="mb-3 mt-5">Arbitration</h5>
              <p>
                At the Company’s sole discretion, it may require you to submit
                any disputes arising under these Terms of Use or from use of the
                Services, including disputes arising from or concerning their
                interpretation, violation, invalidity, non-performance, or
                termination, to final and binding arbitration under the Rules of
                Arbitration of the American Arbitration Association applying
                Tennessee law.
              </p>
              <h5 className="mb-3 mt-5">Limitation of Time to File Claims</h5>
              <p>
                ANY CAUSE OF ACTION OR CLAIM YOU MAY HAVE ARISING OUT OF OR
                RELATING TO THIS AGREEMENT OR THE APPLICATION MUST BE COMMENCED
                WITHIN ONE (1) YEAR AFTER THE CAUSE OF ACTION ACCRUES OTHERWISE
                SUCH CAUSE OF ACTION OR CLAIM IS PERMANENTLY BARRED.
              </p>
              <h5 className="mb-3 mt-5">Relationship</h5>
              <p>
                Nothing in these Terms of Use is intended to nor shall create
                any partnership, joint venture, agency, consultancy, or
                trusteeship, between you and us.
              </p>
              <h5 className="mb-3 mt-5">Waiver and Severability</h5>
              <p>
                No waiver by the Company of any term or condition set forth in
                these Terms of Use shall be deemed a further or continuing
                waiver of such term or condition or a waiver of any other term
                or condition, and any failure of the Company to assert a right
                or provision under these Terms of Use shall not constitute a
                waiver of such right or provision.
              </p>
              <p>
                If any provision ofthese Terms of Use is held by a court or
                other tribunal of competent jurisdiction to be invalid, illegal
                or unenforceable for any reason, such provision shall be
                eliminated or limited to the minimum extent such that the
                remaining provisions of the Terms of Use will continue in full
                force and effect.
              </p>
              <h5 className="mb-3 mt-5">Entire Agreement</h5>
              <p>
                These Terms of Use, our Privacy Policy and any applicable End
                User License Agreement constitute the sole and entire agreement
                between you and the Company with respect to the Services and
                supersede all prior and contemporaneous understandings,
                agreements, representations and warranties, both written and
                oral, with respect to the Services.
              </p>
              <h5 className="mb-3 mt-5">Your Comments and Concerns</h5>
              <p>The Services are operated by:</p>
              <br />
              <p>Re: Debcoins</p>
              <br />
              <p>200 W. Martin Luther King Blvd.</p>
              <br />
              <p>Suite 1000</p>
              <br />
              <p>Chattanooga, Tennessee 37402</p>
              <br />
              <p>United States of America</p>
              <br />
              <p>
                All other feedback, comments, requests for technical support and
                other communications relating to the Services should be directed
                to support@debcoins.com
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
