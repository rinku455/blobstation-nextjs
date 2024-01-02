import React from "react";
import styles from "../../styles/case.module.css";
import Link from "next/link";
import Image from "next/image";
import { Row, Col } from "antd";
import Marquee from "react-fast-marquee";
import Footer from "../../footer/page";
import OurServices from "../../our_service/page";

const Inpixo = () => {
  return (
    <>
      <div className={styles.inpix_hero}>
        <div className={styles.container}>
          <h1>inPixio AI Photo Editor</h1>
          <p>Edit your photos like a pro with AI Photo Editor !</p>
          <p className={styles.inpix_hero_p}>
            Add a wide range of impressive effects to your photo with features
            that go beyond a standard online photo editor.
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
                  The client, driven by a passion for photography and digital
                  creativity, recognized the need for a mobile photo editing
                  tool that combined professional-level features with
                  user-friendly functionality. Leveraging their expertise in app
                  development, they set out to create a robust solution for
                  photo enthusiasts.
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
                    <p>inPixio AI Photo Editor</p>
                  </li>
                  <li>
                    <h3>Industry </h3>
                  </li>
                  <li>
                    <p>Media & Entertainment</p>
                  </li>
                  <li>
                    <h3> Years in Industry </h3>
                  </li>
                  <li>
                    <p className={styles.last_p}>10+ Years</p>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        </div>

        <div className={styles.opportunity_wrapper}>
          <div className={styles.container}>
            <h2>Opportunity</h2>
            <h3>Empower Users to Elevate Their Photo Editing Skills</h3>
            <p>
              The primary opportunity presented by the inPixio AI Photo Editor
              was to provide users with a comprehensive tool for photo editing
              that harnessed the power of artificial intelligence (AI). The app
              aimed to enable users to edit their photos like a professional,
              going beyond the capabilities of traditional online photo editors.
            </p>

            <h2>Solution</h2>
            <h3>inPixio AI Photo Editor: Redefining Photo Editing</h3>
            <p>
              The inPixio AI Photo Editor offers a comprehensive suite of
              features to elevate photo editing. Here are five key features with
              one-liner subheadings:
            </p>
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
                      Developing the inPixio AI Photo Editor with Blobstation
                      was a great experience. Their expertise and creative
                      approach made it a smooth journey. The result is a
                      fantastic app that we're proud of.
                    </p>
                    <h3>Maxime Lang</h3>
                    <h3>Product Owner</h3>
                  </li>

                 
                  <li className={styles.detail_coma_Img_sm}>
                    <Image
                      src="/images/small-coma.svg"
                      width={21}
                      height={16}
                      alt=""
                    />
                  
                  </li>
                
                </ul>
              </div>
              <div className={styles.detail_Img}>
                <Image className={styles.detail_Img_space}
                  src="/images/detail_inpix.png"
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
              "The inPixio AI Photo Editor exemplified the fusion of
              cutting-edge technology and creative expression, offering users
              the ability to edit their photos like professionals and push the
              boundaries of their creativity."
            </p>
          </div>
        </div>
      </div>

      <OurServices />
      <Footer />
    </>
  );
};

export default Inpixo;
