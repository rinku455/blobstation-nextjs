import React from "react";
import styles from "../../styles/case.module.css";
import Image from "next/image";
import { Row, Col } from "antd";
import Marquee from "react-fast-marquee";
import Footer from "../../footer/page";
import OurServices from "../../our_service/page";

const TrueMoso = () => {
  return (
    <>
      <div>
        <div className={styles.inpix_hero}>
          <div className={styles.container}>
            <h1>True Moso</h1>
            <p>Data driven business decisions for your next product</p>
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

          <div className={styles.Images_wrapper}>
            <div className={styles.container}>
              <div className={styles.Image_main_box}>
                <div className={styles.Image_left_box}>
                    
                  <Image
                    src="/images/true-1.mp4"
                    width={330}
                    height={495}
                    alt=""
                  />
                </div>
                <div className={styles.Image_right_box}>
                  <h2>Comprehensive Data Inputs</h2>
                  <p>
                    The app allowed users to input a diverse array of data,
                    including market research, competitor analysis, projected
                    market growth, cost estimates, and more.
                  </p>
                </div>
              </div>

              <div className={styles.Image_main_box2}>
                <div className={styles.Image_left_box2}>
                  <h2>Advanced Analytics</h2>
                  <p>
                    Cutting-edge analytics and algorithms processed the data
                    inputs, providing users with detailed insights and
                    visualizations.
                  </p>
                </div>
                <div className={styles.Image_right_box2}>
                  <Image
                    src="/images/true.mp4"
                    width={330}
                    height={495}
                    alt=""
                  />
                </div>
              </div>

              <div className={styles.Image_main_box}>
                <div className={styles.Image_left_box}>
                  <Image
                    src="/images/true-3.mp4"
                    width={330}
                    height={495}
                    alt=""
                  />
                </div>
                <div className={styles.Image_right_box}>
                  <h2>Scenario Planning</h2>
                  <p>
                    Users could explore various scenarios and hypotheses to
                    assess the potential outcomes of different product
                    investment decisions.
                  </p>
                </div>
              </div>

              <div className={styles.Image_main_box2}>
                <div className={styles.Image_left_box2}>
                  <h2>Financial Modeling</h2>
                  <p>
                    The app incorporated robust financial modeling tools to
                    calculate ROI and NPV, helping businesses gauge the
                    financial viability of new products.
                  </p>
                </div>
                <div className={styles.Image_right_box2}>
                  <Image
                    src="/images/true-4.mp4"
                    width={330}
                    height={495}
                    alt=""
                  />
                </div>
              </div>
              <div className={styles.Image_main_box}>
                <div className={styles.Image_left_box}>
                  <Image
                    src="/images/true-6.mp4"
                    width={330}
                    height={495}
                    alt=""
                  />
                </div>
                <div className={styles.Image_right_box}>
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
                      <h3> Founder</h3>
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
