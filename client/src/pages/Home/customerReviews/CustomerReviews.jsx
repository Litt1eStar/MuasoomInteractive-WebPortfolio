import React from "react";
import styles from "./CustomerReviews.module.css"
import { TiStarFullOutline } from "react-icons/ti";
import Avvvatars from 'avvvatars-react';

const reviews = [
    { id: 1, name: "Midori Toka", rating: 5, review: "ดีมากเลยค่ะ ถูกใจใช่เลย คุณภาพงานยอดเยี่ยมมากๆค่ะ จัดไป 5 ดาว ของแท้ไม่โกง +1" },
    { id: 2, name: "Pepperoni", rating: 3, review: "ผมเป็นเกย์" },
    { id: 3, name: "Buzz LY", rating: 5, review: "สุดยอดเลยครับ ส่งมาเร็วกว่ากำหนดไม่ขอแก้เพิ่มอีก ขอบคุณมากๆครับ" },
    { id: 4, name: "Dywood", rating: 5, review: "งานดีมากๆ คุ้มค่ากับราคาที่จ่ายไปจริงๆ ครับ แนะนำเลย" },
    { id: 5, name: "Lincon", rating: 4, review: "การสื่อสารราบรื่นดีครับ แก้ไขงานรวดเร็ว ไม่มีปัญหาอะไรเลย" },
    { id: 6, name: "Ronaldo", rating: 5, review: "ส่งมอบงานก่อนกำหนด ประทับใจมาก จะใช้บริการอีกแน่นอน" },
];
const reviewsToDisplay = [...reviews, ...reviews];


const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
        <TiStarFullOutline 
            key={i} 
            // Set color based on rating
            color={i < rating ? '#FFD700' : '#C0C0C0'} 
            // React Icons uses the 'size' prop for size (e.g., 20px)
            size={40} 
            style={{ marginRight: '2px' }}
        />
    ));
};

const CustomerReviews = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>CUSTOMER REVIEWS</div>
        <div className={styles.scroller} data-animated="true">
          <div className={styles.scrollerInner}>
            {reviewsToDisplay.map((review, index) => (
              <div key={review.id + "-" + index} className={styles.reviewCard}>
                <div className={styles.stars}>
                    {renderStars(review.rating)}
                </div>
                <p className={styles.reviewText}>{review.review}</p>
                
                <div className={styles.reviewer}>
                    {/* --- Use FaUserCircle as the avatar icon --- */}
                    <Avvvatars size={60} value={review.name} className={styles.avatarIcon}/> 
                    <span>{review.name}</span>
                </div>
              </div>
            ))}
            </div>
        </div>
      </div>
    </>
  )
};

export default CustomerReviews;
