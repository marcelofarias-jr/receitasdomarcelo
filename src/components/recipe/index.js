import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styles from "./Recipe.module.scss";

export default function PostRecipe() {
  const [item, setItem] = useState({});
  // const [igredientes, setIgredientes] = useState([]);
  // const params = useParams();
  let { id } = useParams();
  console.log("id", id);

  const handleRevenue = (id) => {
    axios.get(`http://localhost:3000/receitas/` + id).then((response) => {
      const data = response.data;
      console.log("data", data);
      setItem(data);
    });
  };
  useEffect(() => {
    handleRevenue(id);
    // setIgredientes(data.igredientes);
    // const igredientes = setIgredientes(data.igredientes);
  }, [id]);

  return (
    <Container>
      <div className={styles.revenue}>
        <h1>{item.titulo}</h1>
        {!!item.foto && (
          <img
            src={require("../../assets/img/" + item.foto + ".jpg")}
            alt={item.resumo}
          />
        )}

        <p>{item.resumo}</p>
        <div className={styles.tags}>
          <label>{item.tempoDePreparo}</label>
          <label>{item.rendimento}</label>
        </div>
        <h3>Ingredientes</h3>
        <ul></ul>
      </div>
    </Container>
  );
}
