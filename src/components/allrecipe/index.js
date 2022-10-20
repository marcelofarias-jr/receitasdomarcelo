import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./AllRecipe.module.scss";

export default function AllRecipe({dados = []}) {
  const [recipes, setRecipes] = useState([])
  const data = dados

  useEffect(() => {
    setRecipes(dados.dados);
  }, [dados]);

  return (
    <>
      <div className={styles.recipe__cards}>
        {!!data &&
          data.map((receita, key) => {
            return (
              <div className={styles.recipe__card} key={key}>
                <Link to={`/receitas/${receita.id}`}>
                  <img
                    src={require("../../assets/img/" + receita.foto + ".jpg")}
                    alt={receita.resumo}
                  />
                  <h2>{receita.titulo}</h2>
                </Link>
                <div className={styles.recipe__tags}>
                  <p>{receita.tempoDePreparo}</p>
                  <p>{receita.rendimento}</p>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
