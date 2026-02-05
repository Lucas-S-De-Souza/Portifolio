import styles from './style.module.css'; 

const Home = () => {
  return (
    <section className={styles.Container} id="home">
      <div className={styles.Content}>
        <h3>Olá, sou o</h3>
        <h1>Lucas</h1>
        <h3><span>Desenvolvedor Front-end</span></h3>
        <p>Apaixonado por criar interfaces modernas e interativas.</p>
        <div className={styles.socialicons}>
          <a href="https://www.linkedin.com/in/lucas-santana-394a9b2a5" className={styles.linkedin} aria-label='LinkedIn'><i className='bx bxl-linkedin'></i></a>
          <a href="https://github.com/Lucas-S-De-Souza" className={styles.github} aria-label='GitHub'><i className='bx bxl-github'></i></a>
          <a href="https://wa.me/5513996849496" className={styles.whatsapp} aria-label='WhatsApp'><i className='bx bxl-whatsapp'></i></a>
        </div>
      </div>      
    </section>
  );
};

export default Home;