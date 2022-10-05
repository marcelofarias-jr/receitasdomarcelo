/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container } from "react-bootstrap";
import ContactForm from "../contactForm";
import { Map } from "../map";
import styles from "./Footer.module.scss";
export default function Footer() {
  return (
    <footer>
      <Map />
      <Container>
        <div className={styles.info}>
          © Copyright 2022 - Todos os direitos reservados - Receitas do Marcelo
        </div>
      </Container>
    </footer>
  );
}
