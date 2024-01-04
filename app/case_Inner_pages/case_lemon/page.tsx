import React from "react";
import styles from "../../styles/case.module.css";
import Image from "next/image";
import { Row, Col } from "antd";
import Marquee from "react-fast-marquee";
import Footer from "../../footer/page";
import OurServices from "../../our_service/page";

const LemonJelly = () => {
  return (
    <>
      <div>
        <div className={styles.inpix_hero}>
          <div className={styles.container}>
            <h1>Lemon Jelly</h1>
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
                      <h4> E-commerce Manager</h4>
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
