import styles from './TopWork.module.css';
import { TbHandClick } from "react-icons/tb";

const TopWork = () => {
  return (
    <>
        <div className={styles.container}>
            <div className={`${styles.item} ${styles.firstItem}`}>
              <div className={styles.detailContainer}>
                <TbHandClick size={70}/>
                <div className={styles.itemDetail}>Click for more detail</div>
              </div>
            </div>
            <div className={`${styles.item} ${styles.secondItem}`}>
              <div className={styles.detailContainer}>
                <TbHandClick size={70}/>
                <div className={styles.itemDetail}>Click for more detail</div>
              </div>
            </div>
            <div className={`${styles.item} ${styles.lastItem}`}>
              <div className={styles.detailContainer}>
                <TbHandClick size={70}/>
                <div className={styles.itemDetail}>Click for more detail</div>
              </div>
            </div>
        </div>
    </>
  )
};

export default TopWork;
