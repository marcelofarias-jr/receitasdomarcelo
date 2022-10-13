import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./CategoryContent.module.scss";
export const CategoryContent = ({ dados, category }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("dados", dados);
    let cat = dados.filter((x) => x.tipo === category);
    console.log("cat", cat);
    setData(cat);
  }, [category, dados]);
  console.log("category", category);
  return (
    <section className={styles.CategoryContent}>
        {category === "" ? (
          <p>sem categoria</p>
        ) : (
          <>
            <h1>Confira todas as nossas receitas de {category}</h1>
            {data.map((receita) => {
              return (
                <div className={styles.CategoryContent_cards} key={receita.id}>
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
          </>
        )}
    </section>
  );
};
