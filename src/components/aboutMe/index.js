import { Container } from "react-bootstrap";
import styles from "./AboutMe.module.scss";

export default function AboutMe() {
  return (
    <section className={styles.AboutMe}>
      <Container>
        <div className={styles.AboutMe__content}>
          <div className={styles.AboutMe__text}>
            <h1>Quem sou eu:</h1>
            <p>
              Este site foi desenvolvido e é mantido por mim mesmo,Marcelo, cozinheiro
              experimental. As receitas são todas testadas por mim e com alguns
              comentários a respeito de como eu às preparo. Este site foi criado
              como uma forma de praticar programação e também ter o meu livro de
              receitas em qualquer lugar. Se quiser deixar sua receita eu vou
              adorar preparar, manda pra mim lá no contato.
            </p>
          </div>
          <div className={styles.AboutMe__img}>
            <img
              src={require("../../assets/img/marcelo-farias.jpeg")}
              alt="Marcelo Farias"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
