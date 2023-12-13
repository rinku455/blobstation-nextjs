import React from 'react';
import { Button, Dropdown, Space } from 'antd';
import styles from "../styles/style.module.css" ;
import Link from 'next/link';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css"
/>;

const items = [
  {
    key: '1',
    label: (
      <a className={styles.drop_box} target="_blank" rel="noopener noreferrer" >
        
        <img className={styles.drop_img} src="/images/drop-img-1.svg"/>
        <Link href="/design">
       Design
       </Link>
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a className={styles.drop_box} target="_blank" rel="noopener noreferrer" href="/development">
         <img className={styles.drop_img} src="/images/drop-img-2.svg"/>
         <Link href="/development">
        Development
        </Link>
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a className={styles.drop_box} target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
         <img className={styles.drop_img} src="/images/drop-img-3.svg"/>
     Cloud & DevOps
      </a>
    ),
  },
  {
    key: '4',
    label: (
      <a className={styles.drop_box} target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
         <img className={styles.drop_img} src="/images/drop-img-4.svg"/>
     Staff Augmentation
      </a>
    ),
  },
];
const Dropservice = () => (
  <Space direction="vertical">
    <Space wrap>
     
      <Dropdown 
        menu={{
          items,
        }}
   
        placement="bottom"
  
      >
        <Button  className={styles.service_drop_btn} >Services <svg xmlns="http://www.w3.org/2000/svg" width="16"
         height="16" fill="currentColor" className={styles.bi_dropicon}  viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg>  </Button>
      </Dropdown>
      
    </Space>
  </Space>
);
export default Dropservice;