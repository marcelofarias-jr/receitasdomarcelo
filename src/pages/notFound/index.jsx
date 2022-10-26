import { Container } from "react-bootstrap";
import { Contact } from "../../components/contact";
import styles from "./NotFound.module.scss";

export default function NotFound() {
  return (
    <>
      <section className={styles.notfound}>
        <Container>
          <div className={styles.notfound__content}>
            <h1>Página não encontrada</h1>
            <p>
              Nenhuma página foi encontrada com este endereço, caso tenha alguma
              dúvida entre em contato.
            </p>
            <a href="/">Voltar para home</a>
          </div>
        </Container>
      </section>
      <Contact />
    </>
  );
}
