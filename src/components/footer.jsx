import "../styles/footer.css";
import "../styles/styles.css";

const Footer = () => {
  return (
    <header id="main-footer">
      <div id="contact-footer" class="margins">
        <a>contact</a>
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
    </header>
  );
};

export default Footer;
