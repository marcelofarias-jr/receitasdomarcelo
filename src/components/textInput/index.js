import styles from "./TextInput.module.scss";

export default function InputText({ searchValue, handleChange }) {

  return(
    <input
    className={styles.text_input}
    onChange={handleChange}
    value={searchValue}
    type="search"
    placeholder="Pesquise sua receita"
  />
  );
}
