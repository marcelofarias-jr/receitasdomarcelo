import { useCallback, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import styles from "./Recipe.module.scss";
import { loadRecipe } from "../../API/load-recipe";
import { Link } from "react-router-dom";
import { Contact } from "../../components/contact";

export default function Recipes() {
  const [dados, setDados] = useState([]);

  const handleLoadPosts = useCallback(async () => {
    const recipesResponse = await loadRecipe();
    setDados(recipesResponse.receitas);
  }, []);

  useEffect(() => {
    handleLoadPosts();
  }, [handleLoadPosts]);
  console.log("receitas", dados);
  return (
    <div className={styles.recipe}>
      <Container>
        <h1>Confira todas as nossas receitas!</h1>
        <div className={styles.recipe__cards}>
          {!!dados &&
            dados.map((receita, key) => {
              return (
                <div className={styles.recipe__card} key={key}>
                  <Link to={`/receitas/${receita.id}`}>
                    <img
                      src={require("../../assets/img/" + receita.foto + ".jpg")}
                      alt={receita.resumo}
                    />
                    <h2>{receita.titulo}</h2>
                  </Link>
                  <div className={styles.recipe__tags}>
                    <p>{receita.tempoDePreparo}</p>
                    <p>{receita.rendimento}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </Container>
      <Contact />
    </div>
  );
}
