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
                <ButtonType01 title={"Learn More"} />
            </div>
            <div className={styles.rightContainer}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente amet iure quasi, voluptas iste eaque repellat molestiae, ipsam soluta reprehenderit, aspernatur veritatis quis necessitatibus numquam. Nesciunt quam natus voluptas soluta voluptate, expedita at culpa sunt sint, in dolorum pariatur vero nihil nemo quasi, consequatur eaque eveniet quaerat. Sit, asperiores harum.
            </div>
        </div>
    </>
  )
}
export default AboutUs;
