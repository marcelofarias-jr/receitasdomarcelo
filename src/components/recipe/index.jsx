import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Recipe.module.scss";
import { loadRecipe } from "../../API/load-recipe";
import { Container } from "@mui/system";

export default function Recipe() {
  const [item, setItem] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [preparation, setPreparation] = useState([]);

  let { id } = useParams();

  const handleLoadPosts = useCallback(async (id) => {
    const recipesResponse = await loadRecipe();
    const idItem = id - 1;
    setPreparation(recipesResponse.receitas[idItem].preparo);
    setIngredients(recipesResponse.receitas[idItem].igredientes);
    setItem(recipesResponse.receitas[idItem]);
  }, []);

  useEffect(() => {
    document.body.scrollTo(0, 0);
    handleLoadPosts(id);
  }, [id, handleLoadPosts]);
  return (
    <div className={styles.revenue}>
      <div className={styles.revenue__center}>
        <h1>{item.titulo}</h1>
        {!!item.foto && (
          <img
            src={require("../../assets/img/" + item.foto + ".jpg")}
            alt={item.resumo}
          />
        )}
        <p>{item.resumo}</p>
      </div>
      <div className={styles.revenue__left}>
        <div className={styles.tags}>
          <label>
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
            {item.tempoDePreparo}

          </label>
          <label>{item.rendimento}</label>
          <label>{item.tipo}</label>
          <label>{item.culinária}</label>
          {!!item.vegano && <label>Vegano</label>}
        </div>
        <div className={styles.revenue__ingredients}>
          <div className={styles.revenu__content}>
            <Container>
              <h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  class="bi bi-basket"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z" />
                </svg>
                Ingredientes para a sua receita
              </h3>
              <ul>
                {ingredients.map((item, i) => {
                  return <li key={i}>- {item}</li>;
                })}
              </ul>
            </Container>
          </div>
        </div>
        <div className={styles.revenue__preparation}>
          <div className={styles.preparation__content}>
            <Container>
              <h3>Modo de preparo</h3>
              <ul>
                {preparation.map((item, i) => {
                  return <li key={i}>- {item}</li>;
                })}
              </ul>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
}
