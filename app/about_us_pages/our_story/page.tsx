import React from "react";
import styles from "../../styles/aboutcss.module.css";
import { Row, Col } from "antd";
import Image from "next/image";

const OurStory = () => {
  return (
    <div>
      {" "}
      &apos;{" "}
      {
        <div className={styles.our_Story}>
          <div className={styles.container}>
            <Row className={styles.our_story_row}>
              <Col
                xs={{ span: 24 }}
                md={{ span: 24 }}
                lg={{ span: 13 }}
                xl={{ span: 13 }}
              >
                <div className={styles.our_story_left}>
                  <h2>Our Story</h2>
                  <h3>
                    The Story of Blobstation is polished with hard work and
                    colored with successfully delivered solutions
                  </h3>
                  <p>
                    A Bunch of nerds, get together every day and develop and
                    write hundreds of lines of code that turns a client's idea
                    into a present reality. We also have developed the habit of
                    building relationships with clients while building digital
                    solutions for them and that's the primary reason we are
                    being loved by all of our clients.
                  </p>
                </div>
              </Col>
              <Col
                xs={{ span: 24 }}
                md={{ span: 24 }}
                lg={{ span: 11 }}
                xl={{ span: 11 }}
              >
                <Image
                  className={styles.story}
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
                  className={styles.story}
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
                {" "}
                &apos;
                <div className={styles.our_story_right}>
                  <h3>
                    For the last couple of years, we became one of the
                    fastest-growing software development companies
                  </h3>
                  <p>
                    Our unique success formula has put us on a map to be called
                    a top-notch software company. The real credit goes to our
                    awesome team. Since the last two years, we have built and
                    delivered software for a startup that has grown from a m-m$
                    company to software that has millions of users on a daily
                    basis. Our gradual progress, from small-scale projects to
                    m-m$ startups, has brightened our journey with the color of
                    success.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      }
    </div>
  );
};

export default OurStory;
