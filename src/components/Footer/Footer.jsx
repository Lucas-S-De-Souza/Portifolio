import styles from './style.module.css';

const Footer = () => {
  return ( 
    <footer className={styles.footer}>
      <div className={styles.footerText}>
        <p> &copy; {new Date().getFullYear()} Lucas Santana | Todos os direitos reservados.</p>
        <div>
          <a href='https://www.linkedin.com/in/lucas-santana-394a9b2a5' className={styles.linkedin}>Linkedin</a>
        <a href='https://github.com/Lucas-S-De-Souza' className={styles.github}>GitHub</a>
        <a href='https://wa.me/5513996849496' className={styles.whatsapp}>WhatsApp</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

