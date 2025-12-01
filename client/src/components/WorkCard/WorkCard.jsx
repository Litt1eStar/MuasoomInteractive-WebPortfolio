import styles from "./WorkCard.module.css"
import { Link } from 'react-router-dom';


export const WorkType = ({type}) => {
    return (
        <>
            <div className={styles.worktype_box}>
                {type}
            </div>
        </>
    )
}


const WorkCard = ({id, imageUrl, types = []}) => {
    const cardImage = {backgroundImage: `url(${imageUrl})`};
    const detailPath = `/works/${id}`;

  return (
    <>
        <a 
            href={detailPath}
            key={id} 
            className={styles.card} 
            style={cardImage}
        >
            {types.map((typeString, index) => (
                <WorkType key={index} type={typeString} />
            ))}
        </a>
    </>
  )
};

export default WorkCard;
