import React from "react";
import styles from "../styles/responsive.module.css";
import Link from "next/link";
import Image from "next/image";

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
              <button className={styles.startup_btn}>Startup</button>
              <button className={styles.sme_btn}>SEM</button>
              <button className={styles.enterprise_btn}>Enterprise</button>
            </div>
          </div>

          <div className={styles.image_container}>
            <div className={styles.img_box}>
              <Image
                className={styles.solution_main_box1_Img}
                src="/images/startup.webp"
                width={1319}
                height={660}
                alt=""
              />
            </div>
            <div className={styles.solution_content}>
              <h1>Startup</h1>
              <p>
                Our start up engagement model is designed specifically for new
                businesses, offering cost effective and flexible work model.
              </p>
            </div>
          </div>

          <div className={styles.image_container2}>
            <div className={styles.img_box}>
              <Image
                className={styles.solution_main_box1_Img}
                src="/images/sme.webp"
                width={1319}
                height={660}
                alt=""
              />
            </div>
            <div className={styles.solution_content}>
              <h1>SME</h1>
              <p>
                Our SME engagement option is tailored to the needs of small to
                medium-sized businesses, offering custom solutions to fit your
                specific needs and budget.
              </p>
            </div>
          </div>

          <div className={styles.image_container3}>
            <div className={styles.img_box}>
              <Image
                className={styles.solution_main_box1_Img}
                src="/images/enterprice.webp"
                width={1319}
                height={660}
                alt=""
              />
            </div>
            <div className={styles.solution_content}>
              <h1>Enterprise</h1>
              <p>
                Our enterprise engagement option is perfect for large
                organizations looking for comprehensive solutions. Our team will
                work with you to develop a customized plan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurSolution;
