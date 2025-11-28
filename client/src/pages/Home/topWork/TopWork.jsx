import styles from './TopWork.module.css';

const TopWork = () => {
  return (
    <>
        <div className={styles.container}>
            <div className={styles.item}></div>
            <div className={styles.item}></div>
            <div className={`${styles.item} ${styles.lastItem}`}></div>
        </div>
    </>
  )
};

export default TopWork;
