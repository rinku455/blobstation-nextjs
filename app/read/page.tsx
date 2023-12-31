import React from "react";
import styles from "../styles/responsive.module.css";
import  "../styles/responsive.module.css";
import { AutoComplete, Input } from "antd";
import { Checkbox } from "antd";
import { Col, Row } from "antd";
import { Select, Space } from "antd";
import TextArea from "antd/es/input/TextArea";
import Image from "next/image";

const Read_btn = () => {  
  return (
    <div> &apos;
      {<div className={styles.form_wrapper}>
        <div className={styles.container}>
          <Row className={styles.form_row}>
            <Col 
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 12 }}
              xl={{ span: 12 }}
            >
              <div className={styles.form_box}>
                <h2 style={{ fontFamily: 'Satoshi', fontSize: '50px' }}>Get In Touch With Us</h2>
                <p>
                  One step away to discuss your project, <br /> request a quote
                  or just to pick our brains.
                </p>
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
             
    <select className={styles.select}>
    <option value="0">Company Type:</option>
    <option value="1">Startup</option>
    <option value="2">SEM</option>
    <option value="3">Enterprise</option>
  </select>
 

              {/* <Select  ant-select-selector className={styles.select} defaultValue="Company Type">
                <option   value="Company">Company Type</option>
                <option value="Startup">Startup</option>
                <option value="SEM">SEM</option>
                <option value="Enterprise">Enterprise</option>
              </Select> */}
             
              <h3 className={styles.form_box_h3}>I'M LOOKING FOR:</h3>
              <ul>
                
                  <li>
                  <Checkbox className={styles.check}>Design</Checkbox>
                </li>
                <li>
                  <Checkbox className={styles.check}>Cloud & Devops</Checkbox>
                </li>
                <li>
                  <Checkbox className={styles.check}>Development</Checkbox>
                </li>
                <li>
                  <Checkbox className={styles.check}>
                    Staff Augmentation
                  </Checkbox>
                </li>
              </ul>

              <TextArea
                className={styles.textarea}
                placeholder="Your message..."
              />

              <button className={styles.submit}> Submit</button>
            </Col>

            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 12 }}
              xl={{ span: 12 }}
            >
              <Image
                className={styles.fluid}
                src="/images/contact.jpg"
                width={480}
                height={414}
                alt=""
              />
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
      </div>}

      
    </div>
  )
}

export default Read_btn;
