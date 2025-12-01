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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non facilisis quam, sit amet viverra elit. Pellentesque sed tempus turpis. Cras a ex sit amet odio sagittis sollicitudin. Sed non semper nunc, eu viverra massa. Donec ut interdum mi, id finibus massa. Maecenas vel metus sapien.
                </div>
                <div className={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non facilisis quam, sit amet viverra elit. Pellentesque sed tempus turpis. Cras a ex sit amet odio sagittis sollicitudin. Sed non semper nunc, eu viverra massa. Donec ut interdum mi, id finibus massa. Maecenas vel metus sapien.
                </div>
            </div>
        </div>
    </>
  )
};

export default Hero;
