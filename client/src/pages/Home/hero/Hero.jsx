import React from "react";
import styles from './Hero.module.css'
import Button from '@mui/material/Button'

const Hero = () => {
  return (
    <>
        <div className={styles.container}>
            <h1 className={styles.name}>Muasoom</h1>
            <h1 className={styles.name}>Interactive</h1>
            <p className={styles.description}>Production House Based In Thailand</p>
            <div className={styles.btn_container}>
                <Button sx={{color: "black", backgroundColor: "white", border: "3px solid white", borderRadius: "2rem", width: "12rem", height: "5rem", fontSize: "1.5rem"}} variant="outlined">Contact Us</Button>
                <Button sx={{color: "black", backgroundColor: "white", border: "3px solid white", borderRadius: "2rem", width: "12rem", height: "5rem", fontSize: "1.5rem"}} variant="outlined">Projects</Button>
                {/* <button className={`${styles.btn_contact} ${styles.btn}`}>Contact Us</button>
                <button className={`${styles.btn_contact} ${styles.btn}`}>Services</button> */}
            </div>
        </div>
    </>
  )
};

export default Hero;
