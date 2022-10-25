import styles from "./ContactForm.module.scss";
import * as Yup from "yup";
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

    emailjs.send("service_eweyhtu", "template_tzwtyeb", templateParams,"vg-lseNS7X1Z6v85k")
    .then((response)=>{
      console.log('email enviado', response.status, response.text)
      setName('')
      setEmail('')
      setMessage('')
      alert("Obrigado pelo contato! Sua mensagem foi enviada.")
    }, (error)=>{
      console.log("erro:", error)
    })
  }

  return (
    <div className={styles.ContactForm}>
      {/* <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
          touched,
          values,
        }) => (
          <form onSubmit={handleSubmit}>
            <StyledTextField
              name="name"
              label="Nome"
              required
              value={values.name}
              size="small"
              type="text"
              fullWidth
              variant="outlined"
              // onBlur={handleBlur}
              onChange={handleChange}
            />
            <StyledTextField
              name="email"
              label="Email"
              value={values.email}
              size="small"
              type="email"
              fullWidth
              variant="outlined"
              // onBlur={handleBlur}
              onChange={handleChange}
            />
            <StyledTextField
              name="phone"
              label="Telefone"
              value={values.phone}
              size="small"
              type="tel"
              fullWidth
              variant="outlined"
              // onBlur={handleBlur}
              onChange={handleChange}
            />
            <StyledTextField
              name="message"
              label="Mensagem"
              value={values.message}
              size="medium"
              multiline
              type="text"
              fullWidth
              variant="outlined"
              // onBlur={handleBlur}
              onChange={handleChange}
            />
            <Button
              variant="contained"
              className={styled.submit}
              onClick={(e) => {
                handleSubmit();
              }}>
              Enviar
            </Button>
          </form>
        )}
      </Formik> */}
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
