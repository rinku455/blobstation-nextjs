import React from "react";
import styles from "../styles/style.module.css";
import { Col, Row } from "antd";
import Link from "next/link";
import Image from "next/image";

const Tailored = () => {
  return (
    <>
      <div className={styles.model_wrapper}>
        <div className={styles.container}>
          <div className={styles.model_main}>
            <div className={styles.model_left}>
              <>
                <Row>
                  <Col
                    xs={{ span: 24 }}
                    sm={{ span: 24 }}
                    md={{ span: 12 }}
                    lg={{ span: 12 }}
                    xl={{ span: 12 }}
                  >
                    <div className={styles.model_box}>
                      <Image
                        className={styles.taioard}
                        src="/images/tailoard-1.svg"
                        width={77}
                        height={65}
                        alt=""
                      />
 
                     
                      <h3>Staff Augmentation</h3>
                      <p>
                        We provides additional resources to supplement your
                        existing team. It gives you specific skills or expertise
                        required for scale.
                      </p>
                    </div>
                  </Col>
                  <Col
                    xs={{ span: 24 }}
                    sm={{ span: 24 }}
                    md={{ span: 12 }}
                    lg={{ span: 12 }}
                    xl={{ span: 12 }}
                  >
                    <div className={styles.model_box}>
                    <Image
                        className={styles.taioard}
                        src="/images/tailoard-2.svg"
                        width={77}
                        height={65}
                        alt=""
                      />
                    
                      <h3>Dedicated Team </h3>
                      <p>
                        You get dedicated team of software professionals working
                        exclusively on their project. It allows you to scale the
                        team up or down as needed.
                      </p>
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
                    <div className={styles.model_box}>
                    <Image
                        className={styles.taioard}
                        src="/images/tailoard-3.svg"
                        width={77}
                        height={65}
                        alt=""
                      />
                     
                      <h3>Fixed Cost </h3>
                      <p>
                        You get dedicated team of software professionals working
                        exclusively on their project. It allows you to scale the
                        team up or down as needed.
                      </p>
                    </div>
                  </Col>
                  <Col
                    xs={{ span: 24 }}
                    sm={{ span: 24 }}
                    md={{ span: 12 }}
                    lg={{ span: 12 }}
                    xl={{ span: 12 }}
                  >
                    <div className={styles.model_box}>
                    <Image
                        className={styles.taioard}
                        src="/images/tailoard-4.svg"
                        width={77}
                        height={65}
                        alt=""
                      />
                      
                      <h3>Time & Material</h3>
                      <p>
                        Pay for time and resources spent on the project. It
                        offers flexibility and is suitable for projects with
                        evolving requirements.
                      </p>
                    </div>
                  </Col>
                </Row>
              </>
            </div>
            <div className={styles.model_right}>
              <>
                <h2>
                  Tailored to your needs, Our{" "}
                  <span>Flexible Engagement Model </span>ensuring seamless
                  collaboration and successful outcomes.
                </h2>
                <p>
                  Choose the engagement model that aligns with your project
                  goals, budget, and desired level of involvement. Take a
                  decision on factors such as project complexity, timeline,
                  scope, and desired level of control.
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
        </div>
      </div>
    </>
  );
};

export default Tailored;
