import React from "react";
import styles from "../styles/style.module.css";
import { Col, Row } from "antd";
import Link from "next/link";
import Image from "next/image";
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css"
/>;

const Technical = () => {
  return (
    <>
      <div className={styles.tech_wrapper}>
        <div className={styles.container}>
          <>
            <h1 className={styles.tech_wrapper_h1}>Technical Insights</h1>
            <p className={styles.tech_wrapper_p}>
              Tech updates, blogs and much more !
            </p>
            <Row>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 8 }}
                xl={{ span: 8 }}
              >
                <div className={styles.tech_box}>
                  <div className={styles.tech_main}>
                    <Image
                      src="/images/tech1.png"
                      width={390}
                      height={155}
                      alt=""
                    />

                    <h2 className={styles.tech_box_h2}>
                      {" "}
                      Surviving the test of time: Deploying a web application
                      for your business{" "}
                    </h2>
                    <p className={styles.tech_box_p}>
                      Abstract with the COVID-19 crisis rising to an all-time
                      high in 2020, the delivery and pickup service across all
                      nations reduced dramatically...
                    </p>
                  </div>
                </div>
              </Col>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 8 }}
                xl={{ span: 8 }}
              >
                <div className={styles.tech_box}>
                  <Image
                    src="/images/tech2.png"
                    width={390}
                    height={155}
                    alt=""
                  />
                  <h2 className={styles.tech_box_h2}>
                    {" "}
                    Xamarin vs Ionic – The Cross-Platform or Hybrid App
                    Development ?
                  </h2>
                  <p className={styles.tech_box_p}>
                    Xamarin vs Ionic – The Cross-Platform or Hybrid App
                    Development ?
                  </p>
                </div>
              </Col>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 8 }}
                xl={{ span: 8 }}
              >
                <div className={styles.tech_box}>
                  <Image
                    src="/images/tech3.png"
                    width={390}
                    height={155}
                    alt=""
                  />
                  <h2 className={styles.tech_box_h2}>
                    {" "}
                    Xamarin vs Ionic – The Cross-Platform or Hybrid App
                    Development ?{" "}
                  </h2>
                  <p className={styles.tech_box_p}>
                    Xamarin vs Ionic – The Cross-Platform or Hybrid App
                    Development ?
                  </p>
                </div>
              </Col>
            </Row>
            <Link href="/blog">
              <button className={styles.read_btn4}>
                {" "}
                Read more blogs
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  fill="currentColor"
                  className={styles.bi_arrow}
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                  />
                </svg>
              </button>
            </Link>
          </>
        </div>
      </div>
    </>
  );
};
export default Technical;
