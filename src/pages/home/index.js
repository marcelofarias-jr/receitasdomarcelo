// import Lista from "components/lista/lista";

import Hero from "../../components/hero";
import List from "../../components/list";
import { useCallback, useEffect, useState } from "react";
import { loadRecipe } from "../../API/load-recipe";

export default function Home() {
const [dados, setDados] = useState([]);

const handleLoadPosts = useCallback(async () => {
  const recipesResponse = await loadRecipe();
  setDados(recipesResponse);

}, []);

  useEffect(() => {
    handleLoadPosts();
  }, [handleLoadPosts]);

  console.log('dados', dados)
  return(
    <main>
        <Hero />
        <List />
    </main>
  )
};
