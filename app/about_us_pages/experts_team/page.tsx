import React from "react";
import styles from "../../styles/aboutcss.module.css";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const ExpertTeam = () => {
  return (
    <>
      <div className={styles.expert_wrapper}>
        <div className={styles.container}>
          <h1>Our team of experts</h1>
          <p>Individually, we are one drop, Together, we are an ocean.</p>

    <div className={styles.expert_main_box}>
    <Marquee direction="up"  className={styles.marquee_expert_box} >
      <ul>
        
        <li>
        <div className={styles.expert_box}>
            <Image
              className={styles.expert_Img}
              src="/images/exp-1.png"
              width={140}
              height={140}
              alt=""
            />
            <Image
              className={styles.expert_Img_2}
              src="/images/exp-1-2.png"
              width={140}
              height={140}
              alt=""
            />

            <div className={styles.space}></div>
            <h2>Jignesh Suvariya</h2>
            <h3>Senior Project Lead</h3>
          </div>
        </li>

        <li>
        <div className={styles.expert_box}>
            <Image
              className={styles.expert_Img}
              src="/images/expert-2.png"
              width={140}
              height={140}
              alt=""
            />
            <Image
              className={styles.expert_Img_2}
              src="/images/expert-2-2.png"
              width={140}
              height={140}
              alt=""
            />

            <div className={styles.space}></div>
            <h2>Jalpa Jhaveri</h2>
            <h3>HR Manager</h3>
          </div>
        </li>

      

      </ul>
      </Marquee>
    </div>


        
        </div>
      </div>
    </>
  );
};

export default ExpertTeam;
