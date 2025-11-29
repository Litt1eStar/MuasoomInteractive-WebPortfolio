import styles from "./TeamMember.module.css"

const TeamMember = () => {
  return (
    <>
        <div className={styles.container}>
            <div className={styles.title}>MEET OUR SAVAGE TEAMS</div>
            <div className={styles.memberContainer}>
                <div className={styles.memberItem}></div>
                <div className={styles.memberItem}></div>
                <div className={styles.memberItem}></div>
                <div className={styles.memberItem}></div>
                <div className={styles.memberItem}></div>
                <div className={styles.memberItem}></div>
                <div className={styles.memberItem}></div>
                <div className={styles.memberItem}></div>
                <div className={styles.memberItem}></div>
            </div>
        </div>
    </>
  )
};

export default TeamMember;
