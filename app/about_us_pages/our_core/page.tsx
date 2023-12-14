import React from "react";
import styles from "../../styles/aboutcss.module.css";
import { Row, Col } from "antd";
import Image from "next/image";

const OurCore = () => {
  return (
    <div> 
      {<div className={styles.our_Core}>
        <div className={styles.container}>
          <div className={styles.core_heading}>
            <h2>
              Our Core <span>Competencies</span>{}
            </h2>
            <p>
              At Blobstation, our workplace thrives on a rich tapestry of core
              competencies that form the essence of who we are. From unwavering
              values and transparency to the fluidity of flexibility, open
              communication, and a celebration of diversity, these competencies
              are the pillars shaping our collaborative ethos
            </p>
          </div>

          <div>
            <Row className={styles.core_row}>
              <Col
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 12 }}
                xl={{ span: 8 }}
              >
                <div className={styles.core_box}>
                  <Image
                    className={styles.core}
                    src="/images/core-1.svg"
                    width={77}
                    height={65}
                    alt=""
                  />

                  <h3>Values</h3>
                  <p>
                    Our values are more than just a high standard of work - it&apos;s
                    a culmination of transparency, flexibility, speed and
                    diversity.
                  </p>
                </div>
              </Col>

              <Col
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 12 }}
                xl={{ span: 8 }}
              >
                <div className={styles.core_box}>
                  <Image
                    className={styles.core}
                    src="/images/core-2.svg"
                    width={77}
                    height={65}
                    alt=""
                  />

                  <h3>Communication</h3>
                  <p>
                    We believe communication is the key to any project's success
                    and so we are always available to listen.
                  </p>
                </div>
              </Col>

              <Col
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 12 }}
                xl={{ span: 8 }}
              >
                <div className={styles.core_box}>
                  <Image
                    className={styles.core}
                    src="/images/core-3.svg"
                    width={77}
                    height={65}
                    alt=""
                  />

                  <h3>Transparency</h3>
                  <p>
                    Transparency brings trust and facilitates a never breaking
                    bond. What you see is what you get and at Blobstation, you
                    can see everything.
                  </p>
                </div>
              </Col>
            </Row>

            <Row>
              <Col
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 12 }}
                xl={{ span: 8 }}
              >
                <div className={styles.core_box}>
                  <Image
                    className={styles.core}
                    src="/images/core-4.svg"
                    width={77}
                    height={65}
                    alt=""
                  />

                  <h3>Flexibility </h3>
                  <p>
                    We want you to succeed as much as you do - that&apos;s why we are
                    open to cater our working hours directly to your schedule.
                  </p>
                </div>
              </Col>

              <Col
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 12 }}
                xl={{ span: 8 }}
              >
                <div className={styles.core_box}>
                  <Image
                    className={styles.core}
                    src="/images/core-5.svg"
                    width={77}
                    height={65}
                    alt=""
                  />

                  <h3>Diversity</h3>
                  <p>
                    The art of thinking independently together. We support
                    diversity and celebrate it every day.
                  </p>
                </div>
              </Col>

              <Col
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 12 }}
                xl={{ span: 8 }}
              >
                <div className={styles.core_box}>
                  <Image
                    className={styles.core}
                    src="/images/core-6.svg"
                    width={77}
                    height={65}
                    alt=""
                  />

                  <h3>Efficiency and Efficacy</h3>
                  <p>
                    To ensure we produce high-quality work in a timely manner,
                    we believe in process and people.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>}
    </div>
  )
}

export default OurCore;
