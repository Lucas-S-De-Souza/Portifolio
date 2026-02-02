import styles from "./style.module.css";

const Sobre = () => {
  return (
    <section className={styles.sobre} id="sobre">
      {/* Aqui usamos a classe que tem o display: flex */}
      <div className={styles.aboutContainer}>
        {/* Envolvemos o título e os parágrafos em uma div de texto */}
        <div className={styles.aboutText}>
          <h2 className="heading">
            Sobre <span>Mim</span>
          </h2>

          <div className={styles.text}>
            <p>
              Olá! Sou <span>Lucas</span>, estudante de Tecnologia da Informação
              com foco em desenvolvimento <span>Full Stack</span>, priorizando a
              criação de interfaces modernas e performáticas no{" "}
              <span>Front-end</span>. Minha motivação é transformar ideias
              complexas em soluções funcionais, prezando sempre por um código
              limpo, organizado e escalável.
            </p>

            <br />

            <p>
              Embora transite por todo o ecossistema de uma aplicação, concentro
              minha especialidade no <span>Front-end</span> com{" "}
              <span>React</span> e <span>TypeScript</span>, garantindo tipagem
              robusta e interfaces dinâmicas. No <span>Back-end</span>, possuo
              domínio em <span>Node.js</span> e <span>Java</span>, o que me
              permite construir lógicas seguras e integrações eficientes.
              <br />
              Além disso, minha base em <span>SQL</span> e <span>Kotlin</span>{" "}
              amplia minha visão sobre gestão de dados e o universo mobile.
              Unindo a teoria da minha formação acadêmica com projetos práticos,
              busco constantemente consolidar minha evolução como desenvolvedor,
              entregando aplicações que unem design intuitivo a uma arquitetura
              de bastidores sólida.
            </p>

            <div className={styles.skillsContainer}>
              <div className={styles.skillCard}>
                <i className="bx bx-code-alt"></i>
                <h3>Front-end</h3>
                <span className={styles.subCard}>HTML</span>
                <span className={styles.subCard}>CSS</span>
                <span className={styles.subCard}>Typescript</span>
                <span className={styles.subCard}>React</span>
              </div>

              <div className={styles.skillCard}>
                <i className="bx bx-server"></i>
                <h3>Back-end & Mobile</h3>
                <span className={styles.subCard}>Node.js</span>
                <span className={styles.subCard}>Kotlin</span>
                <span className={styles.subCard}>Java</span>
                <span className={styles.subCard}>C#</span>
              </div>

              <div className={styles.skillCard}>
                <i className="bx bx-wrench"></i>
                <h3>Ferramentas & DB</h3>
                <span className={styles.subCard}>Git</span>
                <span className={styles.subCard}>GitHub</span>
                <span className={styles.subCard}>Firebase</span>
                <span className={styles.subCard}>SQL</span>
              </div>
            </div>
          </div>
        </div>

        {/* Lado da Imagem */}
        <div className={styles.aboutImage}>
          <img src="/imagens/perfil.jpeg" alt="Sobre mim" />
        </div>
      </div>
    </section>
  );
};

export default Sobre;
