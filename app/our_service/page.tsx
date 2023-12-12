import React from "react";
import { Col, Row } from "antd";
import styles from "../styles/style.module.css";
import Link from "next/link";
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css"
/>;




const OurServices = () => {
  return (
    <div className={styles.service_wrapper}>
      <div className={styles.container}>
        <div>
        <h2>Our Services </h2>
                <p>From custom software development to providing dedicated teams,
                    our team will help you achieve your goal</p>
        </div>
        <Row>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 6 }}
            xl={{ span: 6 }}
          >
              <Link href="/design">
            <div className={styles.service_box1}>
              <div className={styles.service_content1}>
                <h1>Design</h1>
                <p>Upraise the user experience with elegant designs</p>
            
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="43"
                  height="30"
                  fill="currentColor"
                  className={styles.bi_Service_arrow}
                  bi-arrow-right
                  viewBox="0 0 16 16"
                  color="white"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                  />
                </svg>
              
              </div>
            </div>
            </Link>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 6 }}
            xl={{ span: 6 }}
          >
            <Link href="/development">
            <div className={styles.service_box2}>
              <div className={styles.service_content1}>
                <h1>Development</h1>
                <p>Upraise the user experience with elegant designs</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="43"
                  height="30"
                  fill="currentColor"
                  className={styles.bi_Service_arrow}
                  bi-arrow-right
                  viewBox="0 0 16 16"
                  color="white"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                  />
                </svg>
              </div>
            </div>
            </Link>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 6 }}
            xl={{ span: 6 }}
          >
               <Link href="/cloud&dev">
            <div className={styles.service_box3}>
              <div className={styles.service_content1}>
                <h1>Cloud & DevOps</h1>
                <p>Upraise the user experience with elegant designs</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="43"
                  height="30"
                  fill="currentColor"
                  className={styles.bi_Service_arrow}
                  bi-arrow-right
                  viewBox="0 0 16 16"
                  color="white"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                  />
                </svg>
              </div>
            </div>
            </Link>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 6 }}
            xl={{ span: 6 }}
          >
             <Link href="/staff">
            <div className={styles.service_box4}>
              <div className={styles.service_content1}>
                <h1>Staff Augmentation</h1>
                <p>Upraise the user experience with elegant designs</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="43"
                  height="30"
                  fill="currentColor"
                  className={styles.bi_Service_arrow}
                  bi-arrow-right
                  viewBox="0 0 16 16"
                  color="white"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                  />
                </svg>
              </div>
            </div>
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default OurServices;
