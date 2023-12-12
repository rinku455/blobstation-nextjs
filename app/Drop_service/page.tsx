import React from 'react';
import { Button, Dropdown, Space } from 'antd';
import { AiOutlineDown } from "react-icons/ai";
import styles from "../styles/style.module.css" ;
import Link from 'next/link';

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
        <Button  className={styles.service_drop_btn} >Services <AiOutlineDown /></Button>
      </Dropdown>
      
    </Space>
  </Space>
);
export default Dropservice;