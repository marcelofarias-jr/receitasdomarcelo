/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

function Header() {
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
                <li>
                  <Link to="/recipe" className={styles.menu_item_mbl}>
                    Veja todas as nossas receitas
                  </Link>
                </li>
                <li>
                <Link to="/category" className={styles.menu_item_mbl}>
                    Categorias
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </Container>
    </header>
  );
}

// <header className={styles.menu}>
//   <Container className={styles.menu__container}>
//     <div className={styles.menu__desktop}>
//       <section className={styles.logo}>
//         <a href="/">
//           <img
//             src={require("../../assets/img/logo-marcelo.png")}
//             alt="logo do site - Receitas do Marcelo"
//           />
//         </a>
//       </section>
//       <nav className={styles.menu_item}>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contato</Link>
//           </li>
//           <li>
//             <Link to="/recipe">Receitas</Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//     <div className={styles.menu__mble} >
//       <button>
//         <HiOutlineMenu />
//       </button>
//       <div className={styles.menu__mble__content} style={style}>
//         <nav className={styles.menu_item__mbl}>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/contact">Contato</Link>
//             </li>
//             <li>
//               <Link to="/recipe">Receitas</Link>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </div>
//   </Container>
// </header>

export default Header;
