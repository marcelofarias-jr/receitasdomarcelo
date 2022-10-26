import ContactForm from "../contactForm";
import styles from "./Contact.module.scss";
export function Contact() {
  return (
    <section className={styles.contact} id="contato">
      <h2>Entre em contato!</h2>
      <p>
        Tem alguma receita que você quer ver aqui? Tem alguma sugestão pra
        gente? Deixe uma mensagem através do formulário abaixo que entraremos em
        contato.
      </p>
      <ContactForm />
    </section>
  );
}
