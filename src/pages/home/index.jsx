// import Lista from "components/lista/lista";

import Hero from "../../components/hero";
import List from "../../components/list";
import { useCallback, useEffect, useState } from "react";
import { loadRecipe } from "../../API/load-recipe";
import { Contact } from "../../components/contact";
export default function Home() {
const [dados, setDados] = useState([]);
const [fav, setFav] = useState([]);

const handleLoadPosts = useCallback(async () => {
  const recipesResponse = await loadRecipe();
  setDados(recipesResponse.receitas);
  let favoritos = dados.filter(x => x.destaque === true)
  setFav(favoritos)
}, [dados]);

  useEffect(() => {
    handleLoadPosts();
  }, [handleLoadPosts]);

  return(
    <main>
        <Hero data={fav}/>
        <List data={dados}/>
        <Contact />
    </main>
  )
};
