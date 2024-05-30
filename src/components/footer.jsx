import "../styles/footer.css";
import "../styles/styles.css";
import { Outlet, Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer id="main-footer">
      <div id="contact-footer" class="margins">
        <Link to="/contact">Contact Us</Link>
        <a>|</a>
        <a href="submit.html">Submit Album</a>
      </div>
      <div id="reasources-footer" class="margins">
        <p>&copy; 2024 Indie Tunes</p>
        Icons by{" "}
        <a target="_blank" href="https://icons8.com">
          Icons8
        </a>
      </div>
    </footer>
  );
};

export default Footer;
