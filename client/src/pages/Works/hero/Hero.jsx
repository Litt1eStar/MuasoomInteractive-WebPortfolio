import styles from "./Hero.module.css"

const Hero = () => {
  return (
    <>
        <div className={styles.container}>
            <div className={styles.title}>OUR PROJECTS</div>
            <div className={styles.description}>We’re a hands-on team that values open communication and personal connection. You’ll work directly with the people building your campaigns, and we’ll shape everything around your goals, your voice, and your audience.</div>
        </div>
    </>
  )
};

export default Hero;
