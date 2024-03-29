import React, { useState } from "react";
import styles from "./Hero.module.scss";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Hero({ data }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Container>
      <section className={styles.destaque}>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {data.map((receita) => {
            return (
              <Carousel.Item key={receita?.id}>
                <div>
                  <img
                    src={require("../../assets/img/" + receita?.foto + ".jpg")}
                    alt={receita?.titulo}
                  />
                  <Carousel.Caption>
                    <div className={styles.caption}>
                      <Link to={`/receitas/${receita?.id}`}>
                        <h3>{receita?.titulo}</h3>
                      </Link>
                      <p>{receita?.resumo}</p>
                    </div>
                  </Carousel.Caption>
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </section>
    </Container>
  );
}
