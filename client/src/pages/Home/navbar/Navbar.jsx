import styles from './Navbar.module.css'
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return <>
    <section className={styles.navbar}>
        <div className={styles.navbar_left}>
            <a className={styles.navbar_name} href='/'>Muasoom</a>
        </div>
        <div className={styles.navbar_right}>
            <a className={styles.navbar_icon} href='/'>Home</a>
            <a className={styles.navbar_icon} href='/works'>Work</a>
            <a className={styles.navbar_icon}>About</a>
            <a className={styles.navbar_hamburger}>
              <AiOutlineMenu size={25}/>
            </a>
        </div>
    </section>
    {/* <div className={styles.navbar_bottom}></div> */}
  </>
};

export default Navbar;
