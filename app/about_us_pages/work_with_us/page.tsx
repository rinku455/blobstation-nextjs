import React from "react";
import styles from "../../styles/aboutcss.module.css";
import { Row, Col, Form } from "antd";
import Link from "next/link";

const WorkWithUs = () => {
  return (
    <>
      <div className={styles.work_wrapper}>
        <div className={styles.container}>
          <h1>
            Work <span> with us.</span>
          </h1>
          <p>Explore our current openings.</p>
          <div className={styles.space_block}></div>

          <div className={styles.tech_wrapper}>
            <h1>Tech</h1>
            <div className={styles.tech_box}>
              <Row>
                <Col
                  className={styles.tech_row}
                  sm={{ span: 24 }}
                  md={{ span: 8 }}
                  lg={{ span: 8 }}
                  xl={{ span: 8 }}
                >
                  <div className={styles.tech_content}>
                    <h2>Software Developer</h2>
                    <p>
                      The successful candidate should possess an experience in
                      .NET technology and demonstrated ability to understand
                      business requirements and translate and develop into
                      software products.
                    </p>
                    <Link href="/read">
                      <button className={styles.read_btn4}>
                        {" "}
                        Read more
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="23"
                          height="23"
                          fill="currentColor"
                          className={styles.bi_arrow}
                          bi-arrow-right
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                          />
                        </svg>
                      </button>
                    </Link>
                  </div>
                </Col>

                <Col
                  className={styles.tech_row}
                  sm={{ span: 24 }}
                  md={{ span: 8 }}
                  lg={{ span: 8 }}
                  xl={{ span: 8 }}
                >
                  <div className={styles.tech_content}>
                    <h2>Junior QA Engineer</h2>
                    <p>
                      We are looking for a Junior QA Engineer to develop and
                      execute exploratory and end-to-end tests to ensure product
                      quality.
                    </p>
                    <Link href="/read">
                      <button className={styles.read_btn4}>
                        {" "}
                        Read more
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="23"
                          height="23"
                          fill="currentColor"
                          className={styles.bi_arrow}
                          bi-arrow-right
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                          />
                        </svg>
                      </button>
                    </Link>
                  </div>
                </Col>

                <Col
                  className={styles.tech_row}
                  sm={{ span: 24 }}
                  md={{ span: 8 }}
                  lg={{ span: 8 }}
                  xl={{ span: 8 }}
                >
                  <div className={styles.tech_content}>
                    <h2>Software Developer / .NET Core Developer</h2>
                    <p>
                      We are looking for a Software Developer / .NET Core
                      Developer having proven experience working on large-scale
                      projects.
                    </p>
                    <Link href="/read">
                      <button className={styles.read_btn4}>
                        {" "}
                        Read more
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="23"
                          height="23"
                          fill="currentColor"
                          className={styles.bi_arrow}
                          bi-arrow-right
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                          />
                        </svg>
                      </button>
                    </Link>
                  </div>
                </Col>
              </Row>
            </div>
          </div>

          <div className={styles.tech_wrapper}>
            <h1>Growth</h1>
            <div className={styles.growth_box}>
              <Row>
                <Col
                  sm={{ span: 24 }}
                  md={{ span: 8 }}
                  lg={{ span: 8 }}
                  xl={{ span: 8 }}
                >
                  <div className={styles.growth_content}>
                    <h2>Business Development Executive</h2>
                    <p>
                      We are looking for an empathic and ambitious Business
                      Development Executive to join our team and to contribute
                      to the growth of our company.
                    </p>
                    <Link href="/read">
                      <button className={styles.read_btn4}>
                        {" "}
                        Read more
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="23"
                          height="23"
                          fill="currentColor"
                          className={styles.bi_arrow}
                          bi-arrow-right
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                          />
                        </svg>
                      </button>
                    </Link>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkWithUs;
