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
              Olá! Sou Lucas, um estudante de Tecnologia da Informação, com
              interesse em desenvolvimento de software e aplicações web. Gosto
              de transformar ideias em soluções funcionais, buscando sempre
              código limpo, organizado e escalável.
            </p>

            <br />

            <p>
              Com domínio em tecnologias <span>Front-end</span> e
              <span> Backend</span>, transito entre a criação de interfaces
              modernas com <span>React</span> e a construção de lógicas robustas
              em <span>C#</span> e <span>Node.js</span>. Minha base em
              <span> SQL</span> e <span>Kotlin</span> me permite entender o
              ecossistema de dados e aplicações mobile, unindo a teoria da minha
              formação em TI com projetos práticos que consolidam minha evolução
              como desenvolvedor.
            </p>
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
