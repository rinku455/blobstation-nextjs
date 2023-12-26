import React from "react";
import { Carousel } from "antd";
import styles from "../../styles/aboutcss.module.css";
import Image from "next/image";

const Impression = () => {
  return (
    <>
      <div className={styles.Impression_wrapper}>
        <div className={styles.container_fluid}>
          <h1>
            Get an impression of <span> our office</span>
          </h1>
          <p>
            Explore our dynamic office - where creativity thrives in every
            corner. Immerse yourself in the hub of innovation, where
            productivity meets passion.
          </p>
          <div className={styles.space2}></div>
          <Carousel autoplay slidesToShow={2}>
            <div className={styles.office_box}>
              <Image
                className={styles.office}
                src="/images/office-1.png"
                width={820}
                height={566}
                alt=""
              />
            </div>

            <div className={styles.office_box}>
              <Image
                className={styles.office}
                src="/images/office-2.png"
                width={820}
                height={566}
                alt=""
              />
            </div>
            <div className={styles.office_box}>
              <Image
                className={styles.office}
                src="/images/office-3.png"
                width={820}
                height={566}
                alt=""
              />
            </div>
            <div className={styles.office_box}>
              <Image
                className={styles.office}
                src="/images/office-4.png"
                width={820}
                height={566}
                alt=""
              />
            </div>
            <div className={styles.office_box}>
              <Image
                className={styles.office}
                src="/images/office-5.png"
                width={820}
                height={566}
                alt=""
              />
            </div>
            <div className={styles.office_box}>
              <Image
                className={styles.office}
                src="/images/office-6.png"
                width={820}
                height={566}
                alt=""
              />
            </div>

            <div className={styles.office_box}>
              <Image
                className={styles.office}
                src="/images/office-7.png"
                width={820}
                height={566}
                alt=""
              />
            </div>

            <div className={styles.office_box}>
              <Image
                className={styles.office}
                src="/images/office-8.png"
                width={820}
                height={566}
                alt=""
              />
            </div>

            <div className={styles.office_box}>
              <Image
                className={styles.office}
                src="/images/office-9.png"
                width={820}
                height={566}
                alt=""
              />
            </div>
            <div className={styles.office_box}>
              <Image
                className={styles.office}
                src="/images/office-10.png"
                width={820}
                height={566}
                alt=""
              />
            </div>
            <div className={styles.office_box}>
              <Image
                className={styles.office}
                src="/images/office-11.png"
                width={820}
                height={566}
                alt=""
              />
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Impression;
