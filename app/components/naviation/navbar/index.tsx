import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import styles from "./../../../styles/style.module.css";
import Button from "./Button";
import { Dropdown } from "antd";
import Dropservice from "../../../Drop_service/page";
  // import Dropservice from "../../../Drop_service/page";

  


const Navbar = ({ toggle }: { toggle: () => void }) => {
  return (
    <>
  <div className="header_sticky">
      <div className={styles.navbar}>
        <div className={styles.container_hader}>
          <div className="flex justify-between items-center h-full">
            <Logo />
            <button
              type="button"
              className="inline-flex items-center md:hidden"
              onClick={toggle}
            > 
              <svg 
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              height="46"
              fill="  #2e8096"
              className={styles.bi_nav_icon}
              viewBox="0 0 16 16"
            >
              <path
                d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0
   1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"
              />
            </svg>
            </button>
            <ul className="hidden md:flex gap-x-10 text-black ">
              <li className={styles.nav_li} >
                <Link href="/">
                  Home
                </Link>
              </li>
              
              <li className={styles.nav_li}>
              <Link href="">
                <Dropservice/>
                </Link>
              </li>
              <li className={styles.nav_li}>
                <Link href="/casestudy">
                  <p>Case Studies</p>
                </Link>
              </li>
              <li className={styles.nav_li}>
                <Link href="/aboutus">
                  <p>About Us</p>
                </Link>
              </li>
              <li className={styles.nav_li}>
                <Link href="/blog">
                  <p>Blog</p>
                </Link>
              </li>
              <li className={styles.nav_li}>
                <Link href="/contacts">
                  <p>Contact Us</p>
                </Link>
              </li>
            </ul>
            <div className="hidden md:block">
              <Button />
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Navbar;
