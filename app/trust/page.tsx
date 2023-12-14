import React from "react";
import styles from "../styles/responsive.module.css";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const Trust = () => {
  return (
    <>
      <div className={styles.trust_wrapper}>
        <div className={styles.container}>
          <div className={styles.trust_wrapper_h1}>Trusted by the best</div>
          <div className={styles.trust_wrapper_p}>
            We always believe in life-long relationships
          </div>
          <div className={styles.trust_box}>
            <ul className={styles.trust_box_ul}>
              <li>
                <Image
                  className={styles.img_fluid}
                  src="/images/banner-im-1.svg"
                  width={110}
                  height={42}
                  alt=""
                />
              </li>

              <li>
                {" "}
                <Image
                  className={styles.img_fluid}
                  src="/images/trust-img-2.svg"
                  width={79}
                  height={93}
                  alt=""
                />{" "}
              </li>

              <li>
                {" "}
                <Image
               className={styles.img_fluid}
                  src="/images/banner-img-2.svg"
                  width={237}
                  height={56}
                  alt=""
                />{" "}
              </li>

              <li>
                {" "}
                <Image
                  className={styles.img_fluid}
                  src="/images/banner-im-3.svg"
                  width={178}
                  height={33}
                  alt=""
                />{" "}
              </li>
              <li>
                {" "}
                <Image
                  className={styles.img_fluid}
                  src="/images/banner-img-4.svg"
                  width={152}
                  height={60}
                  alt=""
                />{" "}
              </li>
              <li>
                {" "}
                <Image
                  className={styles.img_fluid}
                  src="/images/trust-img-5.png"
                  width={263}
                  height={48}
                  alt=""
                />{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trust;
