import { useCallback, useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { loadRecipe } from "../../API/load-recipe";
import {CategoryContent} from "../../components/categoryContent";

export function Category(){
  const [dados, setDados] = useState([]);
  const [category, setCategory] = useState("");

  const handleCategory =  useCallback(async(theCategory) => {
    setCategory(theCategory);
    console.log(category)
  },[category]);

  const handleLoadPosts = useCallback(async () => {
    const recipesResponse = await loadRecipe();
    setDados(recipesResponse.receitas);
  }, []);

  useEffect(() => {
    handleLoadPosts();
  }, [handleLoadPosts, handleCategory, category]);


  return(
    <section>
      <Container>
      <h1>Categorias</h1>
      <Button
        variant="contained"
        // className={styled.submit}
        onClick={(e) => {
          handleCategory('Aves');
        }}>
        aves
      </Button>
      <Button
        variant="contained"
        // className={styled.submit}
        onClick={(e) => {
          handleCategory('Massas');
        }}>
        massas
      </Button>
      <h4>{category}</h4>
      <CategoryContent dados={dados} category={category}/>
      </Container>

    </section>

  )
}
