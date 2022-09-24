import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.menu}>

        <section className={styles.logo}>
        <Container>
          <a href="/">
            <h1>laricas.com</h1>
          </a>
          </Container>
        </section>
        <nav className={styles.menu_item}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contato</Link>
            </li>
            <li>
              <Link to="/recipe">Receitas</Link>
            </li>
            <li>
              <Link to="/receitas/1">Receita 1</Link>
            </li>
          </ul>
        </nav>

    </header>
  );
}

export default Header;
