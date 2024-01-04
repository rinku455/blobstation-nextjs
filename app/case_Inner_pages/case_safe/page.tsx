import React from "react";
import styles from "../../styles/case.module.css";
import Image from "next/image";
import { Row, Col } from "antd";
import Marquee from "react-fast-marquee";
import Footer from "../../footer/page";
import OurServices from "../../our_service/page";

const SafePhoto = () => {
  return (
    <>
      <div>
        <div className={styles.inpix_hero}>
          <div className={styles.container}>
            <h1>Safe Photos</h1>
            <p className={styles.inpix_hero_p}>Protects your private photos, videos & documents</p>
            <p className={styles.inpix_hero_p}>
              Easily secure personal files by locking them down with password
              protection, FaceID and military-grade encryption
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
                    The client, driven by a commitment to data privacy and
                    security, identified a gap in the market for a comprehensive
                    mobile application that offered top-tier protection for
                    personal files. With the proliferation of mobile devices and
                    the increasing importance of digital privacy, the client saw
                    an opportunity to develop an app that met these critical
                    needs.
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
                      <p> Safe Photos</p>
                    </li>
                    <li>
                      <h3>Industry </h3>
                    </li>
                    <li>
                      <p>Photos & Media</p>
                    </li>
                    <li>
                      <h3> Years in Industry </h3>
                    </li>
                    <li>
                      <p className={styles.last_p}>2+ Years</p>
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>
          </div>

          <div className={styles.opportunity_wrapper}>
            <div className={styles.container}>
              <h2>Opportunity</h2>
              <h3>Empower Users to Safeguard Their Digital Assets Securely</h3>
              <p>
                The primary opportunity presented by Safe Photos was to provide
                individuals with a robust and user-friendly solution for
                securing their private photos, videos, and documents. This app
                aims to offer peace of mind through advanced security features
                and military-grade encryption.
              </p>

              <h2>Solution</h2>
              <h3>Safe Photos: A Fortified Digital Vault</h3>
              <p>
                Safe Photos incorporated a range of features to ensure the
                highest level of data security and privacy for users. Here are
                five key features with one-liner subheadings:
              </p>
            </div>
          </div>

          <div className={styles.Images_wrapper}>
            <div className={styles.container}>
              <div className={styles.Image_main_box}>
                <div className={styles.Image_left_box}>
                  <Image
                    src="/images/safe-1.png"
                    width={330}
                    height={495}
                    alt=""
                  />
                </div>
                <div className={styles.Image_right_box}>
                  <h2>Secure Folder Organization</h2>
                  <p>
                    Effortlessly organize and categorize your sensitive files
                    into separate, secure folders.
                  </p>
                </div>
              </div>

              <div className={styles.Image_main_box2}>
                <div className={styles.Image_left_box2}>
                  <h2>Multi-Layered Protection</h2>
                  <p>
                    Enhanced security with password protection, Face ID, and
                    military-grade encryption for each individual folder.
                  </p>
                </div>
                <div className={styles.Image_right_box2}>
                  <Image
                    src="/images/safe-2.png"
                    width={330}
                    height={495}
                    alt=""
                  />
                </div>
              </div>

              <div className={styles.Image_main_box}>
                <div className={styles.Image_left_box}>
                  <Image
                    src="/images/safe-3.png"
                    width={330}
                    height={495}
                    alt=""
                  />
                </div>
                <div className={styles.Image_right_box}>
                  <h2>Master Password</h2>
                  <p>
                    A master password at the app's core ensures an additional
                    layer of security, preventing unauthorized access.
                  </p>
                </div>
              </div>

              <div className={styles.Image_main_box2}>
                <div className={styles.Image_left_box2}>
                  <h2>Quick Access</h2>
                  <p>
                    Conveniently access protected folders with Face ID or a
                    password, keeping your personal files readily available to
                    you.
                  </p>
                </div>
                <div className={styles.Image_right_box2}>
                  <Image
                    src="/images/safe-4.png"
                    width={330}
                    height={495}
                    alt=""
                  />
                </div>
              </div>
              <div className={styles.Image_main_box}>
                <div className={styles.Image_left_box}>
                  <Image
                    src="/images/safe-5.png"
                    width={330}
                    height={495}
                    alt=""
                  />
                </div>
                <div className={styles.Image_right_box}>
                  <h2>File Backup</h2>
                  <p>
                    Backup your important files directly within the app to
                    ensure they're safe and easily recoverable.
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
                        src="/images/fax-big-coma.svg"
                        width={56}
                        height={44}
                        alt=""
                      />
                    </li>

                    <li>
                      <p>
                        Developing Safe Photos with Blobstation was a delight.
                        Their attention to detail and commitment to security
                        impressed us. The result is a top-notch app that our
                        users trust.
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
                    src="/images/safe-details.png"
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
                “The Safe Photos mobile application exemplified the client's
                commitment to digital privacy and data security, offering a
                robust solution for individuals seeking to protect their private
                photos, videos, and documents.”
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

export default SafePhoto;
