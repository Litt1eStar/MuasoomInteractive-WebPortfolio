import React from "react";
import styles from "./AboutUs.module.css"
import ButtonType01 from "../../../components/ButtonType01/ButtonType01";

const AboutUs = () => {
  return (
    <>
        <div className={styles.container}>
            <div className={styles.leftContainer}>
                <div className={styles.title}>ABOUT OUR</div>
                <div className={styles.title}>PRODUCTION</div>
                <ButtonType01 title={"Learn More"} destination={'/aboutus'} />
            </div>
            <div className={styles.rightContainer}>
                We are Muasoom, a dynamic production house specializing in immersive, high-contrast multimedia experiences. We blend videography, web development, and animation to turn your vision into a powerful, unforgettable digital reality.
            </div>
        </div>
    </>
  )
}
export default AboutUs;
