import styles from "./style.module.css";
import { projects, studyProjects } from "../../data/profile";

const Links = ({ repo, demo }) => (
  <div className={styles.links}>
    <a href={repo} target="_blank" rel="noreferrer">
      <i className="bx bxl-github" aria-hidden="true"></i> Código no GitHub
    </a>
    {demo && (
      <a href={demo} target="_blank" rel="noreferrer" className={styles.demo}>
        <i className="bx bx-link-external" aria-hidden="true"></i> Ver demonstração
      </a>
    )}
  </div>
);

const Stack = ({ items }) => (
  <ul className={styles.stack} aria-label="Tecnologias utilizadas">
    {items.map((tech) => (
      <li key={tech}>{tech}</li>
    ))}
  </ul>
);

const ProjectCard = ({ project, index }) => (
  <article
    className={`${styles.box} ${project.featured ? styles.featured : ""} reveal`}
    style={{ "--delay": `${index * 120}ms` }}
  >
    {project.image && (
      <div className={styles.imageBox}>
        <img
          src={project.image}
          alt={`Captura de tela do projeto ${project.title}`}
          loading="lazy"
        />
      </div>
    )}

    <div className={styles.content}>
      <div className={styles.meta}>
        <span className={styles.tag}>{project.category}</span>
        <span className={styles.status}>{project.status}</span>
      </div>

      <h3>{project.title}</h3>
      <p>{project.summary}</p>

      {project.highlights.length > 0 && (
        <ul className={styles.highlights}>
          {project.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}

      <Stack items={project.stack} />
      <Links repo={project.repo} demo={project.demo} />
    </div>
  </article>
);

const Projetos = () => {
  return (
    <section className={styles.projetos} id="projetos">
      <h2 className="heading reveal">
        Meus <span>Projetos</span>
      </h2>

      <div className={styles.container}>
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <h3 className={styles.subheading}>Projetos de estudo</h3>

      <div className={styles.container}>
        {studyProjects.map((project, index) => (
          <article
            className={`${styles.box} reveal`}
            style={{ "--delay": `${index * 120}ms` }}
            key={project.id}
          >
            <div className={styles.imageBox}>
              <img
                src={project.image}
                alt={`Captura de tela do projeto ${project.title}`}
                loading="lazy"
              />
            </div>
            <div className={styles.content}>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <Stack items={project.stack} />
              <Links repo={project.repo} demo={project.demo} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projetos;