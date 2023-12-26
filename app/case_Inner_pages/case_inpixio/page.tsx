import React from "react";
import styles from "../../styles/case.module.css";
import Link from "next/link";
import Image from "next/image";
import { Row, Col } from "antd";
import Marquee from "react-fast-marquee";

const Inpixo = () => {
  return (
    <>
      <div className={styles.inpix_hero}>
        <div className={styles.container}>
          <h1>inPixio AI Photo Editor</h1>
          <p>Edit your photos like a pro with AI Photo Editor !</p>
          <p>
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
                md={{ span: 12}}
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
                lg={{ span: 8}}
                xl={{ span: 8 }}
              > <ul className={styles.client_ul}>

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
                        <li><p className={styles.last_p} >10+ Years</p>
                        </li>
                    </ul>
                    </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inpixo;
