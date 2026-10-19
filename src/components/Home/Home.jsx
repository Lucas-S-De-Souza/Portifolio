import styles from "./style.module.css";
import { profile } from "../../data/profile";

const Home = () => {
  const { links } = profile;

  return (
    <section className={styles.Container} id="home">
      <div className={styles.Content}>
        <p className={styles.hello}>Olá, sou o</p>
        <h1>{profile.displayName}</h1>
        <p className={styles.role}>
          <span>{profile.role}</span>
        </p>
        <p className={styles.tagline}>{profile.tagline}</p>

        <div className={styles.actions}>
          <a href="#projetos" className={styles.primary}>
            Ver projetos
          </a>
          <a href="#contato" className={styles.secondary}>
            Entrar em contato
          </a>
        </div>

        <div className={styles.socialicons}>
          <a href={links.linkedin} target="_blank" rel="noreferrer" className={styles.linkedin} aria-label="LinkedIn">
            <i className="bx bxl-linkedin" aria-hidden="true"></i>
          </a>
          <a href={links.github} target="_blank" rel="noreferrer" className={styles.github} aria-label="GitHub">
            <i className="bx bxl-github" aria-hidden="true"></i>
          </a>
          <a href={links.whatsapp} target="_blank" rel="noreferrer" className={styles.whatsapp} aria-label="WhatsApp">
            <i className="bx bxl-whatsapp" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;