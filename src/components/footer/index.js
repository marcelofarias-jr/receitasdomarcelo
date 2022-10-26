/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container } from "react-bootstrap";
import styles from "./Footer.module.scss";
export default function Footer() {
  return (
    <footer>
      {/* <Map /> */}

      <div className={styles.info}>
        <Container>
          © Copyright 2022 - Todos os direitos reservados - Receitas do Marcelo
        </Container>
      </div>
    </footer>
  );
}
