import { useCallback, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styles from "./Recipe.module.scss";
import { loadRecipe } from "../../API/load-recipe";

export default function PostRecipe() {
  const [item, setItem] = useState([]);
  const [Ingredients, setIngredients] = useState([]);

  let { id } = useParams();

  const handleLoadPosts = useCallback(async (id) => {
    const recipesResponse = await loadRecipe()
    const idItem = (id-1)
    // const dataIgre = (recipesResponse.receitas[idItem].igredientes)
    setIngredients(recipesResponse.receitas[idItem].igredientes)
    setItem(recipesResponse.receitas[idItem])
  }, []);

  useEffect(() => {
    handleLoadPosts(id)

  }, [id, handleLoadPosts]);
  return (
    <Container>
      <div className={styles.revenue}>
        <h1>{item.titulo}</h1>
        {!!item.foto && (
          <img
            src={require("../../assets/img/" + item.foto + ".jpg")}
            alt={item.resumo}
          />
        )}

        <p>{item.resumo}</p>
        <div className={styles.tags}>
          <label>{item.tempoDePreparo}</label>
          <label>{item.rendimento}</label>
        </div>

        <h3>Ingredientes</h3>
        <ul>
        {Ingredients.map((item, i) =>{
          return(
            <li key={i}>{i+1}-{item}</li>
          )

        })}
        </ul>


      </div>
    </Container>
  );
}

