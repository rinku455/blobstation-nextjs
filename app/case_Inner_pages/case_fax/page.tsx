import React from "react";
import styles from "../../styles/case.module.css";
import Image from "next/image";
import Link from "next/link";
import { Row, Col } from "antd";
import Marquee from "react-fast-marquee";
import Footer from "../../footer/page";
import OurServices from "../../our_service/page";

const Fax = () => {
  return (
    <>
      <div>
        <div className={styles.inpix_hero}>
          <div className={styles.container}>
            <h1 className={styles.fax_h1}>Fax App</h1>
            <p className={styles.inpix_hero_p}>Turn any document into a fax from your phone & iPad</p>
            <p className={styles.inpix_hero_p}>
              Create faxes from any files with a couple of taps and send them
              across the world in seconds
            </p>

            <h2>Provided Services</h2>
            <div className={styles.buttons_design}>
              <div className={styles.design_btn}>Deployment</div>
              <div className={styles.design_btn}> Mobile App</div>
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
                    The client recognized the persistent reliance on fax
                    communication in various industries and sought to streamline
                    this process for the mobile age. Leveraging their expertise
                    in app development, they aimed to provide users with a
                    simple yet powerful tool for faxing documents from their
                    smartphones and iPads.
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
                      <p> Fax</p>
                    </li>
                    <li>
                      <h3>Industry </h3>
                    </li>
                    <li>
                      <p>Software Utilities</p>
                    </li>
                    <li>
                      <h3> Years in Industry </h3>
                    </li>
                    <li>
                      <p className={styles.last_p}>3+ Years</p>
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>
          </div>

          <div className={styles.opportunity_wrapper}>
            <div className={styles.container}>
              <h2>Opportunity</h2>
              <h3>Revitalize Fax Communication for the Digital Era</h3>
              <p>
                The primary opportunity presented by the Fax App was to
                modernize fax communication by making it accessible through
                mobile devices. The app addressed the limitations of traditional
                fax machines by offering a convenient and efficient way to
                create and send faxes from anywhere in the world.
              </p>

              <h2>Solution</h2>
              <h3>Fax App: Transforming Fax Communication</h3>
              <p>
                The Fax App boasted several key features that revolutionized fax
                communication. Here are five key features with one-liner
                subheadings:
              </p>
            </div>
          </div>

          <div className={styles.Images_wrapper}>
            <div className={styles.container}>
              <div className={styles.Image_main_box}>
                <div className={styles.Image_left_box}>
                  <Image
                    src="/images/fax-1.png"
                    width={330}
                    height={495}
                    alt=""
                  />
                </div>
                <div className={styles.Image_right_box}>
                  <h2>Mobile Faxing</h2>
                  <p>
                    Create and send faxes directly from your mobile device or
                    iPad, eliminating the need for traditional fax machines.
                  </p>
                </div>
              </div>

              <div className={styles.Image_main_box2}>
                <div className={styles.Image_left_box2}>
                  <h2>File Compatibility</h2>
                  <p>
                    Upload and fax a wide range of document types, including
                    PDFs, images, and more.
                  </p>
                </div>
                <div className={styles.Image_right_box2}>
                  <Image
                    src="/images/fax-2.png"
                    width={330}
                    height={495}
                    alt=""
                  />
                </div>
              </div>

              <div className={styles.Image_main_box}>
                <div className={styles.Image_left_box}>
                  <Image
                    src="/images/fax-3.png"
                    width={330}
                    height={495}
                    alt=""
                  />
                </div>
                <div className={styles.Image_right_box}>
                  <h2>Global Reach</h2>
                  <p>
                    Transmit faxes to fax numbers worldwide, enabling
                    international communication with ease.
                  </p>
                </div>
              </div>

              <div className={styles.Image_main_box2}>
                <div className={styles.Image_left_box2}>
                  <h2>Quick and Easy</h2>
                  <p>
                    Effortlessly create faxes with just a few taps, streamlining
                    the entire faxing process.
                  </p>
                </div>
                <div className={styles.Image_right_box2}>
                  <Image
                    src="/images/fax-4.png"
                    width={330}
                    height={495}
                    alt=""
                  />
                </div>
              </div>
              <div className={styles.Image_main_box}>
                <div className={styles.Image_left_box}>
                  <Image
                    src="/images/fax-5.png"
                    width={330}
                    height={495}
                    alt=""
                  />
                </div>
                <div className={styles.Image_right_box}>
                  <h2>Usage Insights</h2>
                  <p>
                    Access statistics and insights into fax transmission,
                    enhancing efficiency and tracking.
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
                        src="/images/fax-big-coma.svg"
                        width={56}
                        height={44}
                        alt=""
                      />
                    </li>

                    <li>
                      <p>
                        Working with Blobstation on the Fax App was a pleasure.
                        Their efficiency and reliability shine through in the
                        final product. Blobstation is the go-to team for app
                        development.
                      </p>
                      <Image
                        className={styles.detail_coma_Img_sm_responsive}
                        src="/images/fax-sm-coma.svg"
                        width={21}
                        height={16}
                        alt=""
                      />
                      <h3>Felix Lee</h3>
                      <h4> Owner</h4>
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
                    src="/images/fax-detail.webp"
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
                “The Fax App represented a significant leap forward in the world
                of fax communication, offering a powerful solution for users to
                send faxes directly from their mobile devices and iPads.”
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

export default Fax;
