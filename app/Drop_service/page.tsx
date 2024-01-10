import React from "react";
import { Button, Dropdown, Space } from "antd";
import styles from "../styles/style.module.css";
import Link from "next/link";
import Image from "next/image";
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css"
/>;



const items    = [
  {
    key: "1",
    label: (
      <div className={styles.drop_box} rel="noopener noreferrer">
        <Image
          className={styles.drop}
          src="/images/drop-1.svg"
          width={40}
          height={40}
          alt=""
        />
        <Link href="/design">Design</Link>
      </div>
    ),
  },
  {
    key: "2",
    label: (
      <div className={styles.drop_box} rel="noopener noreferrer">
        <Image
          className={styles.drop}
          src="/images/drop-2.svg"
          width={40}
          height={40}
          alt=""
        />
        <Link href="/development">Development</Link>
      </div>
    ),
  },
  {
    key: "3",
    label: (
      <div className={styles.drop_box} rel="noopener noreferrer">
        <Image
          className={styles.drop}
          src="/images/drop-3.svg"
          width={40}
          height={40}
          alt=""
        />
        Cloud & DevOps
      </div>
    ),
  },
  {
    key: "4",
    label: (
      <div className={styles.drop_box} rel="noopener noreferrer">
        <Image
          className={styles.drop}
          src="/images/drop-4.svg"
          width={40}
          height={40}
          alt=""
        />
        Staff Augmentation
      </div>
    ),
  },
]; 
const Dropservice = () => (
   <div >
  <Space >  
 
      <Dropdown
prefixCls={styles.drop_menu}
        menu={{
          items,
        }}

        trigger={['click']}
        placement="bottom"
      >
        <Button className={styles.service_drop_btn}>
          Services{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className={styles.bi_dropicon}
            viewBox="0 0 16 16"
            direction="vertical"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>{" "}
          
        </Button>
      </Dropdown>
     
    </Space>
    </div>
);


export default Dropservice;
