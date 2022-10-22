import { useCallback, useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { loadRecipe } from "../../API/load-recipe";
import { CategoryContent } from "../../components/categoryContent";
import { Contact } from "../../components/contact";
import styles from "./Category.module.scss";

export function Category() {
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
  console.log('all', allCategory)
  return (
    <>
      <section className={styles.category}>
        <Container>
          <div className={styles.category_content}>
            <h1>Categorias</h1>
            {allCategory.map((cat)=>{
              return(
                <Button
                variant="contained"
                key={cat.id}
                onClick={(e) => {
                  handleCategory(cat.nome);
                }}
              >
                {cat.nome}
              </Button>
              )

            })}
          </div>
          <CategoryContent dados={dados} category={category} />
        </Container>
      </section>
      <Contact />
    </>
  );
}
