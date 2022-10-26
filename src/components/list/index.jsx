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
                      alt={receita.titulo}
                    />
                  </div>
                  <div className={styles.lista_ultimas_info}>
                    <Link to={`/receitas/${receita.id}`}>
                      <h3>{receita.titulo}</h3>
                    </Link>
                  </div>
                  <div className={styles.lista_ultimas_info__tags}>
                    <p>
                      {receita.tempoDePreparo}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-clock"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                      </svg>
                    </p>
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
                    <p>
                      {receita.tempoDePreparo}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-clock"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                      </svg>
                    </p>
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
