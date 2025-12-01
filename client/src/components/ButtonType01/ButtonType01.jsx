import React from "react";
import styles from "./ButtonType01.module.css"

const ButtonType01 = ({title, destination}) => {
  return (
    <>
      <a href={destination}  className={`${styles.btn_contact} ${styles.btn}`}>{title}</a>
    </>
  )
};

export default ButtonType01;
