import styles from "./Quotes.module.css"

const Quotes = () => {
  return (
    <>
        <div className={styles.container}>
            <div className={styles.title}>"ANOTHER QUOTE"</div>
            <div className={`${styles.content} ${styles.firstContent}`}>
                <div className={styles.content_header}>Creativity</div>
                <div className={styles.content_desc}>We believe in pushing boundaries and delivering unique, impactful solutions through fresh ideas and innovative thinking.</div>
            </div>
            <div className={`${styles.content} ${styles.secondContent}`}>
                <div className={styles.content_header}>Collaboration</div>
                <div className={styles.content_desc}>We thrive on teamwork, creating a space where diverse perspectives come together to drive success for our clients.</div>
            </div>
            <div className={`${styles.content} ${styles.thirdContent}`}>
                <div className={styles.content_header}>Excellence</div>
                <div className={styles.content_desc}>We are committed to delivering the highest quality in everything we do, ensuring that our clients always receive top-notch results.</div>
            </div>
        </div>
    </>
  )
};

export default Quotes;
