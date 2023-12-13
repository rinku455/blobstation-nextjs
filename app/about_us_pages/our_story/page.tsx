import React from "react";
import styles from "../../styles/aboutcss.module.css";
import { Row, Col } from "antd";
import Image from "next/image";

const OurStory = () => {
  return (
    <>
      <div className={styles.our_Story}>
        <div className={styles.container}>
          <Row className={styles.our_story_row}>
            <Col
              xs={{ span: 24 }}
              md={{ span: 24 }}
              lg={{ span: 12 }}
              xl={{ span: 12 }}
            >
              <div className={styles.our_story_left}>
                <h2>Our Story</h2>
                <h3>
                  The Story of Blobstation is polished with hard work and
                  colored with successfully delivered solutions
                </h3>
                <p>
                  A Bunch of nerds, get together every day and develop and write
                  hundreds of lines of code that turns a client's idea into a
                  present reality. We also have developed the habit of building
                  relationships with clients while building digital solutions
                  for them and that's the primary reason we are being loved by
                  all of our clients.
                </p>
              </div>
            </Col>
            <Col
              xs={{ span: 24 }}
              md={{ span: 24 }}
              lg={{ span: 12 }}
              xl={{ span: 12 }}
            >
              <Image
                className={styles.story_img}
                src="/images/our-story1.png"
                width={620}
                height={400}
                alt=""
              />
            </Col>
          </Row>

          <Row className={styles.about_row}>
            <Col
              xs={{ span: 24 }}
              md={{ span: 24 }}
              lg={{ span: 12 }}
              xl={{ span: 12 }}
            >
              <Image
                className={styles.story_img}
                src="/images/our-story2.png"
                width={620}
                height={400}
                alt=""
              />
            </Col>
            <Col
              xs={{ span: 24 }}
              md={{ span: 24 }}
              lg={{ span: 12 }}
              xl={{ span: 12 }}
            >
              <div className={styles.our_story_right}>
                <h3>
                  The Story of Blobstation is polished with hard work and
                  colored with successfully delivered solutions
                </h3>
                <p>
                  A Bunch of nerds, get together every day and develop and write
                  hundreds of lines of code that turns a client's idea into a
                  present reality. We also have developed the habit of building
                  relationships with clients while building digital solutions
                  for them and that's the primary reason we are being loved by
                  all of our clients.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default OurStory;
