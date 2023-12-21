import React from "react";
import styles from "../styles/style.module.css";
import { Col, Row } from "antd";
import Image from "next/image";
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css"
/>;

const FastGrow = () => {
  return (
    <>
      <div className={styles.gro_wrapper}>
        <div className={styles.container}>
          <>
            <Row>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 18 }}
                lg={{ span: 18 }}
                xl={{ span: 18 }}
              >
                <div className={styles.gro_box}>
                  <div className={styles.grwth_box}>
                    <ul>
                      <li>
                        <h2> Excellent</h2>
                      </li>
                      <li>
                        <Image
                          className={styles.stars}
                          src="/images/star.svg"
                          width={18}
                          height={17}
                          alt=""
                        />
                      </li>
                      <li>
                        {" "}
                        <Image
                          className={styles.stars}
                          src="/images/star.svg"
                          width={18}
                          height={17}
                          alt=""
                        />{" "}
                      </li>
                      <li>
                        {" "}
                        <Image
                          className={styles.stars}
                          src="/images/star.svg"
                          width={18}
                          height={17}
                          alt=""
                        />{" "}
                      </li>
                      <li>
                        {" "}
                        <Image
                          className={styles.stars}
                          src="/images/star.svg"
                          width={18}
                          height={17}
                          alt=""
                        />{" "}
                      </li>
                      <li>
                        {" "}
                        <Image
                          className={styles.stars}
                          src="/images/star.svg"
                          width={18}
                          height={17}
                          alt=""
                        />{" "}
                      </li>
                      <li>
                      <Image
                          className={styles.Image}
                          src="/images/clutch.svg"
                          width={74}
                          height={32}
                          alt=""
                        />

                        
                      </li>
                    </ul>
                  </div>
                  <h1>
                    <span>Fastest growing </span>software company
                  </h1>
                  <p>
                    Blobstation has earned a reputation as the top rated agency
                    for its exceptional services in software design &
                    development.
                  </p>
                </div>
              </Col>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 6 }}
                lg={{ span: 6 }}
                xl={{ span: 6 }}
              >
                <div className={styles.gro_Image_box}>

                <Image
                          className={styles.fast_Img}
                          src="/images/growth.png"
                          width={426}
                          height={426}
                          alt=""
                        />
                  
                </div>
              </Col>
            </Row>
          </>
        </div>
      </div>
    </>
  );
};

export default FastGrow;
