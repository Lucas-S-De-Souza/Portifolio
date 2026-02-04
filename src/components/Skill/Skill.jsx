import { useState } from 'react';
import styles from "./style.module.css";

const SkillCard = ({ icone, titulo, tecnologias }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={`${styles.skillCardContainer} ${isFlipped ? styles.flipped : ""}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={styles.skillCardInner}>
        {/* PARTE DA FRENTE */}
        <div className={styles.skillCardFront}>
          <i className={`bx ${icone}`}></i>
          <h3>{titulo}</h3>
          <div className={styles.flipArrow}>
            <i className='bx bx-rotate-right'></i> {/* Ícone de seta para girar */}
          </div>
        </div>

        {/* PARTE DE TRÁS */}
        <div className={styles.skillCardBack}>
          <h3>Tecnologias</h3>
          <div className={styles.subCardsContainer}>
            {tecnologias.map((tech, index) => (
              <span key={index} className={styles.subCard}>{tech}</span>
            ))}
          </div>
          <div className={styles.flipArrow}>
            <i className='bx bx-undo'></i> {/* Seta para voltar */}
          </div>
        </div>
      </div>
    </div>
  );
};

const Skill = () => {
  return (
    <div className={styles.skillsWrapper}>
      <h2 className={styles.heading}>Minhas <span>Habilidades</span></h2>
      <div className={styles.skillsContainer}>
        <SkillCard 
          icone="bx-code-alt" 
          titulo="Front-end" 
          tecnologias={["HTML", "CSS", "Typescript", "React"]} 
        />
        <SkillCard 
          icone="bx-server" 
          titulo="Back-end & Mobile" 
          tecnologias={["Node.js", "Kotlin", "Java", "C#"]} 
        />
        <SkillCard 
          icone="bx-wrench" 
          titulo="Ferramentas & DB" 
          tecnologias={["Git", "GitHub", "Firebase", "SQL"]} 
        />
      </div>
    </div>
  );
};

export default Skill;