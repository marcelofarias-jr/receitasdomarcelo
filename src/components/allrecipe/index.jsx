import { Link } from "react-router-dom";
import styles from "./AllRecipe.module.scss";

export default function AllRecipe({ dados = [] }) {
  const data = dados;

  return (
    <>
      <div className={styles.recipe__cards}>
        {!!data &&
          data.map((receita, key) => {
            return (
              <div className={styles.recipe__card} key={key}>
                <div className={styles.recipe__card__photo}>
                  <Link to={`/receitas/${receita.id}`}>
                    <img
                      src={require("../../assets/img/" + receita.foto + ".jpg")}
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
            );
          })}
      </div>
    </>
  );
}
