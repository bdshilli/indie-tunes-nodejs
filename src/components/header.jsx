import "../styles/header.css";
import "../styles/styles.css";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };

  return (
    <header id="main-header">
      <section class="margins columns">
        <h1 class="one">Indie Tunes</h1>
        <nav id="main-nav">
          <div class="hidden" id="toggle" onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <ul
            id="main-nav-ul"
            class="columns one"
            className={menuOpen ? "" : "hide-small"}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/artistlist">Artists</Link>
            </li>
            <li>
              <Link to="/albumlist">Albums</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default Header;
