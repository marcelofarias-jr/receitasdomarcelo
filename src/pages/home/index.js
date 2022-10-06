// import Lista from "components/lista/lista";

import Hero from "../../components/hero";
import List from "../../components/list";
import { useCallback, useEffect, useState } from "react";
import { loadRecipe } from "../../API/load-recipe";
import styles from "./Home.module.scss"
import { Contact } from "../../components/contact";
export default function Home() {
const [dados, setDados] = useState([]);

const handleLoadPosts = useCallback(async () => {
  const recipesResponse = await loadRecipe();
  setDados(recipesResponse.receitas);
}, [dados]);

  useEffect(() => {
    handleLoadPosts();
  }, [handleLoadPosts]);

  return(
    <main className={styles.home}>
        <Hero data={dados}/>
        <List data={dados}/>
        <Contact />
    </main>
  )
};
