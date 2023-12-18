
import React from "react";
import styles from "../../styles/case.module.css";
import Link from "next/link";
import Image from "next/image";
import OurServices from "../../our_service/page";
import  Footer  from "../../footer/page";


const MobileWeb = () => {
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
            <Link href="/casepages/mobile_web">
              {" "}
              <div className={styles.case_btn}>Mobile Application</div>
            </Link>
            <Link href="/casepages/des_web">
              {" "}
              <div className={styles.case_btn}>Desktop Application</div>
            </Link>
          </div>

          <div className={styles.container_cash}>
          <div className={styles.case_box}>
              <div className={styles.case_main}>
                <div className={styles.case_left}>
                  <div className={styles.case_text1}>
                    <h2>inPixio AI Photo Editor </h2>
                    <h4>Mobile Application</h4>
                    <h3>Edit your photos like a pro with AI Photo Editor!</h3>
                    <p className={styles.case_box_p}>
                      Add a wide range of impressive effects to your photo with
                      features that go beyond a standard online photo editor.
                    </p>
                    <Link href="/case_index/">
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
                    src="/images/video1.gif"
                    width={809}
                    height={404}
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className={styles.case_main2}>
              <div className={styles.case_left}>
                <div className={styles.case_text2}>
                  <h2>Fax App </h2>
                  <h4>Mobile Application</h4>
                  <h3>Turn any document into a fax from your phone & iPad</h3>
                  <p>
                    Create faxes from any files with a couple of taps and send
                    them across the world in seconds
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
                  src="/images/video2.gif"
                  width={809}
                  height={404}
                  alt=""
                />
              </div>
            </div>

            <div className={styles.case_box}>
              <div className={styles.case_main2_1}>
                <div className={styles.case_left}>
                  <div className={styles.case_text2_1}>
                    <h2>Safe Photos </h2>
                    <h4>Mobile Application</h4>
                    <h3>Protects your private photos, videos & documents</h3>
                    <p>
                      Easily secure personal files by locking them down with
                      password protection, FaceID and military-grade encryption.
                    </p>
                    <Link href="/case_index/">
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
                    src="/images/case-2-1.png"
                    width={809}
                    height={404}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className={styles.case_main2_3}>
              <div className={styles.case_left}>
                <div className={styles.case_text2_3}>
                  <h2>Scanner App </h2>
                  <h4>Desktop Application</h4>
                  <h3>Edit, Convert, & Sign Scans from your phone</h3>
                  <p>
                    Powerful all-purpose portable scanner with built-in OCR with
                    flexible formats
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
                  src="/images/case-2-3.gif"
                  width={809}
                  height={404}
                  alt=""
                />
              </div>
            </div>

            <div className={styles.case_main2_4}>
              <div className={styles.case_left}>
                <div className={styles.case_text2_4}>
                  <h2>Remove Background</h2>
                  <h4>Web Application</h4>
                  <h3>
                    Get a transparent background in seconds with AI background
                    remover
                  </h3>
                  <p>
                    Powerful AI in the free background remover detects the image
                    background and removes it automatically in seconds
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
                  src="/images/case-2-4.gif"
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

export default MobileWeb;