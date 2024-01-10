import React from "react";
import styles from "../../styles/aboutcss.module.css";
import { Row ,Col } from "antd";

const AboutHome = () => {
  return (
    <>
      <div className={styles.about_hero}>
        <div className={styles.container}>
          <h1>
            Your Team Away <span> From Home</span>
          </h1>
          <p>
            If you are looking to quickly deploy and test your idea on the
            market or build an ecommerce platform – we have the resources to
            make it happen.
          </p>
        <div className={styles.buttons_design}>
                <div className={styles.design_btn}>Problem-Solvers</div>
                <div className={styles.design_btn}> Passionate</div>
                <div className={styles.design_btn}>Proactive and Agile</div>
                <div className={styles.design_btn}>Result-Driven</div>
                <div className={styles.design_btn}> Client-Centric</div>
            </div>
        </div>
      </div>
   
    </>
  );
};

export default AboutHome;
