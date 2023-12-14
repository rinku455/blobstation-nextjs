import React from "react";

import styles from "../styles/responsive.module.css";

const Solution = () => {
  const text = `you're free`;
  return (
    <div>
      {<div className={styles.enterprise_wrapper}>
        <div className={styles.container}>
          <>
            <h1>
              One solution for <span> all your business needs </span>
            </h1>
            <p>
              Whether you've just got started or well established corporation -
              we got you covered!{" "}
            </p>
            {/* <div className={styles.btn_box_3}>
              <ul>
                <li>
                  {" "}
                  <button
                    className={styles.img_btn_active}
                    id="show-image-button"
                  >
                    Startup
                  </button>
                </li>
                <li>
                  {" "}
                  <button
                    className={styles.img_btn_active}
                    id="show-image-button2"
                  >
                    SEM
                  </button>
                </li>
                <li>
                  <button
                    className={styles.img_btn_active}
                    id="show-image-button3"
                  >
                    Enterprise
                  </button>
                </li>
              </ul>
            </div>
            <div className={styles.img_container} id="img-conternt">
      
              <div className={styles.img_text} id="imgtext">
                <h1 id="heading">Enterprise</h1>
                <p id="ptag">
                  Our enterprise engagement option is perfect for large
                  organizations looking for comprehensive solutions. Our team
                  will work with you to develop a customized plan.
                </p>
              </div>
            </div> */}
          </>
        </div>
      </div>}
    </div>
  )
}

export default Solution;
