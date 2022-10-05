import styles from "./List.module.scss";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { style } from "@mui/system";

export default function List({ data }) {
  const [dados, setDados] = useState([]);

  const handleLoadPosts = useCallback(async () => {
    setDados(data);
  }, [data]);

  useEffect(() => {
    handleLoadPosts();
  }, [handleLoadPosts]);

  return (
    <Container>
      <section className={styles.lista}>
        <div className={styles.lista_ultimas}>
          <h2>Últimas receitas</h2>
          <div className={styles.lista_conteudo}>
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
                    <div className={styles.lista_ultimas_info__tags}>
                      <p>{receita.tempoDePreparo}</p>
                      <p>{receita.rendimento}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.lista_acessadas}>
          <h2>Mais acessadas</h2>
          <div className={styles.lista_conteudo}>
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
                    <div className={styles.lista_ultimas_info__tags}>
                      <p>{receita.tempoDePreparo}</p>
                      <p>{receita.rendimento}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Container>
  );
}
