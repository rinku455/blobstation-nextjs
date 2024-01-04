import React from "react";
import styles from "../../styles/case.module.css";
import Link from "next/link";
import Image from "next/image";
import { Row, Col } from "antd";
import Marquee from "react-fast-marquee";
import Footer from "../../footer/page";
import OurServices from "../../our_service/page";

const BgRemove = () => {
  return (
    <>
      <div className={styles.inpix_hero}>
        <div className={styles.container}>
          <h1>Remove Background</h1>
          <p className={styles.inpix_hero_p}>
            Get a transparent background in seconds with AI background remover
            Edit, Convert, & Sign Scans from your phone
          </p>
          <p className={styles.inpix_hero_p}>
            Powerful AI in the free background remover detects the image
            background and removes it automatically in seconds
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
                  The client recognized the growing demand for a user-friendly
                  mobile app that could provide efficient background removal and
                  replacement capabilities. Leveraging their expertise in app
                  development, they aimed to create a solution that catered to
                  users' diverse photo editing needs.
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
                    <p>Remove Background</p>
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
            <h3>Simplify Photo Background Removal and Replacement</h3>
            <p>
              The primary opportunity presented by the Remove Background app was
              to offer users an intuitive tool for removing unwanted backgrounds
              from photos using AI technology. The app aimed to streamline this
              process and enhance user creativity by providing background
              replacement options and preloaded templates.
            </p>

            <h2>Solution</h2>
            <h3>Remove Background: Revolutionizing Background Editing</h3>
            <p>
              The Remove Background app offered a suite of features designed to
              simplify background editing. Here are five key features with
              one-liner subheadings:
            </p>
          </div>
        </div>

        <div className={styles.Images_wrapper}>
          <div className={styles.container}>
            <div className={styles.Image_main_box}>
              <div className={styles.Image_left_box}>
                <Image
                  src="/images/bg-1.png"
                  width={330}
                  height={495}
                  alt=""
                />
              </div>
              <div className={styles.Image_right_box}>
                <h2>AI Background Removal</h2>
                <p>
                  Powerful AI technology automatically detects and removes image
                  backgrounds within seconds.
                </p>
              </div>
            </div>

            <div className={styles.Image_main_box2}>
              <div className={styles.Image_left_box2}>
                <h2>Background Replacement</h2>
                <p>
                  Users could choose from various preloaded background
                  categories, allowing for creative background replacement. ‍
                </p>
              </div>
              <div className={styles.Image_right_box2}>
                <Image
                  src="/images/bg-2.png"
                  width={330}
                  height={495}
                  alt=""
                />
              </div>
            </div>

            <div className={styles.Image_main_box}>
              <div className={styles.Image_left_box}>
                <Image
                  src="/images/bg-3.png"
                  width={330}
                  height={495}
                  alt=""
                />
              </div>
              <div className={styles.Image_right_box}>
                <h2>Portrait Templates</h2>
                <p>
                  Seamlessly integrate photos into preloaded portrait templates,
                  enhancing personalization. ‍
                </p>
              </div>
            </div>

            <div className={styles.Image_main_box2}>
              <div className={styles.Image_left_box2}>
                <h2>One-Click Sharing</h2>
                <p>
                  All edited images were easily shareable on a variety of social
                  media platforms, streamlining sharing options.
                </p>
              </div>
              <div className={styles.Image_right_box2}>
                <Image
                  src="/images/bg-4.png"
                  width={330}
                  height={495}
                  alt=""
                />
              </div>
            </div>
            <div className={styles.Image_main_box}>
              <div className={styles.Image_left_box}>
                <Image
                  src="/images/bg-5.png"
                  width={330}
                  height={495}
                  alt=""
                />
              </div>
              <div className={styles.Image_right_box}>
                <h2>Quick and Intuitive</h2>
                <p>
                  The app provided a user-friendly interface that allowed for
                  quick and hassle-free background editing. ‍
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
                      Blobstation made the Remove Background app a reality.
                      Their efficiency and innovation shine through in the app's
                      simplicity and power. It was a pleasure working with the
                      Blobstation team.
                    </p>
                    <Image
                      className={styles.detail_coma_Img_sm_responsive}
                      src="/images/fax-sm-coma.svgg"
                      width={21}
                      height={16}
                      alt=""
                    />
                    <h3>Jeff C.</h3>
                    <h4>Founder & CEO</h4>
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
                  src="/images/detail-bgremove.png"
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
              "The Remove Background mobile application showcased the fusion of
              advanced AI technology and creative expression, offering users a
              powerful tool for background removal and replacement, all in a
              user-friendly package."
            </p>
          </div>
        </div>
      </div>

      <OurServices />
      <Footer />
    </>
  );
};

export default BgRemove;
