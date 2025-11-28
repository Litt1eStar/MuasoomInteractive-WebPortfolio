import React from "react";
import styles from "./CustomerReviews.module.css"
const CustomerReviews = () => {
  return (
    <>
        <div className={styles.container}>
            <div className={styles.title}>Customer Reviews</div>
            <div className={styles.reviewContainer}></div>
        </div>
    </>
  )
};

export default CustomerReviews;
