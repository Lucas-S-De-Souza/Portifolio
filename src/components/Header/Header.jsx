import { useState, useEffect, useRef } from "react";
import styles from "./style.module.css";

const links = [
  { id: "home", label: "Home" },
  { id: "sobre", label: "Sobre" },
  { id: "habilidades", label: "Habilidades" },
  { id: "projetos", label: "Projetos" },
  { id: "contato", label: "Contato" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const progressRef = useRef(null);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
    );
    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 10);
      if (y < 100) setActiveSection("home");

      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Esc fecha o menu no celular
  useEffect(() => {
    if (!isMenuOpen) return undefined;
    const onKey = (e) => e.key === "Escape" && closeMenu();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isMenuOpen]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <a href="#home" className={styles.logo}>
        Lucas <span>Santana</span>
      </a>

      <button
        type="button"
        className={styles.menuIcon}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isMenuOpen}
        aria-controls="menu-principal"
      >
        <i className={`bx ${isMenuOpen ? "bx-x" : "bx-menu"}`} aria-hidden="true"></i>
      </button>

      <nav
        id="menu-principal"
        aria-label="Principal"
        className={`${styles.navbar} ${isMenuOpen ? styles.open : ""}`}
      >
        {links.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={activeSection === id ? styles.active : ""}
            aria-current={activeSection === id ? "true" : undefined}
            onClick={closeMenu}
          >
            {label}
          </a>
        ))}
      </nav>

      <div className={styles.progress} ref={progressRef} aria-hidden="true"></div>
    </header>
  );
};

export default Header;