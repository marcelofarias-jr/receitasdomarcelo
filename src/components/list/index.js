import styles from "./List.module.scss";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

export default function List({ data }) {
  const [last, setLast] = useState([]);
  const [more, setMore] = useState([]);

  const handleLoadLastPosts = useCallback(async () => {
    const last = data.length;
    const lastArray = data.slice(last - 3, last);
    setLast(lastArray);
  }, [data]);

  const handleMoreViewPosts = useCallback(async () => {
    const more = data.slice(0, 3);
    setMore(more);
  }, [data]);

  useEffect(() => {
    handleLoadLastPosts();
    handleMoreViewPosts();
  }, [handleLoadLastPosts, handleMoreViewPosts]);
  return (
    <Container>
      <section className={styles.lista}>
        <div className={styles.lista_ultimas}>
          <h2>Últimas receitas</h2>
          <div className={styles.lista_content}>
            {last.map((receita) => {
              return (
                <div className={styles.lista_ultimas_item} key={receita.id}>
                  <div className={styles.lista_ultimas_item_img}>
                    <img
                      src={require("../../assets/img/" + receita.foto + ".jpg")}
                      alt={receita.resumo}
                    />
                  </div>
                  <div className={styles.lista_ultimas_info}>
                    <Link to={`/receitas/${receita.id}`}>
                      <h3>{receita.titulo}</h3>
                    </Link>
                  </div>
                  <div className={styles.lista_ultimas_info__tags}>
                    <p>{receita.tempoDePreparo}</p>
                    <p>{receita.rendimento}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.lista_ultimas}>
          <h2>Receitas mais acessadas</h2>
          <div className={styles.lista_conteudo}>
            {more.map((receita) => {
              return (
                <div className={styles.lista_ultimas_item} key={receita.id}>
                  <div className={styles.lista_ultimas_item_img}>
                    <img
                      src={require("../../assets/img/" + receita.foto + ".jpg")}
                      alt={receita.resumo}
                    />
                  </div>
                  <div className={styles.lista_ultimas_info}>
                    <Link to={`/receitas/${receita.id}`}>
                      <h3>{receita.titulo}</h3>
                    </Link>
                  </div>
                  <div className={styles.lista_ultimas_info__tags}>
                    <p>{receita.tempoDePreparo}</p>
                    <p>{receita.rendimento}</p>
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
