
import React from "react";
import styles from "../styles/case.module.css";
import Link from "next/link";
import Image from "next/image";
import OurServices from "../our_service/page";
import  Footer  from "../footer/page";


const CaseWeb = () => {
  return <> 


      <div className={styles.case_hero}>
        <div className={styles.container}>
          <h1>
            Case Studies:<span> Our Digital Success Stories</span>
          </h1>
          <p className={styles.container_p}>
            Developing a successful digital product is a complex process that
            requires choosing the right partner, applying innovative solutions,
            and following reliable processes.
          </p>

          <div className={styles.buttons_blog}>
            <Link href="/casestudy">
              {" "}
              <div className={styles.case_btn}>All </div>
            </Link>
            <Link href="/caseweb">
              {" "}
              <div className={styles.case_btn}> Web Application</div>
            </Link>
            <Link href="/casestudy">
              {" "}
              <div className={styles.case_btn}>Mobile Application</div>
            </Link>
            <Link href="/casestudy">
              {" "}
              <div className={styles.case_btn}>Desktop Application</div>
            </Link>
          </div>

          <div className={styles.container_cash}>
          <div className={styles.case_main4}>
              <div className={styles.case_left}>
                <div className={styles.case_text4}>
                  <h2>VNP Portal</h2>
                  <h4>Web Application</h4>
                  <h3>Book courier pickup & delivery in under two minutes</h3>
                  <p>
                    An application to streamline the process from business
                    customers ordering courier pickup & delivery services
                  </p>
                  <Link href="/read">
                    <button className={styles.read_btn4}>
                      {" "}
                      Read more
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="23"
                        fill="currentColor"
                        className={styles.bi_arrow}
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
              <div className={styles.case_right}>
                <Image
                  className={styles.case_right_vide}
                  src="/images/case4.png"
                  width={809}
                  height={404}
                  alt=""
                />
              </div>
            </div>

            <div className={styles.case_main5}>
              <div className={styles.case_left}>
                <div className={styles.case_text5}>
                  <h2>Root On</h2>
                  <h4>Web Application</h4>
                  <h3>
                    Help Students To Find Right Programs For Higher Education
                  </h3>
                  <p>
                    A web application to streamline the process starting from
                    finding the right program to get admitted into the school
                  </p>
                  <Link href="/read">
                    <button className={styles.read_btn4}>
                      {" "}
                      Read more
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="23"
                        fill="currentColor"
                        className={styles.bi_arrow}
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
              <div className={styles.case_right}>
                <Image
                  className={styles.case_right_vide}
                  src="/images/case5.png"
                  width={809}
                  height={404}
                  alt=""
                />
              </div>
            </div>

          <div className={styles.case_main2_2}>
              <div className={styles.case_left}>
                <div className={styles.case_text2_2}>
                  <h2>Lemon Jelly</h2>
                  <h4>Mobile Application</h4>
                  <h3>Premium footwear online for North American customers</h3>
                  <p>
                    Modern e-commerce website with the best user experience to
                    increase sales in a relatively new geography
                  </p>
                  <Link href="/read">
                    <button className={styles.read_btn4}>
                      {" "}
                      Read more
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="23"
                        fill="currentColor"
                        className={styles.bi_arrow}
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
              <div className={styles.case_right}>
                <Image
                  src="/images/case-2-2.png"
                  width={809}
                  height={404}
                  alt=""
                />
              </div>
            </div>


            <div className={styles.case_main2_5}>
              <div className={styles.case_left}>
                <div className={styles.case_text2_5}>
                  <h2>Batbatian Property Portal</h2>
                  <h4>Web Application</h4>
                  <h3>
                    Put up available real estate properties online to potential
                    buyers
                  </h3>
                  <p>
                    A web portal where potential customers can checkout
                    available properties for sale or rent
                  </p>
                  <Link href="/read">
                    <button className={styles.read_btn4}>
                      {" "}
                      Read more
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="23"
                        fill="currentColor"
                        className={styles.bi_arrow}
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
              <div className={styles.case_right}>
                <Image
                  className={styles.case_right_vide}
                  src="/images/case-2-5.png"
                  width={809}
                  height={404}
                  alt=""
                />
              </div>
            </div>

           
          </div>
        </div>
      </div>
      <OurServices/>
  <Footer/>
  
  </>;
};

export default CaseWeb;