import { Container } from "react-bootstrap";
import styles from "./AboutMe.module.scss";

export default function AboutMe() {
  return (
    <section className={styles.AboutMe}>
      <Container>
        <div className={styles.AboutMe__content}>
          <div className={styles.AboutMe__text}>
            <h1>Quem sou eu</h1>
            <p>
              Olá, me chamo Marcelo e este site foi desenvolvido por mim como uma forma de ter todas as minhas receitas sempre a mão.
              Sou programador e também cozinheiro experimental. As receitas são todas testadas por mim e com alguns comentários a respeito
              de como as preaparo. Se quiser deixar sua receita eu vou adorar preparar, pode deixar logo abaixo no formulário de contato.
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
