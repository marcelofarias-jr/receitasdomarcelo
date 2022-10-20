/* eslint-disable jsx-a11y/anchor-is-valid */
import { useCallback, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { loadRecipe } from "../../API/load-recipe";
import styles from "./Header.module.scss";

function Header() {
  const [open, setOpen] = useState(false);
  const [dados, setDados] = useState([]);

  const handleLoadPosts = useCallback(async () => {
    const recipesResponse = await loadRecipe();
    setDados(recipesResponse.receitas);
  }, []);

    useEffect(() => {
      handleLoadPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dados]);
  return (
    <header>
      <Container>
        <div className={styles.header__content}>
          <div className={styles.header__logo}>
            <a href="/">
              <img
                src={require("../../assets/img/logo-marcelo.png")}
                alt="logo do site - Receitas do Marcelo"
              />
            </a>
          </div>
          <div className={styles.header__nav}>
            <nav className={styles.menu_item}>
              <ul>
                <li>
                  <Link to="/recipe" className={styles.menu_item_dsk}>
                    Receitas
                  </Link>
                </li>
                <li className={styles.menu_item_dsk}>
                  <Link to="/category" className={styles.menu_item_dsk}>
                    Categorias
                  </Link>
                </li>
                <li className={styles.menu_item_dsk}>
                  <a href="#contato">Contato</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className={styles.menu__mbl}>
          <button
            onClick={(e) => {
              setOpen(!open);
            }}
          >
            <img
              src={require("../../assets/img/logo-marcelo.png")}
              alt="logo do site - Receitas do Marcelo"
            />
          </button>
          {open === true && (
            <div className={styles.menu_mbl_itens}>
              <Link to="/" className={styles.menu_item_mbl}>
                Home
              </Link>
              <Link to="/recipe" className={styles.menu_item_mbl}>
                Todas as receitas
              </Link>
              <Link to="/category" className={styles.menu_item_mbl}>
                Todas as cetegorias
              </Link>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
}

export default Header;
