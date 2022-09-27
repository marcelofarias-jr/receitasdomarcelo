import styles from "./List.module.scss";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { loadRecipe } from "../../API/load-recipe";
// import receitas from "../../API/db.json"
export default function List() {
  const [dados, setDados] = useState([]);

  const handleLoadPosts = useCallback(async () => {
    const recipesResponse = await loadRecipe();
    setDados(recipesResponse);
  }, []);

  useEffect(() => {
    handleLoadPosts();
  }, [handleLoadPosts]);


  return (
    <Container>
    <section className={styles.lista}>
      <div className={styles.lista_ultimas}>
        <h2>Últimas receitas</h2>
        <section className={styles.lista_conteudo}>
          {dados.map((receita) => {
            return (
              <div className={styles.lista_ultimas_item} key={receita.id}>
                <img
                  src={require("../../assets/img/" + receita.foto + ".jpg")}
                  alt={receita.resumo}
                />
                <div className={styles.lista_ultimas_info}>
                  <Link to={`/receitas/${receita.id}`}>
                    <h3>{receita.titulo}</h3>
                  </Link>
                  <Row>
                    <p>{receita.tempoDePreparo}</p>
                    <p>{receita.rendimento}</p>
                  </Row>
                </div>
              </div>
            );
          })}
        </section>
      </div>
      <div className={styles.lista_acessadas}>
        <h2>Mais acessadas</h2>
        <section className={styles.lista_conteudo}>
          {dados.map((receita) => {
            return (
              <div className={styles.lista_ultimas_item} key={receita.id}>
                <img
                  src={require("../../assets/img/" + receita.foto + ".jpg")}
                  alt={receita.resumo}
                />
                <div className={styles.lista_ultimas_info}>
                  <Link to={`/receitas/${receita.id}`}>
                    <h3>{receita.titulo}</h3>
                  </Link>
                  <Row>
                    <p>{receita.tempoDePreparo}</p>
                    <p>{receita.rendimento}</p>
                  </Row>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </section>
    </Container>

  );
}
