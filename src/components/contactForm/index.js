import { Button, TextField } from "@mui/material";
import { Formik } from "formik";
import styles from "./ContactForm.module.scss";
import styled from "styled-components/macro";
import * as Yup from "yup";

const StyledTextField = styled(TextField)({
  "& input": {
    color: "white",
  },
  "& textarea": {
    color: "white",
  },
  "& label": {
    color: "white",
  },
  "&:hover label": {
    fontWeight: 700,
  },
  "& label.Mui-focused": {
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "white",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "white",
      borderWidth: 2,
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
});

export default function ContactForm() {
  let initialValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  const handleSubmit = async (values) => {console.log('valores', values)};

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Este campo é obrigatório"),
  });
  return (
    <div className={styles.ContactForm} id="contato">
      <Formik
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
      </Formik>
    </div>
  );
}
