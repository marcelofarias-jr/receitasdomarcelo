import { useCallback, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styles from "./Recipe.module.scss";
import { loadRecipe } from "../../API/load-recipe";

export default function PostRecipe() {
  const [item, setItem] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [preparation, setPreparation] = useState([]);

  let { id } = useParams();

  const handleLoadPosts = useCallback(async (id) => {
    const recipesResponse = await loadRecipe();
    const idItem = id - 1;
    // const dataIgre = (recipesResponse.receitas[idItem].igredientes)
    setPreparation(recipesResponse.receitas[idItem].preparo);
    setIngredients(recipesResponse.receitas[idItem].igredientes);
    setItem(recipesResponse.receitas[idItem]);
  }, []);

  useEffect(() => {
    handleLoadPosts(id);
  }, [id, handleLoadPosts]);
  console.log("item", item);
  console.log("preparation", preparation);
  return (
    <Container>
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
            {!!item.vegano && <label>Vegano</label>}
          </div>
          <h3>Ingredientes</h3>
          <ul>
            {ingredients.map((item, i) => {
              return (
                <li key={i}>
                  {i + 1} - {item}
                </li>
              );
            })}
          </ul>
          <h3>Modo de preparo</h3>
          <ul>
            {preparation.map((item, i) => {
              return (
                <li key={i}>
                  {i + 1} - {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Container>
  );
}
