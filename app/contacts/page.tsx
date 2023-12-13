import React from "react";
import styles from "../styles/responsive.module.css";
import { Input } from "antd";
import { Checkbox } from "antd";
import { Col, Row } from "antd";
import { Select, Space } from 'antd';
import TextArea from "antd/es/input/TextArea";


const Form = () => {
  return (
    <>
      <div className={styles.form_wrapper}>
        <div className={styles.container}>
          <Row className={styles.form_row}>
            <Col   xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }}  lg={{ span: 12 }} xl={{ span: 12 }}>
                <div className={styles.form_box}>
                  <h2>Get In Touch With Us</h2>
                  <p>
                One step away to discuss your project, <br /> request a quote or just to pick our brains.</p>
                </div>
              <div className={styles.name}>
                  <div className={styles.name_left}>
                  <Input className={styles.form} placeholder="First Name" />
                  </div>
                  <div className={styles.name_right}>
                  <Input className={styles.form} placeholder="Last Name" />
                  </div>
              </div>

              <Input className={styles.form} placeholder="Email address" />
              <Input className={styles.form} placeholder="Phone Number" />
            

              <Select className={styles.select} defaultValue="Company Type" >
            
                {/* <option value="volvo">Company Type</option>
                <option value="saab">Startup</option>
                <option value="opel">SEM</option>
                <option value="audi">Enterprise</option> */}
              </Select>
   
              <h3 className={styles.form_box_h3}>I'M LOOKING FOR:</h3>
              <ul>
                <li>
                  <Checkbox  className={styles.check} >Design</Checkbox>
                </li>
                <li>
                  <Checkbox  className={styles.check}>Cloud & Devops</Checkbox>
                </li>
                <li>
                  <Checkbox className={styles.check}>Development</Checkbox>
                </li>
                <li> 
                  <Checkbox className={styles.check}>Staff Augmentation</Checkbox>
                </li>
              </ul>

             
         <TextArea  className={styles.textarea}  placeholder="Your message..."   /> 

              <button className={styles.submit}> Submit</button>

            </Col>

            <Col   xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }}  lg={{ span: 12 }} xl={{ span: 12 }} >

            <img className={styles.img_fluid} src="images/contact-img.jpg" />
              <div  className={styles.meet_box}>
              <h4>
                Meet <span>the team at blobstation </span>
              </h4>
              <p>
                “Our product & technical team discusses how different
                technologies and frameworks will bring your vision to life.”
              </p>
              </div>
             
              
            </Col>
          </Row>
        </div>
      </div>

      {/* <div className={styles.form_wrapper}>
      <div className={styles.container}>
        <Row>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 12 }}
            xl={{ span: 12 }}
          >
            <div className={styles.form_box}>
              <h2>Get In Touch With Us</h2>
              <p>
                One step away to discuss your project,
                <br /> request a quote or just to pick our brains.
              </p>
              <div className={styles.name}>
                <div className={styles.name_left}>
                  <Input className={styles.form} placeholder="Name" />
                </div>
                <div className={styles.name_right}>
                  <Input className={styles.form} placeholder="Last Name" />
                </div>
              </div>
              <Input className={styles.form} placeholder="Email address" />
              <Input className={styles.form} placeholder="Phone Number" />
              <Input className={styles.form} placeholder="Company Name" />
              <select className={styles.select}>
                <option value="volvo">Company Type</option>
                <option value="saab">First Choice</option>
                <option value="opel">Second Type</option>
                <option value="audi">Third Type</option>
              </select>
              <h3>I'M LOOKING FOR:</h3>
              <ul>
                <li>
                  {" "}
                  <Checkbox>Design</Checkbox>
                </li>
                <li>
                  {" "}
                  <Checkbox>Cloud & Devops</Checkbox>
                </li>
                <li>
                  {" "}
                  <Checkbox>Development</Checkbox>
                </li>
                <li>
                  {" "}
                  <Checkbox>Staff Augmentation</Checkbox>
                </li>
              </ul>
              <TextArea rows={4} placeholder="Your message..." maxLength={6} />

              <button className={styles.submit}> Submit</button>
            </div>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 12 }}
            xl={{ span: 12 }}
          >
            <img className={styles.img_fluid} src="images/form-img.jpg" />
            <div className={styles.meet_box}>
              <h4>
                Meet <span>the team at blobstation </span>
              </h4>
              <p>
                “Our product & technical team discusses how different
                technologies and frameworks will bring your vision to life.”
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div> */}
    </>
  );
};

export default Form;
