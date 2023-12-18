import React from "react";
import styles from "../../styles/aboutcss.module.css";
import { Row, Col } from "antd";
import Image from "next/image";

const Different = () => {
  return (
    <>
      <div className={styles.different_wrapper}>
        <div className={styles.container}>
          <h1>What makes us different?</h1>

          <Row className={styles.row_different}>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 12 }}
              xl={{ span: 12 }}
            >
              <div className={styles.different_box}>
                <h2>Cross function team</h2>
                <p>
                  Teams combining technical expertise with domain knowledge.
                </p>
                <div className={styles.different_Img_box}>
                  <Image
                    className={styles.different_Img}
                    src="/images/different-1.png"
                    width={410}
                    height={520}
                    alt=""
                  />
                </div>
              </div>

              <div className={styles.different_box}>
                <h2>Monthly team events</h2>
                <p>
                Our monthly team events are secret sauce behind our collaborative spirit.
                </p>
                <div className={styles.different_Img_box}>
                  <Image
                    className={styles.different_Img}
                    src="/images/different-2.png"
                    width={410}
                    height={130}
                    alt=""
                  />
                </div>
              </div>

              <div className={styles.different_box}>
                <h2>Cutting-Edge Tools</h2>
                <p>
                We leverage the latest development tools and technologies giving competitive edge.
                </p>
                <div className={styles.different_Img_box_2}>
                  <Image
                    className={styles.different_Img}
                    src="/images/different-3.webp"
                    width={410}
                    height={130}
                    alt=""
                  />
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
                <div className={styles.different_box}>
                <h2>Innovative hackathons</h2>
                <p>
                We foster creativity through regular hackathons to collaborate and brainstorm fresh ideas.
                </p>
                <div className={styles.different_Img_box}>
                  <Image
                    className={styles.different_Img}
                    src="/images/different-4.png"
                    width={410}
                    height={130}
                    alt=""
                  />
                </div>
              </div>



              <div className={styles.different_box}>
                <h2>Highly agile</h2>
                <p>
                Promoting collaboration and adaptability for faster project delivery.
                </p>
                <div className={styles.different_Img_box}>
                  <Image
                    className={styles.different_Img}
                    src="/images/different-5.png"
                    width={410}
                    height={130}
                    alt=""
                  />
                </div>
              </div>


              <div className={styles.different_box}>
                <h2>Continuous learning</h2>
                <p>
                We invest in our team's professional development to stay at the forefront of technology.
                </p>
                <div className={styles.different_Img_box_3}>
                  <Image
                    className={styles.different_Img}
                    src="/images/different-6.png"
                    width={410}
                    height={520}
                    alt=""
                  />
                </div>
              </div>

            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Different;
