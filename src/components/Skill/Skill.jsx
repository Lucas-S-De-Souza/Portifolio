import styles from "./style.module.css";
import { skills, projectsUsing } from "../../data/profile";

// Ícone de cada tecnologia (Devicon e Boxicons). Sem ícone, o texto continua aparecendo.
const TECH_ICONS = {
  React: "devicon-react-original",
  "Next.js": "devicon-nextjs-plain",
  TypeScript: "devicon-typescript-plain",
  JavaScript: "devicon-javascript-plain",
  HTML: "devicon-html5-plain",
  CSS: "devicon-css3-plain",
  "Tailwind CSS": "devicon-tailwindcss-original",
  Prisma: "devicon-prisma-original",
  PostgreSQL: "devicon-postgresql-plain",
  Java: "devicon-java-plain",
  "Spring Boot": "devicon-spring-original",
  "Oracle SQL": "devicon-oracle-original",
  Stripe: "bx bxl-stripe",
  Resend: "bx bx-envelope",
  "Gemini API": "bx bx-bot",
  Git: "devicon-git-plain",
  GitHub: "devicon-github-original",
  Kotlin: "devicon-kotlin-plain",
  "C#": "devicon-csharp-plain",
  Python: "devicon-python-plain",
};

const GROUP_ICONS = {
  "Front-end": "bx-layout",
  "Back-end e banco de dados": "bx-server",
  "Integrações": "bx-plug",
  Ferramentas: "bx-wrench",
  "Conhecimento complementar": "bx-bookmark",
};

const Skill = () => {
  return (
    <section className={styles.skills} id="habilidades">
      <h2 className="heading reveal">
        Minhas <span>Habilidades</span>
      </h2>

      <p className={`${styles.intro} reveal`}>
        Tecnologias organizadas por área. O ponto{" "}
        <span className={styles.legendDot} aria-hidden="true"></span> marca as que usei
        em um dos projetos abaixo.
      </p>

      <div className={styles.grid}>
        {skills.map((group, index) => (
          <div
            key={group.group}
            className={`${styles.card} ${index === 0 ? styles.wide : ""} reveal`}
            style={{ "--delay": `${index * 100}ms` }}
          >
            <div className={styles.cardHeader}>
              <span className={styles.groupIcon} aria-hidden="true">
                <i className={`bx ${GROUP_ICONS[group.group] || "bx-code-alt"}`}></i>
              </span>
              <h3>{group.group}</h3>
            </div>

            <ul className={styles.list}>
              {group.items.map((tech, i) => {
                const used = projectsUsing(tech);
                const names = used.map((project) => project.title).join(", ");
                return (
                  <li
                    key={tech}
                    className={`${styles.tile} ${used.length ? styles.used : ""}`}
                    style={{ "--i": i }}
                    title={used.length ? `Usado em: ${names}` : undefined}
                  >
                    <i
                      className={`${TECH_ICONS[tech] || "bx bx-code-alt"} ${styles.icon}`}
                      aria-hidden="true"
                    ></i>
                    <span className={styles.label}>{tech}</span>
                    {used.length > 0 && (
                      <span className="sr-only"> (usado em {names})</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;