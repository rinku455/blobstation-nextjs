import styles from "./styles/style.module.css";
import OurServices from "./our_service/page";
import Footer from "./footer/page";
import Tailored from "./tailored/Tailored";
import FastGrow from "./fast-grow/page";
import Counting from "./counting/page";
import Team from "./team/page";
import Technical from "./techinical/page";
import Software from "./sofware_dev/page";
import Degital from "./degital/page";
import Link from "next/link";
import Trust from "./trust/page";
import Marquee from "react-fast-marquee";
import Form from "./contacts/page";
import Client from "./client /page";
import Solution from "./solution/page";


export default function Home() {
  return (
    <>
      <div className={styles.hero_container}>
        <div className={styles.hero_main}>
          <div className={styles.hero_left}>
            <div className={styles.hero_content}>
              <h1 className={styles.hero_left_h1}>
                Your Trusted Software Development Partner
              </h1>
              <p className={styles.hero_left_p}>
                Building technology solutions for industry leaders and
                consistently delivering unsurpassed results
              </p>
              <div className={styles.btn_box}>
                <button className={styles.book_btn}>
                  <Link href="/contacts">Book a free consulation</Link>
                </button>
                <button className={styles.read_btn}>
                  <Link href="/aboutus">Read more abhout us</Link>
                </button>
              </div>
            </div>
            <div className={styles.team}>
              <p className={styles.team_p}>Trusted by the teams at: </p>
              <ul>
                <li>
                  <img
                    className={styles.img_fluid}
                    src="/images/banner-im-1.svg  "
                  />
                </li>
                <li>
                  <img
                    className={styles.img_fluid}
                    src="/images/banner-img-2.svg  "
                  />
                </li>
                <li>
                  <a href="#">
                    <img
                      className={styles.img_fluid}
                      src="images/banner-im-3.svg"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      className={styles.img_fluid}
                      src="images/banner-img-4.svg"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.hero_right}>
            <ul className={styles.hero_parent}>
              <li>
                <ul className={styles.hero_child}>
                    <li>
                      {" "}
                      <img className={styles.image} src="images/banner1.JPG" />
                    </li>
                    <li>
                      {" "}
                      <img className={styles.image} src="images/banner2.JPG" />
                    </li>
                    {/* <li>
                      {" "}
                      <img className={styles.image} src="images/banner3.JPG" />
                    </li> */}
                </ul>
              </li>
              <li>
                <ul className={styles.hero_child}>
                 
                    <li>
                      {" "}
                      <img
                        className={styles.image}
                        src="images/banner2-1.png"
                      />
                    </li>
                    <li>
                      {" "}
                      <img
                        className={styles.image}
                        src="images/banner2-2.png"
                      />
                    </li>
                    {/* <li>
                      {" "}
                      <img
                        className={styles.image}
                        src="images/banner2-3.png"
                      />
                    </li> */}
                
                </ul>
              </li>
              <li className={styles.last}>
                <ul className={styles.hero_last}>
                 
                    <li>
                      {" "}
                      <img
                        className={styles.image}
                        src="images/banner3-1.webp"
                      />
                    </li>
                    <li>
                      {" "}
                      <img
                        className={styles.image}
                        src="images/banner3-2.webp"
                      />
                    </li>
                    {/* <li>
                      {" "}
                      <img
                        className={styles.image}
                        src="images/banner3-3.webp"
                      />
                    </li>
                  */}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div></div>

      <OurServices />
      <FastGrow />
      <Tailored />
      <Counting />
      <Team />
      <Degital />
      <Client />
      <Software />
<Solution/>
      <Technical />
      <Trust />
     <Form />
      <Footer />
    </>
  );
}
