import styles from './Navbar.module.css'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useEffect, useState } from 'react';

const MobileMenu = ({setOpen}) => {
    return  (
        <div className={styles.mobile_menu_overlay}>
            <div className={styles.mobile_menu_header}>
                <a className={styles.close_btn} onClick={() => setOpen(false)}>
                    <AiOutlineClose size={30} />
                </a>
            </div>
            
            <nav className={styles.mobile_nav_links}>
                <a onClick={() => setOpen(false)} href='/' className={styles.menu_item}>Home</a>
                <a onClick={() => setOpen(false)} href='/works' className={styles.menu_item}>Work</a>
                <a onClick={() => setOpen(false)} href='/aboutus' className={styles.menu_item}>About</a>
            </nav>
        </div>
    )
}

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return <>
    <section className={styles.navbar}>
        <div className={styles.navbar_left}>
            <a className={styles.navbar_name} href='/'>Muasoom</a>
        </div>
        <div className={styles.navbar_right}>
            <a className={styles.navbar_icon} href='/'>Home</a>
            <a className={styles.navbar_icon} href='/works'>Work</a>
            <a className={styles.navbar_icon} href='/aboutus'>About</a>
            <a className={styles.navbar_hamburger} onClick={() => {
              setOpen(true)
              console.log("Open Menu")
              }}>
              <AiOutlineMenu size={25}/>
            </a>
        </div>
    </section>
    {/* <div className={styles.navbar_bottom}></div> */}
    {open && <MobileMenu setOpen={setOpen} />}
  </>
};

export default Navbar;
