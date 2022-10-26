/* eslint-disable jsx-a11y/anchor-is-valid */

import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Map.module.scss";


export function Map() {
  return (
    <section className={styles.map}>
      <Container>
        <div className={styles.map_container}>
          <h4>Navegue pelas nossas categorias:</h4>
          <ul>
            <li>
              <Link to="/category/massas" className={styles.menu_item_dsk}>Massas</Link>
            </li>
            <li>
              <a href="#">Sobremesas</a>
            </li>
            <li>
              <a href="#">Carnes</a>
            </li>
            <li>
              <a href="#">Carnes suína</a>
            </li>
            <li>
              <a href="#">Frutos do mar</a>
            </li>
            <li>
              <a href="#">Aves</a>
            </li>
            <li>
              <a href="#">Lanches</a>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
