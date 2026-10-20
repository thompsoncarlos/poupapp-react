import styles from "./aside.module.css";
import logo from "../../assets/logo.svg";

export const Aside = () => {
  return (
    <aside className={styles.aside}>
      <img src={logo} alt="" />
      <footer className={styles.footer}>
        Desenvolvido por Carlos Thompson, seguindo a formação React Developer da Alura Cursos. 
        Este projeto é fictício com fins educacionais.
      </footer>
    </aside>
  );
};
