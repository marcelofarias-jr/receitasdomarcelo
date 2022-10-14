import { useCallback, useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { loadRecipe } from "../../API/load-recipe";
import { CategoryContent } from "../../components/categoryContent";
import { Contact } from "../../components/contact";
import styles from "./Category.module.scss";

export function Category() {
  const [dados, setDados] = useState([]);
  const [category, setCategory] = useState("");

  const handleCategory = useCallback(
    async (theCategory) => {
      setCategory(theCategory);
      console.log(category);
    },
    [category]
  );

  const handleLoadPosts = useCallback(async () => {
    const recipesResponse = await loadRecipe();
    setDados(recipesResponse.receitas);
  }, []);

  useEffect(() => {
    handleLoadPosts();
  }, [handleLoadPosts, handleCategory, category]);

  return (
    <>
      <section className={styles.category}>
        <Container>
          <div className={styles.category_content}>
            <h1>Categorias</h1>
            <Button
              variant="contained"
              // className={styled.submit}
              onClick={(e) => {
                handleCategory("Aves");
              }}
            >
              Aves
            </Button>
            <Button
              variant="contained"
              // className={styled.submit}
              onClick={(e) => {
                handleCategory("Massas");
              }}
            >
              Massas
            </Button>
            <Button
              variant="contained"
              // className={styled.submit}
              onClick={(e) => {
                handleCategory("Acompanhamentos");
              }}
            >Acompanhamentos
            </Button>
            <Button
              variant="contained"
              // className={styled.submit}
              onClick={(e) => {
                handleCategory("Carnes suína");
              }}
            >Carnes suína
            </Button>
            <Button
              variant="contained"
              // className={styled.submit}
              onClick={(e) => {
                handleCategory("Doces");
              }}
            >Doces
            </Button>
          </div>
          <CategoryContent dados={dados} category={category} />
        </Container>
      </section>
      <Contact />
    </>
  );
}
