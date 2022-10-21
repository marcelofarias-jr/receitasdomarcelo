import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./CategoryContent.module.scss";
export const  CategoryContent = ({ dados, category }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let cat = dados.filter((x) => x.tipo === category);
    setData(cat);
  }, [category, dados]);

  return (
    <section className={styles.CategoryContent}>
      {category === "" ? (
        <p>Selecione uma categoria</p>
      ) : (
        <>
          <h1>Confira todas as nossas receitas de {category}</h1>
          {data.map((receita) => {
            return (
              <div className={styles.CategoryContent_cards}>
                <div className={styles.CategoryContent_cards_img}>
                  <img
                    src={require("../../assets/img/" + receita.foto + ".jpg")}
                    alt={receita.titulo}
                  />
                </div>
                <div className={styles.CategoryContent_cards_info}>
                  <Link to={`/receitas/${receita.id}`}>
                    <h3>{receita.titulo}</h3>
                  </Link>
                  <p className={styles.card_summary}>{receita.resumo}</p>
                  <div className={styles.lista_ultimas_info__tags}>
                    <p>{receita.tempoDePreparo}</p>
                    <p>{receita.rendimento}</p>
                    <p>{receita.tipo}</p>
                    <p>{receita.culinária}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      )}
    </section>
  );
};
