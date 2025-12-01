import React from "react";
import { useParams } from "react-router-dom";
// import WORKS_DATA from "../../data/worksData";
import styles from "./WorkDetail.module.css";

import IMG_DOLOREM from "../../img/Project/Dolorem.jpg";
import { WorkType } from "../../components/WorkCard/WorkCard";
import CTA from "../../components/CTA/CTA";


const WORKS_DATA = [
    {id: 1, name: "Dolorem", types: ["Videography", "Editing", "Colour grading"], imageUrl: IMG_DOLOREM}
]

const WorkDetail = () => {
  const { workId } = useParams();
  const targetId = parseInt(workId, 10);
//   const project = WORKS_DATA.find(p => p.id === targetId);

  const workImagePath = {backgroundImage: `url(${IMG_DOLOREM})`}

  return (
    <>
        <div className={styles.container}>
            <div className={styles.title}>Dolorem</div>
            <div className={styles.workImg} style={workImagePath}></div>
            <div className={styles.detailContainer}>
                <div className={styles.subHeader}>DETAIL</div>
                <div className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit labore doloremque praesentium, ea nobis est, debitis sequi voluptatibus ratione eligendi quaerat dignissimos quibusdam optio adipisci! Enim blanditiis est quisquam libero culpa saepe, distinctio tempore aliquam accusantium quasi quod voluptatibus fuga id velit quaerat temporibus ipsa iusto dicta? Cumque, molestiae nam.</div>
                <div className={styles.subHeader}>Duration : 1 week</div>
                <div className={styles.typeContainer}>
                    {WORKS_DATA[0].types.map((type) => (
                        <WorkType type={type} />  
                    ))}
                </div>
            </div>
            <CTA />
        </div>
    </>
  )
};

export default WorkDetail;
