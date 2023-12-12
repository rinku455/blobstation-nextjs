import React from "react";
import styles from "../styles/style.module.css";
import { Col, Row } from "antd";

const Counting = () => {
  return (
    <>
      <div className={styles.blob_wrapper}>
        <div className={styles.container}>
          <>
            <h1 className={styles.blob_wrapper_h1}>
              Blobstation brings together some of the <span>smartest</span>{" "}
              personal and professional minds
              <span> in the world </span> and makes them available to you.
            </h1>
          </>
          <div className={styles.number_box}>
            <Row>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 6 }}
                xl={{ span: 6 }}
              >
                <>
                  <div className={styles.number}>
                    <h1 className={styles.number_box_h1}>98</h1>
                    <p> NPS Score</p>
                  </div>
                </>
              </Col>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 6 }}
                xl={{ span: 6 }}
              >
                <>
                  <div className={styles.number}>
                    <h1 className={styles.number_box_h1}>30+</h1>
                    <p>Satisfied customers</p>
                  </div>
                </>
              </Col>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 6 }}
                xl={{ span: 6 }}
              >
                <>
                  <div className={styles.number}>
                    <h1 className={styles.number_box_h1}>15M +</h1>
                    <p> Satisfied customers</p>
                  </div>
                </>
              </Col>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 6 }}
                xl={{ span: 6 }}
              >
                <>
                  <div className={styles.number0}>
                    <h1 className={styles.number_box_h1}>20K+</h1>
                    <p> Cups of Coffee</p>
                  </div>
                </>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counting;
