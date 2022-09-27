/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";

function Header() {
  const [show, setShow] = useState(false)
  let style

  const onClick = () => {
    setShow(!show)
    console.log(show)
  };
 if (show === false){
  style = {display: 'none'}
 }

  return (
    <header className={styles.menu}>
      <Container className={styles.menu__container}>
        <div className={styles.menu__desktop}>
          <section className={styles.logo}>
            <a href="/">
              <img
                src={require("../../assets/img/logo-marcelo.png")}
                alt="logo do site - Receitas do Marcelo"
              />
            </a>
          </section>
          <nav className={styles.menu_item}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contact">Contato</Link>
              </li>
              <li>
                <Link to="/recipe">Receitas</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.menu__mble} >
          <button onClick={onClick}>
            <HiOutlineMenu />
          </button>
          <div className={styles.menu__mble__content} style={style}>
            <nav className={styles.menu_item__mbl}>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/contact">Contato</Link>
                </li>
                <li>
                  <Link to="/recipe">Receitas</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
