import React from "react";
import styles from "../../styles/case.module.css";
import Image from "next/image";
import { Row, Col } from "antd";
import Marquee from "react-fast-marquee";
import Footer from "../../footer/page";
import OurServices from "../../our_service/page";

const Root = () => {
  return (
    <>
      <div>
        <div className={styles.inpix_hero}>
          <div className={styles.container}>
            <h1>Root On</h1>
            <p className={styles.inpix_hero_p}>Help Students To Find Right Programs For Higher Education</p>
            <p className={styles.inpix_hero_p}>
              A web application to streamline the process starting from finding
              the right program to get admitted into the school
            </p>

            <h2>Provided Services</h2>
            <div className={styles.buttons_design}>
              <div className={styles.design_btn}>Deployment</div>
              <div className={styles.design_btn}> Strategic Consulting</div>
              <div className={styles.design_btn}>Testing</div>
              <div className={styles.design_btn}>Web App</div>
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
                    Our client has established a reputable presence in the
                    Indian education industry, guiding students toward
                    international higher education options. However, the
                    increasing diversity of available programs posed a
                    formidable challenge. The need for a more efficient and
                    effective solution to streamline the process of program
                    selection became evident.
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
                      <p> Root On Inc.</p>
                    </li>
                    <li>
                      <h3>Industry </h3>
                    </li>
                    <li>
                      <p> Education / Immigration</p>
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
                Simplify the Process of Identifying Suitable Study Programs for
                Students
              </h3>
              <p>
                The primary opportunity presented to our team was to simplify
                the program selection process for students and education agents
                working with the client. This involved creating a comprehensive
                portal accessible to both students and the client's team of
                agents. The portal's goal was to enable users to filter and
                shortlist courses based on their preferences and individual
                student profiles, ultimately facilitating the final selection of
                programs for application.
              </p>

              <h2>Solution</h2>
              <h3>The RootOn Portal: Transforming Program Selection</h3>
              <p>
                Our approach to addressing this challenge was the development of
                the RootOn Portal. This innovative platform aimed to
                revolutionize the way students and agents approached program
                selection. Key features of the portal included:
              </p>
            </div>
          </div>

          <div className={styles.video_wrapper}>
            <div className={styles.video_container}>
              <div className={styles.video_main_box}>
                <div className={styles.video_left_box}>
                  <video className={styles.video_box} autoPlay muted loop>
                    <source src="/images/root-1.mp4" />
                  </video>
                </div>
                <div className={styles.video_right_box}>
                  <h2>Student Profiles</h2>
                  <p>
                    Each student created a profile within the portal, detailing
                    their academic qualifications, preferences, and aspirations.
                  </p>
                </div>
              </div>

              <div className={styles.video_main_box2}>
                <div className={styles.video_left_box2}>
                  <h2>Program Database</h2>
                  <p>
                    The portal contained an extensive database of international
                    study programs, with detailed information on each program's
                    prerequisites, content, and benefits.
                  </p>
                </div>
                <div className={styles.video_right_box2}>
                  <video className={styles.video_box} autoPlay muted loop>
                    <source src="/images/root-2.mp4" />
                  </video>
                </div>
              </div>

              <div className={styles.video_main_box}>
                <div className={styles.video_left_box}>
                  <video className={styles.video_box} autoPlay muted loop>
                    <source src="/images/root-3.mp4" />
                  </video>
                </div>
                <div className={styles.video_right_box}>
                  <h2>Advance Search and Marketing</h2>
                  <p>
                    A robust search and filtering system allowed students and
                    agents to narrow down program options based on criteria such
                    as course duration, location, tuition fees, and specific
                    academic requirements.
                  </p>
                </div>
              </div>

              <div className={styles.video_main_box2}>
                <div className={styles.video_left_box2}>
                  <h2>Recommendation Engine</h2>
                  <p>
                    The portal incorporated an intelligent recommendation engine
                    that analyzed each student's profile and preferences to
                    suggest suitable programs.
                  </p>
                </div>
                <div className={styles.video_right_box2}>
                  <video className={styles.video_box} autoPlay muted loop>
                    <source src="/images/root.mp4" />
                  </video>
                </div>
              </div>

              <div className={styles.video_main_box}>
                <div className={styles.video_left_box}>
                  <video className={styles.video_box} autoPlay muted loop>
                    <source src="/images/root-5.mp4" />
                  </video>
                </div>
                <div className={styles.video_right_box}>
                  <h2>Application Management</h2>
                  <p>
                    The portal provided a streamlined application process,
                    assisting students in submitting applications to chosen
                    programs directly.
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
                        Had an opportunity to work with blobstation team on a
                        project which we started from scratch. We have done lot
                        of productive discussions during development stages to
                        build a product which makes our business grow.
                      </p>
                      <Image
                        className={styles.detail_coma_Img_sm_responsive}
                        src="/images/root-sm-coma.svg"
                        width={21}
                        height={16}
                        alt=""
                      />
                      <h3>Ronak Patel</h3>
                      <h4> Founder & CEO</h4>
                    </li>

                    <Image
                      className={styles.detail_coma_Img_sm}
                      src="/images/root-sm-coma.svg"
                      width={21}
                      height={16}
                      alt=""
                    />
                  </ul>
                </div>
                <div className={styles.detail_Img}>
                  <Image
                    className={styles.detail_Img_space}
                    src="/images/detail-root.png"
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
                ” Rooton wants to use this application for immigration clients
                as well. These clients are different from students and in this
                case, the main focus would be client profile and document
                management. Business Analytics team at Blobstation already
                working on next phase requirements.”
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

export default Root;
