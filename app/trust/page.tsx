import React from "react";
import styles from "../styles/responsive.module.css";
import Marquee from "react-fast-marquee";

const Trust = () => {
  return <>
  
  <div className={styles.trust_wrapper} >
    <div className={styles.container}>
        <div className={styles.trust_wrapper_h1}>Trusted by the best</div>
        <div className={styles.trust_wrapper_p}>We always believe in life-long relationships</div>
        <div className={styles.trust_box}>
        
            <ul className={styles.trust_box_ul}>
       
                <li> <img className={styles.img_fluid}  src="/images/banner-im-1.svg"/>  </li>
                <li> <img  className={styles.img_fluid} src="/images/trust-img-2.svg"/>  </li>
                <li> <img className={styles.img_fluid} src="/images/banner-img-2.svg"/>  </li>
                <li> <img className={styles.img_fluid} src="/images/banner-im-3.svg"/>  </li>
                <li> <img className={styles.img_fluid} src="/images/banner-img-4.svg"/>  </li>
                <li> <img className={styles.img_last} src="/images/trust-img-5.png"/>  </li>
               
            </ul>
           
        </div>
    </div>
  </div>
  
  </>;
};

export default Trust;