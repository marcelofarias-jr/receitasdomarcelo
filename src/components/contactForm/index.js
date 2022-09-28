import { TextField } from '@mui/material';
import { Formik } from 'formik';
import styles from './ContactForm.module.scss';

export default function ContactForm(){
  let initialValues = {

  };
  const handleSubmit = async (values)=>{

  };
  const validationSchema = {};
  return(
    <div className={styles.ContactForm}>
      <h3>Entre em contato comigo</h3>
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
          <TextField
                  name='USR_NOM'
                  label='Nome'
                  value={values.USR_NOM}
                  size='small'
                  type='text'
                  fullWidth
                  variant='standard'
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
        </form>
      )}

      </Formik>
    </div>
  );
}
