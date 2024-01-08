import React from "react";
import styles from "../../styles/case.module.css";
import Image from "next/image";
import { Row, Col } from "antd";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import Footer from "../../footer/page";
import OurServices from "../../our_service/page";

const TrueMoso = () => {
  return (
    <> 
      <div>
        <div className={styles.inpix_hero}>
          <div className={styles.container}>
            <h1 className={styles.true_h1}>True Moso</h1>
            <p className={styles.inpix_hero_p}>Data driven business decisions for your next product</p>
            <p className={styles.inpix_hero_p}>
              Make new product investment decisions with more confidence using
              our product strategy tool
            </p>

            <h2>Provided Services</h2>
            <div className={styles.buttons_design}>
              <div className={styles.design_btn}>Desktop App</div>
              <div className={styles.design_btn}> Deployment</div>
              <div className={styles.design_btn}>Strategic Consulting</div>
              <div className={styles.design_btn}>Testing</div>
            </div>
          </div>

          <div className={styles.container_fluid2}>
            <div className={styles.inpix_slider_box}>
              <div className={styles.inpix_slider_left}></div>
              <div className={styles.inpix_slider_right}></div>
              <Marquee>
                <ul>
                  <li>
                    <Image
                      src="/images/true-sli-1.svg"
                      width={70}
                      height={70}
                      alt=""
                    />{" "}
                  </li>
                  <li>
                    <Image
                      src="/images/true-sli-2.svg"
                      width={70}
                      height={70}
                      alt=""
                    />{" "}
                  </li>
                  <li>
                    <Image
                      src="/images/true-sli-3.svg"
                      width={70}
                      height={70}
                      alt=""
                    />{" "}
                  </li>
                  <li>
                    <Image
                      src="/images/true-sli-4.svg"
                      width={70}
                      height={70}
                      alt=""
                    />{" "}
                  </li>
                  <li>
                    <Image
                      src="/images/true-sli-5.svg"
                      width={70}
                      height={70}
                      alt=""
                    />{" "}
                  </li>
                  <li>
                    <Image
                      src="/images/true-sli-6.svg"
                      width={70}
                      height={70}
                      alt=""
                    />{" "}
                  </li>
                  <li>
                    <Image
                      src="/images/true-sli-7.svg"
                      width={70}
                      height={70}
                      alt=""
                    />{" "}
                  </li>
                  <li>
                  <Image
                      src="/images/true-sli-1.svg"
                      width={70}
                      height={70}
                      alt=""
                    />{" "}
                  </li>
                  <li>
                    <Image
                      src="/images/true-sli-2.svg"
                      width={70}
                      height={70}
                      alt=""
                    />{" "}
                  </li>
                  <li>
                    <Image
                      src="/images/true-sli-3.svg"
                      width={70}
                      height={70}
                      alt=""
                    />{" "}
                  </li>
                 
                </ul>
              </Marquee>
            </div>
          </div>

          <div className={styles.container}>
            <div className={styles.client_bg_wrapper}>
              <Row>
                <Col
                  xs={{ span: 24 }}
                  sm={{ span: 24 }}
                  md={{ span: 12 }}
                  lg={{ span: 14 }}
                  xl={{ span: 15 }}
                >
                  <h2>Client Background</h2>
                  <p>
                    The client, a forward-thinking company, recognized the
                    inherent complexity in deciding whether to embark on new
                    product development ventures. With a commitment to
                    innovation, they aimed to develop a tool that would equip
                    businesses with the insights needed to navigate this
                    intricate decision-making process effectively.
                  </p>
                </Col>
                <div className={styles.client_space}></div>
                <Col
                  xs={{ span: 24 }}
                  sm={{ span: 24 }}
                  md={{ span: 8 }}
                  lg={{ span: 8 }}
                  xl={{ span: 8 }}
                >
                  {" "}
                  <ul className={styles.client_ul}>
                    <li>
                      <h3>Project </h3>
                    </li>
                    <li>
                      <p> True Moso</p>
                    </li>
                    <li>
                      <h3>Industry </h3>
                    </li>
                    <li>
                      <p> Utilities</p>
                    </li>
                    <li>
                      <h3> Years in Industry </h3>
                    </li>
                    <li>
                      <p className={styles.last_p}>8+ Years</p>
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>
          </div>

          <div className={styles.opportunity_wrapper}>
            <div className={styles.container}>
              <h2>Opportunity</h2>
              <h3>
                Elevate Product Investment Decision-Making with Data-Driven
                Insights
              </h3>
              <p>
                The primary opportunity presented by the True Moso App was to
                revolutionize the way businesses approach product strategy. By
                harnessing data-driven insights and leveraging a wide range of
                critical inputs, the app aimed to empower companies to make
                well-informed decisions regarding new product investments.
              </p>

              <h2>Solution</h2>
              <h3>The True Moso App: Transforming Product Strategy</h3>
              <p>
                The True Moso App was designed to address the multifaceted
                nature of product strategy and investment decisions. Key
                features of the app included:
              </p>
            </div>
          </div>

          <div className={styles.video_wrapper}>
            <div className={styles.video_container}>
              <div className={styles.video_main_box}>
                <div className={styles.video_left_box}>
                  <video className={styles.video_box}
                    autoPlay
                    muted
                    loop
                   
                  >
                    <source src="/images/true-1.mp4" />
                  </video>
                </div>
                <div className={styles.video_right_box}>
                  <h2>Comprehensive Data Inputs</h2>
                  <p>
                    The app allowed users to input a diverse array of data,
                    including market research, competitor analysis, projected
                    market growth, cost estimates, and more.
                  </p>
                </div>
              </div>

              <div className={styles.video_main_box2}>
                <div className={styles.video_left_box2}>
                <h2>Advanced Analytics</h2>
                  <p>
                    Cutting-edge analytics and algorithms processed the data
                    inputs, providing users with detailed insights and
                    visualizations.
                  </p>
                </div>
                <div className={styles.video_right_box2}>
                <video className={styles.video_box}
                    autoPlay
                    muted
                    loop
                   
                  >
                    <source src="/images/true.mp4" />
                  </video>
               
                </div>
              </div>


              <div className={styles.video_main_box}>
                <div className={styles.video_left_box}>
                  <video className={styles.video_box}
                    autoPlay
                    muted
                    loop
                   
                  >
                    <source src="/images/true-3.mp4"/>
                  </video>
                </div>
                <div className={styles.video_right_box}>
                <h2>Scenario Planning</h2>
                  <p>
                    Users could explore various scenarios and hypotheses to
                    assess the potential outcomes of different product
                    investment decisions.
                  </p>
                </div>
              </div>

              <div className={styles.video_main_box2}>
                <div className={styles.video_left_box2}>
                <h2>Financial Modeling</h2>
                  <p>
                    The app incorporated robust financial modeling tools to
                    calculate ROI and NPV, helping businesses gauge the
                    financial viability of new products.
                  </p>
                </div>
                <div className={styles.video_right_box2}>
                <video className={styles.video_box}
                    autoPlay
                    muted
                    loop
                   
                  >
                    <source src="/images/true.mp4" />
                  </video>
               
                </div>
              </div>

              <div className={styles.video_main_box}>
                <div className={styles.video_left_box}>
                  <video className={styles.video_box}
                    autoPlay
                    muted
                    loop
                   
                  >
                    <source src="/images/true-6.mp4"/>
                  </video>
                </div>
                <div className={styles.video_right_box}>
                <h2>Collaborative Workspace</h2>
                  <p>
                    Teams could collaborate within the app, sharing data,
                    insights, and recommendations, streamlining the
                    decision-making process.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.process_wrapper}>
          <div className={styles.container}>
            <Row className={styles.process_row}>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 11 }}
                lg={{ span: 7 }}
                xl={{ span: 7 }}
              >
                <div>
                  <h5 className={styles.process_h5}>Our Process</h5>
                  <p className={styles.process_p}>
                    Following agile methodology with a scrum framework, the
                    development of the application was relatively seamless.
                    Having clients always in sync with the tech team on a
                    day-to-day basis, the feedback cycle was very short and
                    agile. The project was delivered on time and within budget.
                  </p>
                  <button className={styles.start_btn}>
                    <Link href="/contacts">Get Started</Link>
                  </button>
                </div>
              </Col>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 11 }}
                lg={{ span: 8 }}
                xl={{ span: 8 }}
              >
                <div className={styles.process_box}>
                  <Image
                    src="/images/process-4.svg"
                    width={77}
                    height={65}
                    alt=""
                  />
                  <h6>Development Methodology</h6>
                  <p>
                    Blobstation has followed an Agile development methodology.
                    Daily scrum meetings to discuss things which are done, in
                    progress and blocked if any. Also weekly sprint meetings to
                    decide on the upcoming week’s scope. The tech lead also
                    presented a demo every end of the sprint to give the
                    progress report and collect early feedback.
                  </p>
                </div>
              </Col>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 11 }}
                lg={{ span: 8 }}
                xl={{ span: 8 }}
              >
                <div className={styles.process_box}>
                  <Image
                    src="/images/process-2.svg"
                    width={77}
                    height={65}
                    alt=""
                  />
                  <h6>Resources</h6>
                  <p>
                    The project started with UI/UX for the first two weeks. One
                    dedicated designer worked very closely with a client
                    representative to work on flow. In parallel, two backend
                    developers started building the foundation for the project
                    core logic. Two frontend developers worked in sync with
                    backend developers to integrate the proposed UI/UX. One
                    project manager used to keep track of tasks and the time
                    taken to complete them.
                  </p>
                </div>
              </Col>
            </Row>

            <Row className={styles.process_row}>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 11 }}
                lg={{ span: 7 }}
                xl={{ span: 7 }}
              >
                <div className={styles.process_box_sm}>
                  <Image
                    src="/images/process-3.svg"
                    width={77}
                    height={65}
                    alt=""
                  />
                  <h6>Engagement Model</h6>
                  <p>
                    Here, we followed the time and material engagement model. We
                    used the JIRA project management tool for issue tracking.
                  </p>
                </div>
              </Col>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 11 }}
                lg={{ span: 8 }}
                xl={{ span: 8 }}
              >
                <div className={styles.process_box_sm}>
                  <Image
                    src="/images/process-4.svg"
                    width={77}
                    height={65}
                    alt=""
                  />
                  <h6>Timeline</h6>
                  <p>
                    The project took two and half months to complete which
                    included UI/UX, development, quality assurance and
                    deployment.
                  </p>
                </div>
              </Col>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 11   }}
                lg={{ span: 8 }}
                xl={{ span: 8 }}
              >
                <div className={styles.process_box_sm}>
                  <Image
                    src="/images/process-5.svg"
                    width={77}
                    height={65}
                    alt=""
                  />
                  <h6>Deployment</h6>
                  <p>
                    Upon successful testing and client approval, we proceed to
                    deploy the app to the relevant app stores, making it
                    accessible to your audience.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>

          <div className={styles.details_wrapper}>
            <div className={styles.container}>
              <div className={styles.detail_box}>
                <div className={styles.detail_content}>
                  <ul className={styles.detail_ul}>
                    <li className={styles.detail_coma_Img}>
                      <Image
                        src="/images/big-coma.svg"
                        width={56}
                        height={44}
                        alt=""
                      />
                    </li>

                    <li>
                      <p>
                        True Moso App was made possible by Blobstation's
                        exceptional team. Their expertise and collaborative
                        approach made development a breeze. We couldn't have
                        asked for a better partner
                      </p>
                      <Image
                        className={styles.detail_coma_Img_sm_responsive}
                        src="/images/small-coma.svg"
                        width={21}
                        height={16}
                        alt=""
                      />
                      <h3>Siddharth</h3>
                      <h4> Founder</h4>
                    </li>

                    <Image
                      className={styles.detail_coma_Img_sm}
                      src="/images/small-coma.svg"
                      width={21}
                      height={16}
                      alt=""
                    />

                    {/* <li className={styles.detail_coma_Img_sm}>
                    <Image
                      src="/images/small-coma.svg"
                      width={21}
                      height={16}
                      alt=""
                    />
                  </li> */}
                  </ul>
                </div>
                <div className={styles.detail_Img}>
                  <Image
                    className={styles.detail_Img_space}
                    src="/images/true-detail.svg"
                    width={202}
                    height={236}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.next_wrapper}>
            <div className={styles.container}>
              <h1>What's Next</h1>
              <p>
                “The True Moso App exemplified the transformative potential of
                technology in facilitating data-driven decision-making,
                revolutionizing the way businesses approach product strategy and
                investment.”
              </p>
            </div>
          </div>
        </div>

        <OurServices />
        <Footer />
      </div>
    </>
  );
};

export default TrueMoso;
