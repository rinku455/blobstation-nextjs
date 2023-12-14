import React from "react";
import styles from "../../styles/case.module.css";

const CaseHero = () => {
  return (
    <>
      <div className={styles.case_hero}>
        <div className={styles.container}>
          <h1>
            Case Studies:<span> Our Digital Success Stories</span>
          </h1>
          <p>
            Developing a successful digital product is a complex process that
            requires choosing the right partner, applying innovative solutions,
            and following reliable processes.
          </p>

          {/* <div className={buttons_blog">
                <a href="case.html" class="active.btn">All</a>
                <a href="webapplication.html"> Web Application</a>
                <a href="mobileapplication.html">Mobile Application</a>
                <a href="Desktopapplication.html">Desktop Application</a>
            </div> */}
        </div>
      </div>
    </>
  )
};

export default CaseHero;
