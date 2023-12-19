import Link from "next/link";
import styles from "./../../../styles/style.module.css";

const Button = () => {
 
  return (
    <div>
      {
        <button className={styles.talkbtn}>
          <Link href="/contacts">Let's talk</Link>
        </button>
      }
    </div>
  );
};

export default Button;
