import React, { useCallback, useEffect, useState } from "react";
import styles from "./Hero.module.scss";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { Container } from "react-bootstrap";
import { loadRecipe } from "../../API/load-recipe";

export default function Hero({data}) {
  const [index, setIndex] = useState(0);
  const [highlights, setHighlights] = useState([]);
  const [dados, setDados] = useState([data]);


  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  console.log('dados',dados)
  return (
    <Container>
      <section className={styles.destaque}>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {dados.map((receita)=>{
            return(
              <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("../../assets/img/"+receita.foto+".jpg")}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>{receita.titulo}</h3>
                <p>{receita.resumo}</p>
              </Carousel.Caption>
            </Carousel.Item>
            )
          })}
        </Carousel>
      </section>
    </Container>
  );
}
