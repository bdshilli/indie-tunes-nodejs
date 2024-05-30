import "../styles/header.css";
import "../styles/styles.css";
import { Outlet, Link } from "react-router-dom";
const Header = () => {
  return (
    <header id="main-header">
      <section class="margins columns">
        <h1 class="one">Indie Tunes</h1>
        <nav id="main-nav">
          <div class="hidden" id="toggle">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <ul id="main-nav-ul" class="columns one">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/artist-list">Artists</Link>
            </li>
            <li>
              <Link to="/genre-list">Genres</Link>
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
