import { useState } from "react";
import styles from "./CTA.module.css"

const CTA = () => {
  return (
    <>
        <div className={styles.container}>
            <div className={styles.title}>
              <span>READY TO GET START</span>
              <span className={styles.confuse}>?</span>  
            </div>
            <a 
              className={styles.contactUsBtn} 
              href="/aboutus"
              >
                Contact Us
              </a>
        </div>
    </>
  )
};

export default CTA;
