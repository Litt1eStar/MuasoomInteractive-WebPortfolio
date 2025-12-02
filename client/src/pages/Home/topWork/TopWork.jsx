import styles from './TopWork.module.css';
import { TbHandClick } from "react-icons/tb";

const TopWork = () => {
  return (
    <>
        <div className={styles.container}>
            <a className={`${styles.item} ${styles.firstItem}`} href='/works/7'>
              <div className={styles.detailContainer}>
                <TbHandClick size={70}/>
                <div className={styles.itemDetail}>Click for more detail</div>
              </div>
            </a>
            <a className={`${styles.item} ${styles.secondItem}`} href='/works/6'>
              <div className={styles.detailContainer}>
                <TbHandClick size={70}/>
                <div className={styles.itemDetail}>Click for more detail</div>
              </div>
            </a>
            <a className={`${styles.item} ${styles.lastItem}`} href='/works/1'>
              <div className={styles.detailContainer}>
                <TbHandClick size={70}/>
                <div className={styles.itemDetail}>Click for more detail</div>
              </div>
            </a>
        </div>
    </>
  )
};

export default TopWork;
