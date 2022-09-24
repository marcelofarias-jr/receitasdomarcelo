import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.menu}>
      <Container className={styles.menu__container}>
        <section className={styles.logo}>
          <a href="/">
            <h1>laricas.com</h1>
          </a>
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
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
