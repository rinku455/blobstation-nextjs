import React from "react";
import styles from "../../styles/case.module.css";
import Link from "next/link";
import Image from "next/image";
import { Row, Col } from "antd";
import Marquee from "react-fast-marquee";
import Footer from "../../footer/page";
import OurServices from "../../our_service/page";

const Scanner = () => {
  return (
    <>
      <div className={styles.inpix_hero}>
        <div className={styles.container}>
          <h1 className={styles.scanner_h1}>Scanner App</h1>
          <p className={styles.inpix_hero_p}>
            Edit, Convert, & Sign Scans from your phone
          </p>
          <p className={styles.inpix_hero_p}>
            Powerful all-purpose portable scanner with built-in OCR with
            flexible formats
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
                  The client recognized the growing need for a comprehensive
                  mobile scanning solution that could cater to a wide range of
                  document management and sharing requirements. Leveraging their
                  expertise in app development, they set out to create a tool
                  that would redefine how users interacted with scanned
                  documents.
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
                    <p>Scanner App</p>
                  </li>
                  <li>
                    <h3>Industry </h3>
                  </li>
                  <li>
                    <p>Utilities</p>
                  </li>
                  <li>
                    <h3> Years in Industry </h3>
                  </li>
                  <li>
                    <p className={styles.last_p}>6+ Years</p>
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
              Empower Users to Manage and Share Scanned Documents with Ease
            </h3>
            <p>
              The primary opportunity presented by the Scanner App was to
              provide users with a versatile, user-friendly tool for document
              scanning, editing, and sharing. By leveraging the convenience of
              mobile devices, the app aimed to simplify document management and
              facilitate seamless global sharing.
            </p>

            <h2>Solution</h2>
            <h3>
              Scanner App: Revolutionizing Document Scanning and Management
            </h3>
            <p>
              The Scanner App offered a comprehensive set of features designed
              to enhance document scanning and management. Here are five key
              features with one-liner subheadings:
            </p>
          </div>
        </div>

        <div className={styles.Images_wrapper}>
          <div className={styles.container}>
            <div className={styles.Image_main_box}>
              <div className={styles.Image_left_box}>
                <Image
                  src="/images/scanner-1.png"
                  width={330}
                  height={495}
                  alt=""
                />
              </div>
              <div className={styles.Image_right_box}>
                <h2>Mobile Scanning</h2>
                <p>
                  Transform any document into a scanned file by capturing a
                  picture with your smartphone.
                </p>
              </div>
            </div>

            <div className={styles.Image_main_box2}>
              <div className={styles.Image_left_box2}>
                <h2>Built-in OCR</h2>
                <p>
                  Utilize OCR technology to convert scanned text into editable
                  and searchable content.
                </p>
              </div>
              <div className={styles.Image_right_box2}>
                <Image
                  src="/images/scanner-2.png"
                  width={330}
                  height={495}
                  alt=""
                />
              </div>
            </div>

            <div className={styles.Image_main_box}>
              <div className={styles.Image_left_box}>
                <Image
                  src="/images/scanner-3.png"
                  width={330}
                  height={495}
                  alt=""
                />
              </div>
              <div className={styles.Image_right_box}>
                <h2>Editing Tools</h2>
                <p>
                  Edit scanned documents with ease, including cropping,
                  rotating, and adjusting contrast.
                </p>
              </div>
            </div>

            <div className={styles.Image_main_box2}>
              <div className={styles.Image_left_box2}>
                <h2>Conversion Options</h2>
                <p>
                  Convert scans into multiple formats, such as PDF or image
                  files, ensuring compatibility with various needs.
                </p>
              </div>
              <div className={styles.Image_right_box2}>
                <Image
                  src="/images/scanner-4.png"
                  width={330}
                  height={495}
                  alt=""
                />
              </div>
            </div>
            <div className={styles.Image_main_box}>
              <div className={styles.Image_left_box}>
                <Image
                  src="/images/scanner-5.png"
                  width={330}
                  height={495}
                  alt=""
                />
              </div>
              <div className={styles.Image_right_box}>
                <h2>Electronic Signing</h2>
                <p>
                  Add electronic signatures directly to scanned documents,
                  making it easy to sign and send contracts and agreements. ‍
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
                      Developing the inPixio AI Photo Editor with Blobstation
                      was a great experience. Their expertise and creative
                      approach made it a smooth journey. The result is a
                      fantastic app that we're proud of.
                    </p>
                    <Image
                      className={styles.detail_coma_Img_sm_responsive}
                      src="/images/fax-sm-coma.svgg"
                      width={21}
                      height={16}
                      alt=""
                    />
                    <h3>Maxime Lang</h3>
                    <h4>Product Owner</h4>
                  </li>

                  <Image
                    className={styles.detail_coma_Img_sm}
                    src="/images/fax-sm-coma.svg"
                    width={21}
                    height={16}
                    alt=""
                  />

                </ul>
              </div>
              <div className={styles.detail_Img}>
                <Image
                  className={styles.detail_Img_space}
                  src="/images/scanner-detail.webp"
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
              “The Scanner App represented a significant advancement in mobile
              document scanning and management, offering a versatile and
              powerful solution for users to scan, edit, convert, sign, and
              share documents with ease.”
            </p>
          </div>
        </div>
      </div>

      <OurServices />
      <Footer />
    </>
  );
};

export default Scanner;
