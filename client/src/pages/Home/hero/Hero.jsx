import styles from './Hero.module.css'
import ButtonType01 from "../../../components/ButtonType01/ButtonType01";


const Hero = () => {
  return (
    <>
        <div className={styles.container}>
            <h1 className={styles.name}>Muasoom</h1>
            <h1 className={styles.name}>Interactive</h1>
            <p className={styles.description}>Production House Based In Thailand</p>
            <div className={styles.btn_container}>
              <ButtonType01 title={"Contact Us"}/>
              <ButtonType01 title={"Projects"}/>
            </div>
        </div>
    </>
  )
};

export default Hero;
