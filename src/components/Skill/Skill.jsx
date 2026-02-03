import styles from "./style.module.css";

const Skill = () => {
  return (
    <div className={styles.skillsWrapper}>
      <h2 className="heading">
        Minhas <span>Habilidades</span>
      </h2>

      <div className={styles.skillsContainer}>
        <div className={styles.skillCard}>
          <i className="bx bx-code-alt"></i>
          <h3>Front-end</h3>
          <div className={styles.subCardsContainer}>
            <span className={styles.subCard}>HTML</span>
            <span className={styles.subCard}>CSS</span>
            <span className={styles.subCard}>Typescript</span>
            <span className={styles.subCard}>React</span>
          </div>
        </div>

        <div className={styles.skillCard}>
          <i className="bx bx-server"></i>
          <h3>Back-end & Mobile</h3>
          <div className={styles.subCardsContainer}>
            <span className={styles.subCard}>Node.js</span>
            <span className={styles.subCard}>Kotlin</span>
            <span className={styles.subCard}>Java</span>
            <span className={styles.subCard}>C#</span>
          </div>
        </div>

        <div className={styles.skillCard}>
          <i className="bx bx-wrench"></i>
          <h3>Ferramentas & DB</h3>
          <div className={styles.subCardsContainer}>
            <span className={styles.subCard}>Git</span>
            <span className={styles.subCard}>GitHub</span>
            <span className={styles.subCard}>Firebase</span>
            <span className={styles.subCard}>SQL</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
