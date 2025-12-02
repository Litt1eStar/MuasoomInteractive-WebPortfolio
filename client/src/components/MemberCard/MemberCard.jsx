import React from "react";
import styles from "./MemberCard.module.css"
import { FaLinkedinIn, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const MemberCard = ({ name, role, imageUrl }) => {

    const combinedBackground = `
            linear-gradient(
                to top, 
                rgba(0, 0, 0, 0.8) 0%, 
                rgba(0, 0, 0, 0.3) 30%, 
                rgba(0, 0, 0, 0) 100%
            ), 
            url(${imageUrl})
        `;
  return (
    <>
        <div className={styles.memberItem}>
            <div className={styles.memberImg} style={{backgroundImage: combinedBackground}}/>
            <div className={styles.memberInfo}>
                <div className={styles.memberName}>{name}</div>
                <div className={styles.memberRoles}>{role}</div>
            </div>

            <div className={styles.socialOverlay}>
                <div className={styles.socialLinks}>
                    <a href="https://www.linkedin.com/in/krittin-pragopdee-011114234/" target="_blank" className={styles.socialIcon} aria-label="LinkedIn">
                        <FaLinkedinIn size={50} color="#4ED300" />
                    </a>
                    <a href="https://www.linkedin.com/in/krittin-pragopdee-011114234/" target="_blank" className={styles.socialIcon} aria-label="Instagram">
                        <FaInstagram size={50} color="#4ED300" />
                    </a>
                    <a href="https://www.linkedin.com/in/krittin-pragopdee-011114234/" target="_blank" className={styles.socialIcon} aria-label="X (Twitter)">
                        <FaXTwitter size={50} color="#4ED300" />
                    </a>
                </div>
            </div>
        </div>
    </>
  )
};

export default MemberCard;
