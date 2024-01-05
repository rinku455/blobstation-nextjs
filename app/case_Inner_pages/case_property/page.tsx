import React from "react";
import styles from "../../styles/case.module.css";
import Image from "next/image";
import { Row, Col } from "antd";

import Link from "next/link";
import Marquee from "react-fast-marquee";
import Footer from "../../footer/page";
import OurServices from "../../our_service/page";

const Property = () => {
  return (
    <>
      <div>
        <div className={styles.inpix_hero}>
          <div className={styles.container}>
            <h1 className={styles.pro_h1}>Batbatian Property Portal</h1>
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
