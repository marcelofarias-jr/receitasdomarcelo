import { Container } from "react-bootstrap";
import styles from "./Recipe.module.scss";

export default function Recipe(){
  return(
    <Container className={styles.recipe}>
      <h1>página de receitas</h1>
    </Container>
  )
}
