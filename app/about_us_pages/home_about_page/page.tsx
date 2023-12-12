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
                <div className={styles.design_btn}>UI/UX Design</div>
                <div className={styles.design_btn}> Product Design</div>
                <div className={styles.design_btn}>Graphics Design</div>
                <div className={styles.design_btn}>Brand Building</div>
            </div>
        </div>
      </div>
   
    </>
  );
};

export default AboutHome;
