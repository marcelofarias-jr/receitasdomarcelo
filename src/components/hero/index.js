import React, { useCallback, useEffect, useState } from "react";
import styles from "./Hero.module.scss";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { Container } from "react-bootstrap";
import { loadRecipe } from "../../API/load-recipe";

export default function Hero({data}) {
  const [index, setIndex] = useState(0);
  const [highlights, setHighlights] = useState([]);
  const [dados, setDados] = useState([]);


  const handleLoadPosts = () => {
    const recipesResponse =  loadRecipe();
    setHighlights(recipesResponse.favoritos);
    setDados(recipesResponse.receitas);
  };

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  useEffect(() => {
    handleLoadPosts();
    console.log(dados)
    // let resultado = dados.filter(h => h.id === (highlights[0].id))
    // console.log('resultado', resultado);
    // let teste = dados.filter(h => h.id === highlights[0].id);
    // console.log('teste',teste);


    // console.log('dados',dados);
    // console.log('highlights',highlights)

    // const [id] = highlights;
    // console.log('id',id);


  }, [dados]);
  // console.log(highlights[0])
  // id[0] = highlights[0]
  // let teste = dados.filter(h => h.id === highlights[0].id);
  // console.log('0', id[0])
  // console.log('teste',teste[0].titulo);
  return (
    <Container>
      <section className={styles.destaque}>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../../assets/img/cake-g883e0c773_1920.jpg")}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../../assets/img/cake-g883e0c773_1920.jpg")}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../../assets/img/pancakes-g02bec7b25_1920.jpg")}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </Container>
  );
}
