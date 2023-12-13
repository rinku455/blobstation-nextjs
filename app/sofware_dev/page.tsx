import React from "react";
import styles from "../styles/style.module.css";


const Software = () => {
  return <>

<div className={styles.developer_wrapper}>
        <div className={styles.dev_container}>
            <div className={styles.dev_main}>
                <div className={styles.dev_left}>
                    <div className={styles.dev_content}>
                        <h1>Are you looking for Enterprise Software Development? </h1>
                        <h2>Let’s make it possible now.</h2>
                    </div>
                </div>
                <div className={styles.dev_right}>
                    <button className={styles.circle}></button>
                    <div className={styles.read_box}>
                        <button className={styles.read_btn3}>Read More  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="25"
                  fill="currentColor"
                  className={styles.bi_Service_arrow}
                  
                  viewBox="0 0 16 16"
                  color="#2e8096"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                  />
                </svg></button>
                    </div>
                </div>
            </div>
        </div>
    </div>

  </>;
};

export default Software;