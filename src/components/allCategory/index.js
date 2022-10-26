import { useCallback, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { loadRecipe } from "../../API/load-recipe";
import { CategoryContent } from "../categoryContent";
import styles from "./AllCategory.module.scss";


export function AllCategory() {
  const [dados, setDados] = useState([]);
  const [category, setCategory] = useState("");
  const [allCategory, setAllCategory] = useState([])

  const handleCategory = useCallback(
    async (theCategory) => {
      setCategory(theCategory);
    },
    []
  );

  const handleLoadPosts = useCallback(async () => {
    const recipesResponse = await loadRecipe();
    setDados(recipesResponse.receitas);
    setAllCategory(recipesResponse.categorias);

  }, []);

  useEffect(() => {
    handleLoadPosts();
  }, [handleLoadPosts]);

  return (
    <section className={styles.category}>
      <Container>
        <div className={styles.category_content}>
          <h1>Categorias</h1>
          {allCategory.map((cat) => {
            return (
              <button
                className={styles.tag__button}
                variant="contained"
                key={cat.id}
                onClick={(e) => {
                  handleCategory(cat.nome);
                }}
              >
                {cat.nome}
              </button>
            );
          })}
        </div>
        <CategoryContent dados={dados} category={category} />
      </Container>
    </section>
  );
}
