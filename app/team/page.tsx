import React from "react";

import styles from "../styles/style.module.css";
import { Col, Row } from "antd";

const Team = () => {
  return (
    <>
      <div className={styles.team_wrapper}>
        <div className={styles.team_container}>
          <Row className={styles.row_team_gap}>
            <Col
              className={styles.team_gap2}
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 24 }}
              lg={{ span: 12 }}
              xl={{ span: 12 }}
            >
              <>
                <div className={styles.img_box}>
                  <img className={styles.images} src="images/team1.jpg" />
                </div>
              </>
            </Col>
            <Col
              className={styles.team_gap3}
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 24 }}
              lg={{ span: 12 }}
              xl={{ span: 12 }}
            >
              <>
                <div className={styles.team}>
                  <div className={styles.team_content}>
                    <h1 className={styles.team_content_h1}>
                      {" "}
                      With team of dedicated professionals you will be in good
                      hands.
                    </h1>
                    <p className={styles.team_content_p}>
                      We develop software solutions by working closely with
                      clients to understand business needs. Innovative solutions
                      built with client's vision and our technical expertise
                      empower the businesses in modern digital world.
                    </p>
                  </div>
                </div>
              </>
            </Col>
          </Row>
          <Row className={styles.row_team_gap}>
            <Col
              className={styles.team_gap2}
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 24 }}
              lg={{ span: 12 }}
              xl={{ span: 12 }}
            >
              <div className={styles.team}>
                <>
                  <div className={styles.team_content}>
                    <h1 className={styles.team_content_h1}>
                      {" "}
                      Our solutions are tailored for you so you can grow fast.
                    </h1>
                    <p className={styles.team_content_p}>
                      At Blobstation, we understand that every business has
                      unique needs and goals. That's why we offer tailored
                      solutions that are specifically designed to meet the
                      individual needs of each client, enabling them to grow and
                      succeed in today's digital landscape.
                    </p>
                  </div>
                </>
              </div>
            </Col>
            <Col
              className={styles.team_gap3}
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 24 }}
              lg={{ span: 12 }}
              xl={{ span: 12 }}
            >
              <>
                <div className={styles.img_box}>
                  <img className={styles.images} src="images/team2.jpg" />
                </div>
              </>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Team;
