import WORKS_DATA from "../../data/worksData";
import styles from "./WorkDetail.module.css";
import { WorkType } from "../../components/WorkCard/WorkCard";
import CTA from "../../components/CTA/CTA";

const WorkDetail = () => {
  const pathName = window.location.pathname;
  const pathSegments = pathName.split('/');
  const workIdString = pathSegments[pathSegments.length - 1];

  const targetId = parseInt(workIdString, 10);
  const project = WORKS_DATA.find(p => p.id == targetId);

  const workImagePath = {backgroundImage: `url(${project.imageUrl})`}

  return (
    <>
        <div className={styles.container}>
            <div className={styles.title}>Dolorem</div>
            <div className={styles.workImg} style={workImagePath}></div>
            <div className={styles.detailContainer}>
                <div className={styles.subHeader}>DETAIL</div>
                <div className={styles.description}>{project.detail}</div>
                <div className={styles.subHeader}>Duration : 1 week</div>
                <div className={styles.typeContainer}>
                    {project.types.map((type) => (
                        <WorkType key={type} type={type} />  
                    ))}
                </div>
            </div>
            <CTA />
        </div>
    </>
  )
};

export default WorkDetail;
