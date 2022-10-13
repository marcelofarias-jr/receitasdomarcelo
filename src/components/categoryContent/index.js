import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

export const CategoryContent = ({dados, category}) =>{
  const [data, setData] = useState([])

  useEffect(() => {
    console.log('dados', dados)
    let cat = dados.filter(x => x.tipo === category);
    let cat2 = dados.filter(x => x.tipo === 'Massa');
    console.log('cat',cat)
    console.log('cat2',cat2)
    setData(cat)

  }, [category, dados]);
  console.log('category',category)
    return(
      <section>
        <Container>
        {(category === '') ? (
        <p>sem categoria</p>
      ) : (
        <h1>:{category}</h1>
      )}
        </Container>

      </section>

    );
}
