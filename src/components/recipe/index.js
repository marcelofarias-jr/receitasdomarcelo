import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styles from "./Recipe.module.scss"
import { loadTheRecipe } from "../../API/load-recipe";

export default function PostRecipe() {
  const [item, setItem] = useState({});
  const params = useParams();
  let { id } = useParams();
  console.log("id", id);

  const handleRevenue = (id) => {
    axios.get(`http://localhost:3000/receitas/` + id).then((response) => {
      const data = response.data;
      console.log("data", data.titulo);
      setItem(data);
    });
  };
  useEffect(() => {
    const data = handleRevenue(id);
    console.log("item", item.titulo);
  }, []);
  return (
    <Container>
      <div className={styles.revenue}>
        <img src={require("../../assets/img/" + item.foto + ".jpg")} />
        <h1>{item.titulo}</h1>
        <p>{item.resumo}</p>
      </div>
    </Container>
  );
}
