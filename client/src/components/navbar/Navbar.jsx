import styles from './Navbar.module.css'
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return <>
    <nav className={styles.navbar}>
        <div className={styles.navbar_left}>
            <a className={styles.navbar_name}>Muasoom</a>
        </div>
        <div className={styles.navbar_right}>
            <a className={styles.navbar_icon}>Home</a>
            <a className={styles.navbar_icon}>Work</a>
            <a className={styles.navbar_icon}>About</a>
            <a className={styles.navbar_hamburger}>
              <AiOutlineMenu size={25}/>
            </a>
        </div>
    </nav>
    {/* <div className={styles.navbar_bottom}></div> */}
  </>
};

export default Navbar;
