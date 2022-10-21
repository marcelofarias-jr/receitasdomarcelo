import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./SearchRecipe.module.scss";

export default function SearchRecipe({ dados, searchValue }) {
  const [search, setSearch] = useState([]);

  useEffect(() => {
    let searchTemp = dados.filter((x) =>
      x.titulo.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearch(searchTemp);
    console.log("searchTemp", searchTemp);
  }, [searchValue]);

  return (
    <>
      <div className={styles.recipe__cards}>
        <div className={styles.search}>
          {search.length === 0 && <p>Não existem receitas com esse titulo</p>}
          {search.length > 0 &&
            search.map((receita) => {
              return (
                <>
                  <div className={styles.recipe__card} key={receita.id}>
                    <div className={styles.recipe__card__photo}>
                      <Link to={`/receitas/${receita.id}`}>
                        <img
                          src={require("../../assets/img/" +
                            receita.foto +
                            ".jpg")}
                          alt={receita.resumo}
                        />
                      </Link>
                    </div>
                    <div className={styles.recipe__card__info}>
                      <Link to={`/receitas/${receita.id}`}>
                        <h2>{receita.titulo}</h2>
                      </Link>
                      <span>{receita.resumo}</span>
                    </div>
                    <div className={styles.recipe__card__tag}>
                      <p>{receita.tempoDePreparo}</p>
                      <p>{receita.rendimento}</p>
                      <p>{receita.tipo}</p>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}
