import React from "react";
import styles from "./Hero.module.css"

const Hero = () => {
  return (
    <>
        <div className={styles.container}>
            <div className={styles.leftContainer}>
                <div className={styles.title}>ABOUT OUR</div>
                <div className={styles.title}>PRODUCTION</div>
                <div className={styles.title}>HOUSE</div>
            </div>
            <div className={styles.rightContainer}>
                <div className={styles.description}>
                    We are Muasoom, a dynamic production house specializing in immersive, high-contrast multimedia experiences. We blend videography, web development, and animation to turn your vision into a powerful, unforgettable digital reality, prioritizing bold, high-performance execution.
                </div>
                <div className={styles.description}>
                    Muasoom is where imagination meets its instruction manual. We are architects of digital narratives, using cutting-edge technology to build solutions with maximum visual impact and zero technical static. Let's build your legacy in every dimension.
                </div>
            </div>
        </div>
    </>
  )
};

export default Hero;
