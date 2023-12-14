import React from "react";
import styles from "../styles/style.module.css";
import { Col, Row } from "antd";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <div className={styles.footer_wrapper}>
        <div className={styles.container}>
          <Row>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 8 }}
              xl={{ span: 8 }}
            >
              <Image
                className={styles.footer}
                src="/images/footer-logo.png"
                width={238}
                height={30}
                alt=""
              />

              <h2>
                We develop software solutions by working closely with clients to
                understand business needs. Innovative solutions built with
                client's vision and our technical expertise empower the
                businesses in modern digital world.
              </h2>
              <ul className={styles.icon}>
                <li>
                  <a href="#"></a>
                </li>
                <li>
                  {" "}
                  <a href="#"> </a>
                </li>
                <li>
                  <a href="#"> </a>
                </li>
              </ul>
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 6 }}
              lg={{ span: 4 }}
              xl={{ span: 4 }}
            >
              <h4>Quick Links </h4>
              <ul>
                <li>
                  <a href="/"> Home</a>
                </li>
                <li>
                  <a href="/aboutus"> About Us </a>
                </li>
                <li>
                  <a href="/career"> Career</a>
                </li>
                <li>
                  <a href="/blog"> Blog</a>
                </li>
              </ul>
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 5 }}
              xl={{ span: 5 }}
            >
              <h4>Services </h4>
              <ul>
                <li>
                  <a href="development"> Development</a>
                </li>
                <li>
                  <a href="design"> Design </a>
                </li>
                <li>
                  <a href="staff"> Staff</a>
                </li>
                <li>
                  <a href="staff"> Augmentation</a>
                </li>
                <li>
                  <a href="cloud&dev"> Cloud & DevOps</a>
                </li>
              </ul>
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 7 }}
              xl={{ span: 7 }}
            >
              <div>
                <div className={styles.footer_main}>
                  <div className={styles.footer_left}>
                    <div>
                      {" "}
                      <Image
                        src="/images/footer-icon.png"
                        width={48}
                        height={48}
                        alt=""
                      />{" "}
                    </div>
                  </div>
                  <div className={styles.footer_rigt}>
                    <h1> Ahmedabad Office</h1>
                    <p>
                      505 Satyamev Elite, Near Vakil Saheb Bridge, Ambli Bopal T
                      Junction, Bopal, Ahmedabad 380058
                    </p>
                    <p className={styles.mail_p}>Email :</p>
                    <a href="mailto:contact@blobstation.com">
                      {" "}
                      contact@blobstation.com
                    </a>{" "}
                    <br />
                    <p className={styles.mail_p}>Phone :</p>
                    <a href="tel:+91 99741 91122"> +91 99741 91122</a>
                  </div>
                </div>
                <br />
                <div className={styles.footer_main}>
                  <div className={styles.footer_left}>
                    <div>
                      {" "}
                      <Image
                        src="/images/footer-icon.png"
                        width={48}
                        height={48}
                        alt=""
                      />{" "}
                    </div>
                  </div>
                  <div className={styles.footer_rigt}>
                    <h1> Montreal Office</h1>
                    <p>
                      2020 rte Transcanadienne, suite #107, Dorval, Quebec,
                      CanadaH9P 2N4
                    </p>
                    <p className={styles.mail_p}>Email :</p>
                    <a href="mailto:contact@blobstation.com">
                      {" "}
                      contact@blobstation.com
                    </a>{" "}
                    <br />
                    <p className={styles.mail_p}>Phone :</p>
                    <a href="tel:+1 514-710-3481"> +1 514-710-3481</a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <div className={styles.copy_right}>
            <h6>
              <span>Ⓒ Blobstation Inc. 2023 - All Rights Reserved.</span>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
