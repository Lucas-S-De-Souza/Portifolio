import { useState, useEffect } from "react";
import styles from "./style.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={styles.header}>
      <a href="#" className={styles.logo}>
        Lucas <span>Santana</span>
      </a>

      <i
        className={`bx ${isMenuOpen ? "bx-x" : "bx-menu"} ${styles.menuIcon}`}
        onClick={toggleMenu}
      ></i>

      <nav className={`${styles.navbar} ${isMenuOpen ? styles.active : ""}`}>
        <a
          href="#home"
          className={activeSection === "home" ? styles.active : ""}
          onClick={closeMenu}
        >
          Home
        </a>
        <a
          href="#sobre"
          className={activeSection === "sobre" ? styles.active : ""}
          onClick={closeMenu}
        >
          Sobre
        </a>
        <a
          href="#projetos"
          className={activeSection === "projetos" ? styles.active : ""}
          onClick={closeMenu}
        >
          Projetos
        </a>
        <a
          href="#contato"
          className={activeSection === "contato" ? styles.active : ""}
          onClick={closeMenu}
        >
          Contato
        </a>
      </nav>
    </header>
  );
};

export default Header;
