import React from "react";
import styles from "../styles/responsive.module.css";
import { Col, Row } from "antd";
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css"
/>;

const Degital = () => {
  return (
    <>
      <div className={styles.work_wrapper}>
        <div className={styles.container}>
          <h1 className={styles.work_wrapper_h1}>
            {" "}
            Our Digital <span> Success Stories</span>{" "}
          </h1>
          <p className={styles.work_wrapper_p}>
            Discover the stories behind our successful client collaborations
          </p>

          <Row className={styles.degital_row}>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 12 }}
              xl={{ span: 12 }}
            >
              <div className={styles.try_work2}>
                <div className={styles.work_text2}>
                  <h2>inPixio AI Photo Editor </h2>
                  <p>
                    Edit your photos like a pro with AI Photo
                    <br /> Editor
                  </p>
                  <button className={styles.read_btn4}>
                    {" "}
                    Read more
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
                </div>
                <div className={styles.video_box}>
                  <img src="images/video1.gif" />
                </div>
              </div>
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 12 }}
              xl={{ span: 12 }}
            >
              <div className={styles.try_work}>
                <div className={styles.work_text}>
                  <h2>Remove Background </h2>
                  <p>
                    Get a transparent background in seconds
                    <br /> with AI background remover
                  </p>
                  <button className={styles.read_btn4}>
                    {" "}
                    Read more
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
                </div>
                <div className={styles.video_box}>
                  <img className={styles.img_fluid} src="images/video2.gif" />
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 12 }}
              xl={{ span: 12 }}
            >
              <div className={styles.try_work3}>
                <div className={styles.work_text3}>
                  <h2>Root On </h2>
                  <p>
                    Help Students To Find Right Programs For
                    <br /> Higher Education
                  </p>
                  <button className={styles.read_btn4}>
                    {" "}
                    Read more
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
                </div>
                <div className={styles.video_box}>
                  <img src="images/vide3.svg" />
                </div>
              </div>
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 12 }}
              xl={{ span: 12 }}
            >
              <div className={styles.try_work4}>
                <div className={styles.work_text4}>
                  <h2>
                    VNP <span>Web Portal</span>
                  </h2>
                  <p>
                    Book courier pickup & delivery under two <br />
                    minutes
                  </p>
                  <button className={styles.read_btn4}>
                    {" "}
                    Read more
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
                </div>
                <div className={styles.video_box}>
                  <img src="images/video4.png" />
                </div>
              </div>
            </Col>
          </Row>
          <button className={styles.read_btn4}>
            {" "}
            Read more about case studies
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
        </div>
      </div>
    </>
  );
};

export default Degital;
