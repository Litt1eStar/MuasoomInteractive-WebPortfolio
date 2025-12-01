import { useState } from "react";
import styles from "./CTA.module.css"

const CTA = () => {
  const [isButtonHovered, setIsButtonHovered] = useState(false)

  return (
    <>
        <div className={styles.container}>
            <div className={styles.title}>
              <span>READY TO GET START</span>
              <span className={styles.confuse}>?</span>  
            </div>
            <div 
              className={styles.contactUsBtn} 
              >
                Contact Us
              </div>
        </div>
    </>
  )
};

export default CTA;
