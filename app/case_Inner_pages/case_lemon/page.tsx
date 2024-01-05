import React from "react";
import styles from "../../styles/case.module.css";
import Image from "next/image";
import { Row, Col } from "antd";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import Footer from "../../footer/page";
import OurServices from "../../our_service/page";

const LemonJelly = () => {
  return (
    <>
      <div>
        <div className={styles.inpix_hero}>
          <div className={styles.container}>
            <h1 className={styles.lemon_h1}>Lemon Jelly</h1>
            <p className={styles.inpix_hero_p}>
              Premium footwear online for North American customers
            </p>
            <p className={styles.inpix_hero_p}>
              Modern e-commerce website with the best user experience to
              increase sales in a relatively new geography
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
                      src="/images/inpix-1.svg"
                      width={70}
                      height={70}
                      alt=""
                    />{" "}
                  </li>
                  <li>
                    <Image
                      src="/images/inpix-2.svg"
                      width={70}
                      height={70}
                      alt=""
                    />{" "}
                  </li>
                  <li>
                    <Image
                      src="/images/inpix-3.svg"
                      width={70}
                      height={70}
                      alt=""
                    />{" "}
                  </li>
                  <li>
                    <Image
                      src="/images/inpix-4.svg"
                      width={70}
                      height={70}
                      alt=""
                    />{" "}
                  </li>
                  <li>
                    <Image
                      src="/images/inpix-5.svg"
                      width={70}
                      height={70}
                      alt=""
                    />{" "}
                  </li>
                  <li>
                    <Image
                      src="/images/inpix-6.svg"
                      width={70}
                      height={70}
                      alt=""
                    />{" "}
                  </li>
                  <li>
                    <Image
                      src="/images/inpix-7.svg"
                      width={70}
                      height={70}
                      alt=""
                    />{" "}
                  </li>
                  <li>
                    <Image
                      src="/images/inpix-1.svg"
                      width={70}
                      height={70}
                      alt=""
                    />{" "}
                  </li>
                  <li>
                    <Image
                      src="/images/inpix-2.svg"
                      width={70}
                      height={70}
                      alt=""
                    />{" "}
                  </li>
                  <li>
                    <Image
                      src="/images/inpix-3.svg"
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
                    LemonJelly has been a prominent player in the fashion
                    industry, specializing in women's footwear for several
                    years. With its headquarters in Europe, LemonJelly faced the
                    challenge of limited market share and brand awareness in
                    North America. While website traffic was reasonable, the
                    conversion rate to actual orders remained below average.
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
                      <p>LemonJelly</p>
                    </li>
                    <li>
                      <h3>Industry </h3>
                    </li>
                    <li>
                      <p> Fashion / Footwear</p>
                    </li>
                    <li>
                      <h3> Years in Industry </h3>
                    </li>
                    <li>
                      <p className={styles.last_p}>5+ Years</p>
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
                Enhancing Brand Awareness and Increasing Online Sales in the
                North American Market
              </h3>
              <p>
                The opportunity for LemonJelly lies in substantially increasing
                brand awareness and online sales for their premium European
                footwear brand in the North American market. Beyond this
                overarching objective, several specific opportunities emerged:
              </p>

              <h2>Solution</h2>
              <h3>
                Revitalizing the LemonJelly Website for Enhanced Sales and User
                Experience
              </h3>
              <p>
                The Blobstation team embarked on a comprehensive solution to
                address LemonJelly's challenges. The solution encompassed
                several key features and improvements:
              </p>
            </div>
          </div>

          <div className={styles.video_wrapper}>
            <div className={styles.video_container}>
              <div className={styles.video_main_box}>
                <div className={styles.video_left_box}>
                  <video className={styles.video_box} autoPlay muted loop>
                    <source src="/images/lemon-1.mp4" />
                  </video>
                </div>
                <div className={styles.video_right_box}>
                  <h2>Market Expansion Strategy</h2>
                  <p>
                    A tailored strategy was developed to expand LemonJelly's
                    market presence in North America, including targeted
                    marketing efforts and localization.
                  </p>
                </div>
              </div>

              <div className={styles.video_main_box2}>
                <div className={styles.video_left_box2}>
                  <h2>User Experience Enhancement</h2>
                  <p>
                    The team conducted a thorough site audit to identify areas
                    for improvement. Based on the audit report, a structured
                    action plan was created, focusing on enhancing the website's
                    user experience.
                  </p>
                </div>
                <div className={styles.video_right_box2}>
                  <video className={styles.video_box} autoPlay muted loop>
                    <source src="/images/lemon-2.mp4" />
                  </video>
                </div>
              </div>

              <div className={styles.video_main_box}>
                <div className={styles.video_left_box}>
                  <video className={styles.video_box} autoPlay muted loop>
                    <source src="/images/lemon-3.mp4" />
                  </video>
                </div>
                <div className={styles.video_right_box}>
                  <h2>Technical Foundation Improvements</h2>
                  <p>
                    The initial phase involved addressing fundamental issues
                    such as page speed optimization, CSS/JS normalization, and
                    sitemap enhancements to improve the site's technical
                    foundation.
                  </p>
                </div>
              </div>

              <div className={styles.video_main_box2}>
                <div className={styles.video_left_box2}>
                  <h2>E-commerce Enhancements</h2>
                  <p>
                    A crucial aspect of the solution was to optimize the
                    e-commerce aspects, specifically improving the product
                    pages' attractiveness and informativeness.
                  </p>
                </div>
                <div className={styles.video_right_box2}>
                  <video className={styles.video_box} autoPlay muted loop>
                    <source src="/images/lemon-4.mp4" />
                  </video>
                </div>
              </div>

              <div className={styles.video_main_box}>
                <div className={styles.video_left_box}>
                
                  <Image
                       className={styles.video_box} 
                        src="/images/lemon-5.png"
                        width={625}
                        height={400}
                        alt=""
                      />
                </div>
                <div className={styles.video_right_box}>
                  <h2>Analytics Integration</h2>
                  <p>
                    Google Analytics was seamlessly integrated to gather
                    insights into visitor behavior, user acquisition channels,
                    and reporting. This data-driven approach enabled
                    data-informed decision-making.
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
                        src="/images/root-bg-coma.svg"
                        width={56}
                        height={44}
                        alt=""
                      />
                    </li>

                    <li>
                      <p>
                        Team at Blobstation did an amazing job for our
                        e-commerce website. I worked with them very closely and
                        they managed to exceed the expectations. They helped
                        with enhancing user experience on the website which
                        eventually help generate more sales and more business.
                        The overall experience was very good and definitely
                        working together on more projects.
                      </p>
                      <Image
                        className={styles.detail_coma_Img_sm_responsive}
                        src="/images/root-sm-coma.svg"
                        width={21}
                        height={16}
                        alt=""
                      />
                      <h3>Yaniv Dayan</h3>
                      <h5> E-commerce Manager</h5>
                    </li>

                    <Image
                      className={styles.detail_coma_Img_sm}
                      src="/images/root-sm-coma.svg"
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
                    src="/images/detail-lemon.svg"
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
                ” LemonJelly wants to build mobile application in the near
                future to aim for a mobile first approach. App will be available
                in both iOS and Android platforms. Blobstation team is working
                on scope and feature sets requirement analysis to kick off
                development soon.”
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

export default LemonJelly;
