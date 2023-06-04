import styles from "./ContactForm.module.scss";
import { useState } from "react";
import emailjs from "emailjs-com";


export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendMail(e){
    e.preventDefault();
    if(name === '' || email ==='' || message === ''){
      alert("Preencha todos os campos");
      return;
    }
    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }

    emailjs.send('service_pouirx8', 'template_tzwtyeb', templateParams, 'vg-lseNS7X1Z6v85k')
    .then(() => {
        setName('');
        setEmail('');
        setMessage('');
        alert('Obrigado pelo contato! Sua mensagem foi enviada.');
    }, (error) => {
        console.log('erro:', error);
    });
}

  return (
    <div className={styles.ContactForm}>
      <form className="form" onSubmit={sendMail}>
        <input
          className="input"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <input
          className="input"
          type="email"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <textarea
          className="textarea"
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <button className="button" type="submit" value="Enviar">Enviar</button>
      </form>
    </div>
  );
}
