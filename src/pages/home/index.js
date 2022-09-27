// import Lista from "components/lista/lista";

import Hero from "../../components/hero";
import List from "../../components/list";
import { useCallback, useEffect, useState } from "react";
import { loadRecipe } from "../../API/load-recipe";
import styles from "./Home.module.scss"
export default function Home() {
const [dados, setDados] = useState([]);

const handleLoadPosts = useCallback(async () => {
  const recipesResponse = await loadRecipe();
  console.log('recipe',recipesResponse.receitas);

  setDados(recipesResponse.receitas);

}, []);

  useEffect(() => {
    handleLoadPosts();
  }, [handleLoadPosts]);

  console.log('dados', dados)
  return(
    <main className={styles.home}>
        <Hero />
        <List dados={dados}/>
    </main>
  )
};
