import React from "react";
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <>
        <div className={styles.container}>
            <h1 className={styles.name}>Muasoom</h1>
            <h1 className={styles.name}>Interactive</h1>
            <p className={styles.description}>Production House Based In Thailand</p>
            <div className={styles.btn_container}>
                <button className={`${styles.btn_contact} ${styles.btn}`}>Contact Us</button>
                <button className={`${styles.btn_contact} ${styles.btn}`}>Services</button>
            </div>
        </div>
    </>
  )
};

export default Hero;
