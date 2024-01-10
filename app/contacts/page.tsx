import React from "react";
import styles from "../styles/responsive.module.css";
import "../styles/responsive.module.css";
import { AutoComplete, Input } from "antd";
import { Checkbox } from "antd";
import { Col, Row } from "antd";
import TextArea from "antd/es/input/TextArea";
import Image from "next/image";

const Form = () => {
  return (
    <div>
      {
        <div className={styles.form_wrapper}>
          <div className={styles.container}>
            <Row className={styles.form_row}>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 24 }}
                lg={{ span: 12 }}
                xl={{ span: 12 }}
              >
                <div className={styles.form_box}>
                  <h2>Get In Touch With Us</h2>
                  <p>
                    One step away to discuss your project, <br /> request a
                    quote or just to pick our brains.
                  </p>
                </div>
                <div className={styles.name}>
                  <div className={styles.name_left}>
                    <Input
                      type="email"
                      prefixCls={styles.form}
                      placeholder="First Name"
                    />
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
                  rows={4}
                  prefixCls={styles.textarea}
                  placeholder="Your message..."
                />

                <button className={styles.submit}> Submit</button>
              </Col>

              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 24 }}
                lg={{ span: 12 }}
                xl={{ span: 12 }}
              >
                <Image
                  className={styles.contact_Img}
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
        </div>
      }
    </div>
  );
};

export default Form;
