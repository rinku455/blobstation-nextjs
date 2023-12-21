import React from "react";
import styles from "../../styles/aboutcss.module.css";
import Image from "next/image";


const ExpertTeam = () => {
  return (
    <>
      <div className={styles.expert_wrapper}>
        <div className={styles.container}>
          <h1>Our team of experts</h1>
          <p>Individually, we are one drop, Together, we are an ocean.</p>

          <div className={styles.leaner_box}>

        <div className={styles.top_leaner}></div>
        <div className={styles.bottom_leaner}></div>
  
          <ul className={styles.main_ul}>
            <li className={styles.first_li}>
              <ul className={styles.cild_ul}>
                <li>
                  <div className={styles.expert_box}>
                    <Image
                      className={styles.expert_Img}
                      src="/images/exp-1.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <Image
                      className={styles.expert_Img_2}
                      src="/images/exp-1-2.png"
                      width={140}
                      height={140}
                      alt=""
                    />

                    <div className={styles.space}></div>
                    <h2>Jignesh Suvariya</h2>
                    <h3>Senior Project Lead</h3>
                  </div>
                </li>

                <li>
                  <div className={styles.expert_box}>
                    <Image
                      className={styles.expert_Img}
                      src="/images/expert-2.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <Image
                      className={styles.expert_Img_2}
                      src="/images/expert-2-2.png"
                      width={140}
                      height={140}
                      alt=""
                    />

                    <div className={styles.space}></div>
                    <h2>Jalpa Jhaveri</h2>
                    <h3>HR Manager</h3>
                  </div>
                </li>
                <li>
                  <div className={styles.expert_box}>
                    <Image
                      className={styles.expert_Img}
                      src="/images/exp-3.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <Image
                      className={styles.expert_Img_2}
                      src="/images/exp3-2.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <div className={styles.space}></div>
                    <h2>Yash Goswami</h2>
                    <h3>Software Developer</h3>
                  </div>
                </li>
                <li>
                  <div className={styles.expert_box}>
                    <Image
                      className={styles.expert_Img}
                      src="/images/exp-4.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <Image
                      className={styles.expert_Img_2}
                      src="/images/exp-4-2.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <div className={styles.space}></div>
                    <h2>Vatsal Sojitra</h2>
                    <h3>Digital Marketing Strategist</h3>
                  </div>
                </li>

                <li>
                  <div className={styles.expert_box}>
                    <Image
                      className={styles.expert_Img}
                      src="/images/exp-5-1.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <Image
                      className={styles.expert_Img_2}
                      src="/images/exp-5-2.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <div className={styles.space}></div>
                    <h2>Kinal Thakkar</h2>
                    <h3>Software Developer</h3>
                  </div>
                </li>
                <li>
                  <div className={styles.expert_box}>
                    <Image
                      className={styles.expert_Img}
                      src="/images/exp-6.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <Image
                      className={styles.expert_Img_2}
                      src="/images/exp-6-2.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <div className={styles.space}></div>
                    <h2>Ghanshyam Rao</h2>
                    <h3>Junior Full Stack Developer</h3>
                  </div>
                </li>

                <li>
                  <div className={styles.expert_box}>
                    <Image
                      className={styles.expert_Img}
                      src="/images/exp-7.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <Image
                      className={styles.expert_Img_2}
                      src="/images/exp-7-2.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <div className={styles.space}></div>
                    <h2>Pranjal Thakkar</h2>
                    <h3>Junior Full Stack Developer</h3>
                  </div>
                </li>

                <li>
                  <div className={styles.expert_box}>
                    <Image
                      className={styles.expert_Img}
                      src="/images/exp-8.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <Image
                      className={styles.expert_Img_2}
                      src="/images/exp-8-2.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <div className={styles.space}></div>
                    <h2>Shubham Poddar</h2>
                    <h3>Junior Full Stack Developer</h3>
                  </div>
                </li>

                <li>
                  <div className={styles.expert_box}>
                    <Image
                      className={styles.expert_Img}
                      src="/images/exp-9.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <Image
                      className={styles.expert_Img_2}
                      src="/images/exp-9-2.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <div className={styles.space}></div>
                    <h2>Chandni Adtani</h2>
                    <h3>Junior React Developer</h3>
                  </div>
                </li>

                <li>
                  <div className={styles.expert_box}>
                    <Image
                      className={styles.expert_Img}
                      src="/images/exp-10.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <Image
                      className={styles.expert_Img_2}
                      src="/images/exp-10-2.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <div className={styles.space}></div>
                    <h2>Khushi Bhatt</h2>
                    <h3>Intern</h3>
                  </div>
                </li>

                <li>
                  <div className={styles.expert_box}>
                    <Image
                      className={styles.expert_Img}
                      src="/images/exp-11.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <Image
                      className={styles.expert_Img_2}
                      src="/images/exp-11-2.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <div className={styles.space}></div>
                    <h2>Abhishek Yeole</h2>
                    <h3>Intern</h3>
                  </div>
                </li>

                <li>
                  <div className={styles.expert_box}>
                    <Image
                      className={styles.expert_Img}
                      src="/images/exp-12.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <Image
                      className={styles.expert_Img_2}
                      src="/images/exp-12-2.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <div className={styles.space}></div>
                    <h2>Dhyan Joshi</h2>
                    <h3>ReactJS Developer</h3>
                  </div>
                </li>

                <li>
                  <div className={styles.expert_box}>
                    <Image
                      className={styles.expert_Img}
                      src="/images/exp-13.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <Image
                      className={styles.expert_Img_2}
                      src="/images/exp-13-2.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <div className={styles.space}></div>
                    <h2>Payal Jarsania</h2>
                    <h3>QA Engineer</h3>
                  </div>
                </li>
              </ul>
            </li>

            <li className={styles.second_li}>
              <ul className={styles.cild_ul}>
                <li>
                  <div className={styles.expert_box}>
                    <Image
                      className={styles.expert_Img}
                      src="/images/exp-2-1.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <Image
                      className={styles.expert_Img_2}
                      src="/images/exp-2-2.png"
                      width={140}
                      height={140}
                      alt=""
                    />

                    <div className={styles.space}></div>
                    <h2>Palak Turakhia</h2>
                    <h3>Senior QA Engineer</h3>
                  </div>
                </li>

                <li>
                  <div className={styles.expert_box}>
                    <Image
                      className={styles.expert_Img}
                      src="/images/exp-22.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <Image
                      className={styles.expert_Img_2}
                      src="/images/exp-22-2.png"
                      width={140}
                      height={140}
                      alt=""
                    />

                    <div className={styles.space}></div>
                    <h2>Ashok Patel</h2>
                    <h3>Software Developer</h3>
                  </div>
                </li>
                <li>
                  <div className={styles.expert_box}>
                    <Image
                      className={styles.expert_Img}
                      src="/images/exp-2-11.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <Image
                      className={styles.expert_Img_2}
                      src="/images/exp-2-111.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <div className={styles.space}></div>
                    <h2>Kanika Khiroya</h2>
                    <h3>UI/UX Designer</h3>
                  </div>
                </li>
                <li>
                  <div className={styles.expert_box}>
                    <Image
                      className={styles.expert_Img}
                      src="/images/exp-kiran.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <Image
                      className={styles.expert_Img_2}
                      src="/images/exp-kiran-2.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <div className={styles.space}></div>
                    <h2>Kiran Patel </h2>
                    <h3>Junior Full Stack Developer </h3>
                  </div>
                </li>

                <li>
                  <div className={styles.expert_box}>
                    <Image
                      className={styles.expert_Img}
                      src="/images/exp-rajesh.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <Image
                      className={styles.expert_Img_2}
                      src="/images/exp-rajesh-2.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <div className={styles.space}></div>
                    <h2>Rajesh Maheshwari</h2>
                    <h3>Software Develper</h3>
                  </div>
                </li>
                <li>
                  <div className={styles.expert_box}>
                    <Image
                      className={styles.expert_Img}
                      src="/images/exp-bahrat.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <Image
                      className={styles.expert_Img_2}
                      src="/images/exp-bharat-2.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <div className={styles.space}></div>
                    <h2>Bharat Modi</h2>
                    <h3>UI/UX Designer</h3>
                  </div>
                </li>

                <li>
                  <div className={styles.expert_box}>
                    <Image
                      className={styles.expert_Img}
                      src="/images/exp-solanki.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <Image
                      className={styles.expert_Img_2}
                      src="/images/exp-solanki-2.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <div className={styles.space}></div>
                    <h2>Mahendra Solanki</h2>
                    <h3>Senior iOS Developer</h3>
                  </div>
                </li>

                <li>
                  <div className={styles.expert_box}>
                    <Image
                      className={styles.expert_Img}
                      src="/images/exp-dharani.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <Image
                      className={styles.expert_Img_2}
                      src="/images/dharani-2.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <div className={styles.space}></div>
                    <h2>Rajesh Dharani</h2>
                    <h3>iOS Developer</h3>
                  </div>
                </li>

                <li>
                  <div className={styles.expert_box}>
                    <Image
                      className={styles.expert_Img}
                      src="/images/exp-narendra.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <Image
                      className={styles.expert_Img_2}
                      src="/images/exp-narendra-2.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <div className={styles.space}></div>
                    <h2>Narendra Keda</h2>
                    <h3>Senior Android Developer</h3>
                  </div>
                </li>

                <li>
                  <div className={styles.expert_box}>
                    <Image
                      className={styles.expert_Img}
                      src="/images/rinku.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <Image
                      className={styles.expert_Img_2}
                      src="/images/rinku-2.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <div className={styles.space}></div>
                    <h2>Rinku Jangid</h2>
                    <h3>Intern</h3>
                  </div>
                </li>

                <li>
                  <div className={styles.expert_box}>
                    <Image
                      className={styles.expert_Img}
                      src="/images/exp-het.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <Image
                      className={styles.expert_Img_2}
                      src="/images/exop-het-2.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <div className={styles.space}></div>
                    <h2>Het Patel</h2>
                    <h3>Juinor Web Developer</h3>
                  </div>
                </li>

                <li>
                  <div className={styles.expert_box}>
                    <Image
                      className={styles.expert_Img}
                      src="/images/malhan.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <Image
                      className={styles.expert_Img_2}
                      src="/images/malhan-2.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <div className={styles.space}></div>
                    <h2>Malhar Pandya</h2>
                    <h3>Project Manager</h3>
                  </div>
                </li>
              </ul>
            </li>

            <li className={styles.last_li}>
              <ul className={styles.cild_ul}>
                <li>
                  <div className={styles.expert_box}>
                    <Image
                      className={styles.expert_Img}
                      src="/images/nishant.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <Image
                      className={styles.expert_Img_2}
                      src="/images/nishant-2.png"
                      width={140}
                      height={140}
                      alt=""
                    />

                    <div className={styles.space}></div>
                    <h2>Nishant Bharathan</h2>
                    <h3>Senior Software Developer</h3>
                  </div>
                </li>

                <li>
                  <div className={styles.expert_box}>
                    <Image
                      className={styles.expert_Img}
                      src="/images/jaimin.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <Image
                      className={styles.expert_Img_2}
                      src="/images/jaimin-2.png"
                      width={140}
                      height={140}
                      alt=""
                    />

                    <div className={styles.space}></div>
                    <h2>Jaimin Rawal</h2>
                    <h3>Senior Software Developer</h3>
                  </div>
                </li>
                <li>
                  <div className={styles.expert_box}>
                    <Image
                      className={styles.expert_Img}
                      src="/images/vrunda.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <Image
                      className={styles.expert_Img_2}
                      src="/images/vrunda-2.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <div className={styles.space}></div>
                    <h2>Vrunda Thakkar</h2>
                    <h3>Software Developer</h3>
                  </div>
                </li>
                <li>
                  <div className={styles.expert_box}>
                    <Image
                      className={styles.expert_Img}
                      src="/images/sanket.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <Image
                      className={styles.expert_Img_2}
                      src="/images/sanket-2.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <div className={styles.space}></div>
                    <h2>Sanket Bhore</h2>
                    <h3>QA Engineer</h3>
                  </div>
                </li>

                <li>
                  <div className={styles.expert_box}>
                    <Image
                      className={styles.expert_Img}
                      src="/images/yeole.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <Image
                      className={styles.expert_Img_2}
                      src="/images/yeole-2.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <div className={styles.space}></div>
                    <h2>Swapnil Yeole</h2>
                    <h3>Sr. Mobile Application Developer</h3>
                  </div>
                </li>
                <li>
                  <div className={styles.expert_box}>
                    <Image
                      className={styles.expert_Img}
                      src="/images/niraj.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <Image
                      className={styles.expert_Img_2}
                      src="/images/niraj-2.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <div className={styles.space}></div>
                    <h2>Niraj Joshi</h2>
                    <h3>Senior iOS Developer</h3>
                  </div>
                </li>

                <li>
                  <div className={styles.expert_box}>
                    <Image
                      className={styles.expert_Img}
                      src="/images/abhishek.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <Image
                      className={styles.expert_Img_2}
                      src="/images/abhishek-2.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <div className={styles.space}></div>
                    <h2>Abhishek Prajapati</h2>
                    <h3>Junior Full Stack Developer</h3>
                  </div>
                </li>

                <li>
                  <div className={styles.expert_box}>
                    <Image
                      className={styles.expert_Img}
                      src="/images/exp-1.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <Image
                      className={styles.expert_Img_2}
                      src="/images/exp-1-2.png"
                      width={140}
                      height={140}
                      alt=""
                    />

                    <div className={styles.space}></div>
                    <h2>Jignesh Suvariya</h2>
                    <h3>Senior Project Lead</h3>
                  </div>
                </li>
                <li>
                  <div className={styles.expert_box}>
                    <Image
                      className={styles.expert_Img}
                      src="/images/exp-2-1.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <Image
                      className={styles.expert_Img_2}
                      src="/images/exp-2-2.png"
                      width={140}
                      height={140}
                      alt=""
                    />

                    <div className={styles.space}></div>
                    <h2>Palak Turakhia</h2>
                    <h3>Senior QA Engineer</h3>
                  </div>
                </li>
                <li>
                  <div className={styles.expert_box}>
                    <Image
                      className={styles.expert_Img}
                      src="/images/nishant.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <Image
                      className={styles.expert_Img_2}
                      src="/images/nishant-2.png"
                      width={140}
                      height={140}
                      alt=""
                    />

                    <div className={styles.space}></div>
                    <h2>Nishant Bharathan</h2>
                    <h3>Senior Software Developer</h3>
                  </div>
                </li>

                <li>
                  <div className={styles.expert_box}>
                    <Image
                      className={styles.expert_Img}
                      src="/images/tushar.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <Image
                      className={styles.expert_Img_2}
                      src="/images/tushar-2.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <div className={styles.space}></div>
                    <h2>Tushar Chovatiya</h2>
                    <h3>Junior Backend Developer</h3>
                  </div>
                </li>

                <li>
                  <div className={styles.expert_box}>
                    <Image
                      className={styles.expert_Img}
                      src="/images/kinjal.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <Image
                      className={styles.expert_Img_2}
                      src="/images/kinjal-2.png"
                      width={140}
                      height={140}
                      alt=""
                    />
                    <div className={styles.space}></div>
                    <h2>Kinjal Thakkar</h2>
                    <h3>UI/UX Designer</h3>
                  </div>
                </li>
              </ul>
            </li>
            
          </ul>
        </div>
        </div>
      </div>
    </>
  );
};

export default ExpertTeam;
