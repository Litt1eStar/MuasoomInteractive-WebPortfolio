import React from 'react';
import styles from './ContactInfo.module.css';
import { FaLocationDot, FaEnvelope, FaPhone, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa6'; // You'll need to install react-icons

const ContactInfo = () => {
    return (
        <div className={styles.contactInfo}>
            <h2 className={styles.title}>GET IN TOUCH WITH US</h2>
            <div className={styles.infoGroup}>
                <FaLocationDot className={styles.icon} />
                <p className={styles.infoText}>King Mongkut's University of Technology Thonburi, 126 Pracha Uthit Road, Bang Mot Subdistrict, Thung Khru District, Bangkok 10140</p>
            </div>
            <div className={styles.infoGroup}>
                <FaEnvelope className={styles.icon} />
                <a href="mailto:contact@kmutt.ac.th" className={styles.infoText}>contact@kmutt.ac.th</a>
            </div>
            <div className={styles.infoGroup}>
                <FaPhone className={styles.icon} />
                <p className={styles.infoText}>0 2470 8000, 8035</p>
            </div>
            <div className={styles.socialIcons}>
                <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebookF className={styles.socialIcon} /></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram className={styles.socialIcon} /></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><FaYoutube className={styles.socialIcon} /></a>
            </div>
        </div>
    );
};

export default ContactInfo;