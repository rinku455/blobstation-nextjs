import Link from "next/link";
import Dropservice from "../../../Drop_service/page";
import styles from "../../../styles/style.module.css";
import Button from "../navbar/Button";
import Image from "next/image";

const Sidebar = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}): JSX.Element => {
  return (
    <>
      <div
        className="sidebar-container fixed w-full h-full overflow-hidden position-sticky justify-center bg-white 
        grid pt-[60px] left-0 z-10"
        style={{
          opacity: `${isOpen ? "1" : "0"}`,
          top: ` ${isOpen ? "0" : "-100%"}`,
        }}
      >
        {/* <div className={styles.main_nav}> */}
        <button
          className="absolute left-0 p-5 w-full border-b-2-300 "
          onClick={toggle}
        >
          <Image className={styles.logoimg}
           src="/images/blob.jpg"
           width={170} height={170} alt="" />
        </button>

        <button className="absolute right-0 pr-5 pt-3   " onClick={toggle}>
          {/* Close icon */}
          <div className={styles.close_icon_box}>
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
          </div>
        </button>
        {/* </div> */}

        <ul className={styles.sidebar_ul}>
          <li className={styles.sidebar_li}>
            <Link href="/" onClick={toggle}>
              <p>Home</p>
            </Link>
          </li>
          <li className={styles.sidebar_li}>
            <Link href="" onClick={toggle}>
              <Dropservice />
            </Link>
          </li>
          <li className={styles.sidebar_li}>
            <Link href="/casestudy" onClick={toggle}>
              <p>Case Studies</p>
            </Link>
          </li>
          <li className={styles.sidebar_li}>
            <Link href="/aboutus" onClick={toggle}>
              <p>About Us</p>
            </Link>
          </li>
          <li className={styles.sidebar_li}>
            <Link href="/blog" onClick={toggle}>
              <p>Blog</p>
            </Link>
          </li>
          <li className={styles.sidebar_li}>
            <Link href="/contacts" onClick={toggle}>
              <p>Contacts</p>
            </Link>
          </li>
          <li className={styles.sidebar_li}>
            {" "}
            <Button />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
