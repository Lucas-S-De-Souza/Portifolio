import styles from "./style.module.css";
import { profile } from "../../data/profile";

const Sobre = () => {
  return (
    <section className={styles.sobre} id="sobre">
      <div className={styles.aboutContainer}>
        <div className={styles.aboutText}>
          <h2 className="heading reveal">
            Sobre <span>Mim</span>
          </h2>

          <div className={`${styles.text} reveal`}>
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className={styles.availability}>{profile.availability}</p>
          </div>
        </div>

        <div className={`${styles.aboutImage} reveal`}>
          <img
            src="/imagens/perfil.jpeg"
            alt="Foto de Lucas Santana"
            width="320"
            height="320"
          />
        </div>
      </div>
    </section>
  );
};

export default Sobre;