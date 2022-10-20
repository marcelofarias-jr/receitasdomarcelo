import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./SearchRecipe.module.scss";

export default function SearchRecipe({ dados, searchValue }) {
  const [search, setSearch] = useState([]);
  console.log("dados", dados);

  // const handlerSearch = (dados) =>{
  //   const teste = dados.filter((x) => x.titulo ==='Macarrão')
  //   console.log('teste',teste)
  // }
  // console.log('searchValue', searchValue)

  // const handlerSearch = (dados) => {
  //   const teste = dados.filter((x)=> x.titulo === "Macarrão")
  //   console.log('1',teste)
  // };
  useEffect(() => {
    let searchTemp = dados.filter((x) =>
      x.titulo.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearch(searchTemp);
    console.log("searchTemp", searchTemp);
  }, [searchValue]);

  return (
    <>
      <div className={styles.search}>
        {search.length === 0 &&(
          <p>Não existem receitas com esse titulo</p>
        )}
        {search.length > 0 &&
          search.map((receita) => {
            return (
              <>
                <div className={styles.recipe__card} key={receita.id}>
                  <Link to={`/receitas/${receita.id}`}>
                    <img
                      src={require("../../assets/img/" + receita.foto + ".jpg")}
                      alt={receita.resumo}
                    />
                    <h2>{receita.titulo}</h2>
                  </Link>
                  <p className={styles.resumo}>{receita.resumo}</p>
                  <div className={styles.recipe__tags}>
                    <p>{receita.tempoDePreparo}</p>
                    <p>{receita.rendimento}</p>
                    <p>{receita.tipo}</p>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
}
