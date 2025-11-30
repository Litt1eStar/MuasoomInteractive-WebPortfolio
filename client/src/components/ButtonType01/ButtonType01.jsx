import React from "react";
import styles from "./ButtonType01.module.css"
const ButtonType01 = ({title}) => {
  return (
    <>
      <button className={`${styles.btn_contact} ${styles.btn}`}>{title}</button>
    </>
  )
};

export default ButtonType01;
