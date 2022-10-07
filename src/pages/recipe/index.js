import { useCallback, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import styles from "./Recipe.module.scss";
import { loadRecipe } from "../../API/load-recipe";

export default function Recipe(){
  const [dados, setDados] = useState([]);

const handleLoadPosts = useCallback(async () => {
  const recipesResponse = await loadRecipe();
  setDados(recipesResponse.receitas);
}, []);

  useEffect(() => {
    handleLoadPosts();
  }, [handleLoadPosts]);
  console.log('receitas',dados)
  return(
    <div className={styles.recipe}>
    <Container>
      <h1>Confira todas as nossas receitas!</h1>
    </Container>
    </div>

  )
}
