import React from "react";
import styles from "../styles/responsive.module.css";
import Link from "next/link";

const OurSolution = () => {
  return (
    <>
      <div className={styles.OurSolution_wrapper}>
        <div className={styles.container}>
          <div className={styles.solution_heading}>
            <h1>
              One solution for <span> all your business needs</span>
            </h1>
            <p>
              Whether you've just got started or well established corporation -
              we got you covered!
            </p>
          </div>
          <div className={styles.main_btn_box}>
            <div className={styles.solution_btn_box}>
              <button className={styles.startup_btn  }>Startup</button>
              <button className={styles.sme_btn}>SEM</button>
              <button className={styles.enterprise_btn}>Enterprise</button>
            </div>
          </div>
         
         
        </div>
      </div>
    </>
  );
};

export default OurSolution;
