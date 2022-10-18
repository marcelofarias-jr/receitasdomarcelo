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
  console.log("item", item);
  console.log("preparation", preparation);
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
          <label>{item.tempoDePreparo}</label>
          <label>{item.rendimento}</label>
          <label>{item.tipo}</label>
          <label>{item.culinária}</label>
          {!!item.vegano && <label>Vegano</label>}
        </div>
        <div className={styles.revenue__ingredients}>
          <div className={styles.revenu__content}>
            <Container>
              <h3>Ingredientes para a sua receita</h3>
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
              <h3>Como preparar {item.titulo}:</h3>
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
