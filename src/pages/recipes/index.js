import { useCallback, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import styles from "./Recipes.module.scss";
import { loadRecipe } from "../../API/load-recipe";
import { Link } from "react-router-dom";
import { Contact } from "../../components/contact";
import InputText from "../../components/textInput";
import AllRecipe from "../../components/allrecipe";
import SearchRecipe from "../../components/searchRecipe";

export default function Recipes() {
  const [dados, setDados] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const handleLoadPosts = useCallback(async () => {
    const recipesResponse = await loadRecipe();
    setDados(recipesResponse.receitas);
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };
  useEffect(() => {
    handleLoadPosts();
  }, [handleLoadPosts]);
  return (
    <div className={styles.recipe}>
      <Container>
        <div className={styles.recipe_header}>
          <h1>Confira todas as nossas receitas!</h1>
          <InputText searchValue={searchValue} handleChange={handleChange} />
        </div>
        {searchValue.length > 0 && (
          <SearchRecipe searchValue={searchValue} dados={dados} />
        )}
        {searchValue.length === 0 && <AllRecipe dados={dados} />}
      </Container>
      <Contact />
    </div>
  );
}
