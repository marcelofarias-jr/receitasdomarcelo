/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container } from "react-bootstrap";
import ContactForm from "../contactForm";
import styles from "./Footer.module.scss";
export default function Footer() {
  return (
    <footer>
      <Container>
        <div className={styles.footer__content}>
          <div className={styles.sobre}>
            <ContactForm />
          </div>
          <div className={styles.mapa}>
            <h4>Categorias:</h4>
            <ul>
              <li>
                <a href="#">Massas</a>
              </li>
              <li>
                <a href="#">Sobremesas</a>
              </li>
              <li>
                <a href="#">Carnes</a>
              </li>
              <li>
                <a href="#">Carnes suína</a>
              </li>
              <li>
                <a href="#">Frutos do mar</a>
              </li>
              <li>
                <a href="#">Aves</a>
              </li>
              <li>
                <a href="#">Lanches</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.info}>
          © Copyright 2022 - Todos os direitos reservados
        </div>
      </Container>
    </footer>
  );
}
