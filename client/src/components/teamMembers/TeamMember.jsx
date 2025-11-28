import React from "react";
import styles from "./TeamMember.module.css"

const TeamMember = () => {
  return (
    <>
        <div className={styles.container}>
            <div className={styles.title}>OUR TEAM</div>
            <div className={styles.main}>
                <div className={styles.leftContainer}></div>
                <div className={styles.rightContainer}>
                    <div className={styles.memberImage}></div>
                    <div className={styles.memberDetail}>
                        <div className={styles.upper}>                            
                            <div className={styles.mainDetail}>Woody</div>
                            <div className={styles.subDetail}>Project Manager</div>
                            <div className={styles.subDetail}>"POEM"</div>
                        </div>
                        <div className={styles.lower}>
                            <img className={styles.socialMediaIcon} src="img/Icons/instagram.png" alt="Instagram" />
                            <img className={styles.socialMediaIcon} src="img/Icons/facebook.png" alt="Facebook" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
};

export default TeamMember;
