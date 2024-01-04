import React from "react";
import styles from "../../styles/case.module.css";
import Image from "next/image";
import { Row, Col } from "antd";
import Marquee from "react-fast-marquee";
import Footer from "../../footer/page";
import OurServices from "../../our_service/page";

const Property = () => {
  return (
    <>
      <div>
        <div className={styles.inpix_hero}>
          <div className={styles.container}>
            <h1>Batbatian Property Portal</h1>
            <p className={styles.inpix_hero_p}>
              Put up available real estate properties online to potential buyers
            </p>
            <p className={styles.inpix_hero_p}>
              A web portal where potential customers can checkout available
              properties for sale or rent.
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
                    Batbatian had solidified its position as a trusted real
                    estate agency in the Montreal region, offering a wide range
                    of property listings to prospective buyers and renters.
                    However, the client realized the need to adapt to the
                    changing market dynamics, with more homebuyers and renters
                    turning to the internet to find their ideal properties.
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
                      <p> Batbatian</p>
                    </li>
                    <li>
                      <h3>Industry </h3>
                    </li>
                    <li>
                      <p> Real Estate</p>
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
              <h3>Unlock the Power of Online Lead Generation</h3>
              <p>
                The primary opportunity presented to Batbatian was to leverage
                their online presence for effective lead generation. The
                objective was clear: to create a comprehensive property portal
                that would serve as a one-stop destination for potential buyers
                and renters, offering a wide range of real estate listings.
              </p>

              <h2>Solution</h2>
              <h3>
                The Batbatian Property Portal: Transforming Real Estate
                Marketing
              </h3>
              <p>
                The solution to this challenge was the development of the
                Batbatian Property Portal, a dynamic platform that transformed
                the way real estate properties were presented to potential
                buyers and renters. Key features of the portal included:
              </p>
            </div>
          </div>

          <div className={styles.video_wrapper}>
            <div className={styles.video_container}>
              <div className={styles.video_main_box}>
                <div className={styles.video_left_box}>
                  <video className={styles.video_box} autoPlay muted loop>
                    <source src="/images/prop-1.mp4" />
                  </video>
                </div>
                <div className={styles.video_right_box}>
                  <h2>Property Listings</h2>
                  <p>
                    A vast database of real estate listings, complete with
                    detailed property information, high-quality images, and
                    virtual tours.
                  </p>
                </div>
              </div>

              <div className={styles.video_main_box2}>
                <div className={styles.video_left_box2}>
                  <h2>Interactive Maps</h2>
                  <p>
                    Integration of interactive maps for visualizing property
                    locations and nearby amenities.
                  </p>
                </div>
                <div className={styles.video_right_box2}>
                  <video className={styles.video_box} autoPlay muted loop>
                    <source src="/images/prop-2.mp4" />
                  </video>
                </div>
              </div>

              <div className={styles.video_main_box}>
                <div className={styles.video_left_box}>
                  <video className={styles.video_box} autoPlay muted loop>
                    <source src="/images/prop-3.mp4" />
                  </video>
                </div>
                <div className={styles.video_right_box}>
                  <h2>Lead Generation</h2>
                  <p>
                    Tools for capturing leads, enabling potential buyers and
                    renters to express interest in properties they liked.
                  </p>
                </div>
              </div>

              <div className={styles.video_main_box2}>
                <div className={styles.video_left_box2}>
                  <h2>Agent Profiles</h2>
                  <p>
                    Profiles of Batbatian's experienced agents, fostering trust
                    and transparency.
                  </p>
                </div>
                <div className={styles.video_right_box2}>
                  <video className={styles.video_box} autoPlay muted loop>
                    <source src="/images/prop-4.mp4" />
                  </video>
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
                        src="/images/fax-big-coma.svg"
                        width={56}
                        height={44}
                        alt=""
                      />
                    </li>

                    <li>
                      <p>
                        “Team has delivered a complex project with lot of 3rd
                        party integration. From initial requirement gathering to
                        all the way to delivery, process was very iterative and
                        transparent. Really liked working with the team.”
                      </p>
                      <Image
                        className={styles.detail_coma_Img_sm_responsive}
                        src="/images/fax-sm-coma.svg"
                        width={21}
                        height={16}
                        alt=""
                      />
                      <h3>Pierre Batbatian</h3>
                      <h4> Founder & CEO</h4>
                    </li>

                    <Image
                      className={styles.detail_coma_Img_sm}
                      src="/images/fax-sm-coma.svg"
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
                    src="/images/detail.property.png"
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
                “Blobstation wants to build landing pages to bring traffic via
                paid promotion. These lead generation campaigns are mainly to
                bring potential buyers to the site and spend time to go over
                properties.”
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

export default Property;
