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
import Image from "next/image";



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
                  <Image
                    className={styles.fluid}
                    src="/images/banner-im-1.svg"
                    width={110}
                    height={42}
                    alt=""
                  />

                
                </li>
                <li>

                <Image
                    className={styles.fluid}
                    src="/images/banner-im-2.svg"
                    width={176}
                    height={42}
                    alt=""
                  />
                  
                </li>
                <li>
                  <a href="#">

                  <Image
                    className={styles.fluid}
                    src="/images/banner-im-3.svg"
                    width={178}
                    height={33}
                    alt=""
                  />

                    
                  </a>
                </li>
                <li>
                  <a href="#">

                  <Image
                    className={styles.fluid}
                    src="/images/banner-im-4.svg"
                    width={152}
                    height={60}
                    alt=""
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
                

                    <Image
                    className={styles.image}
                    src="/images/banner1.JPG"
                    width={174}
                    height={300}
                    alt=""
                  />
                   
                  </li>
                  <li>
                

                    <Image
                    className={styles.image}
                    src="/images/banner2.JPG"
                    width={174}
                    height={300}
                    alt=""
                  />
                  
                  </li>
                  {/* <li>
                    <Image
                  className={styles.image}
                    src="/images/banner3.JPG "
                    width={174}
                    height={300}
                    alt=""
                  />
                  
                    </li> */}
                </ul>
              </li>
              <li>
                <ul className={styles.hero_child}>
                  <li>

                  <Image
                  className={styles.image}
                    src="/images/banner2-1.png"
                    width={174}
                    height={300}
                    alt=""
                  />
                
                   
                  </li>
                  <li>
                  <Image
                  className={styles.image}
                    src="/images/banner2-2.png"
                    width={174}
                    height={300}
                    alt=""
                  />
                   
                  
                  </li>
                  {/* <li>
                     <Image
                  className={styles.image}
                    src="/images/banner2-3.webp"
                    width={174}
                    height={300}
                    alt=""
                  />
                    </li> */}
                </ul>
              </li>
              <li className={styles.last}>
                <ul className={styles.hero_last}>
                  <li>
                  <Image
                  className={styles.image}
                    src="/images/banner3-1.webp"
                    width={174}
                    height={300}
                    alt=""
                  />
             
                  </li>
                  <li>
                  <Image
                  className={styles.image}
                    src="/images/banner3-2.webp"
                    width={174}
                    height={300}
                    alt=""
                  />
                   
                  </li>
                  {/* <li>
                   <Image
                  className={styles.image}
                    src="/images/banner3-3.webp"
                    width={174}
                    height={300}
                    alt=""
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
      <Solution />
      <Technical />
      <Trust />
      <Form />
      <Footer />
    </>
  );
}
