import React from "react";
import styles from "../../styles/aboutcss.module.css";
import { Row, Col } from "antd";

const Leader = () => {
  return (
    <>
      <div className={styles.leader_wrapper}>
        <div className={styles.container_leader}>
          <Row className={styles.leader_row}>
            <Col  className={styles.leader_col}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 12 }}
              xl={{ span: 12 }}
            >
              <img className="image_leader" src="images/leader_img.png" />
            </Col>

            <Col
              className={styles.leader_col}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 12 }}
              xl={{ span: 12 }}
            >
              <div className={styles.words_leader}>
                <div className={styles.img_box}>
                  <div className={styles.img_coma_box}>
                    <img className="image" src="images/coma-img.svg" />
                    </div>
                    <h2>A Word From Our Leader</h2>
                    <p>
                      As the CEO and Founder of Blobstation, it’s my pleasure to
                      introduce to you our dynamic organization working towards
                      achieving your goals. We are committed to taking you
                      forward with passion, innovation and dedication. We
                      believe in creating values for our clients and employees
                      in all possible manners.
                    </p>
                    <h3>Jay Thakkar</h3>
                    <h4>- CEO and Founder</h4>
                 
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Leader;
