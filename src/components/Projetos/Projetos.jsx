import styles from "./style.module.css";

const Projetos = () => {
  const listaProjetos = [
    {
      id: 1,
      titulo: "Assistente de Games 🎮",
      descricao:
        "Este projeto consiste no desenvolvimento de uma aplicação web interativa que une as bases fundamentais do Front-end (HTML5, CSS3 e JavaScript) com o poder da Inteligência Artificial Generativa. O objetivo principal é criar uma interface fluida e responsiva onde o usuário possa interagir em tempo real com o modelo Gemini da Google, transformando uma página estática em um hub de conhecimento avançado para jogadores.",
      imagem: "../../../public/imagens/asst-games.png",
      link: "https://lucas-s-de-souza.github.io/assistente-games/",
    },
    {
      id: 2,
      titulo: "Redes Sociais 📷",
      descricao: "Este projeto consiste no desenvolvimento de uma aplicação web experimental, onde o usuário tem uma experiência imersiva de simulação de interface móvel. O objetivo central é emular o funcionamento de um smartphone dentro do navegador, permitindo que o usuário interaja com um dispositivo virtual e navegue entre diferentes telas que representam as principais redes sociais.",
      imagem: "../../../public/imagens/pj-social.png",
      link: "https://lucas-s-de-souza.github.io/projeto-social/",
    },
    {
      id: 3,
      titulo: "Projeto Site 💻",
      descricao: "Este projeto representa o marco inicial na minha jornada como desenvolvedor web, servindo como base prática para consolidar os conceitos fundamentais de HTML5 e CSS3. O objetivo principal foi criar uma página estruturada do zero, focando na organização semântica do conteúdo e na aplicação de estilos que transformam o código bruto em uma interface visualmente atraente e funcional.",
      imagem: "../../../public/imagens/pj-site.png",
      link: "https://lucas-s-de-souza.github.io/projeto-site/",
    },
  ];

  return (
    <section className={styles.projetos} id="projetos">
      <h2 className="heading">
        Meus <span>Projetos</span>
      </h2>

      <div className={styles.container}>
        {listaProjetos.map((projeto) => (
          <div className={styles.box} key={projeto.id}>
            <div className={styles.imageBox}>
              <img src={projeto.imagem} alt={projeto.titulo} />
              <div className={styles.layer}>
                <a href={projeto.link} target="_blank" rel="noreferrer">
                  <i className="bx bx-link-external"></i>
                </a>
              </div>
            </div>

            <div className={styles.content}>
              <div className={styles.tags}>
                <span className={styles.tagFrontEnd}>Front-End</span>
              </div>
              <h3>{projeto.titulo}</h3>
              <p>{projeto.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projetos;
